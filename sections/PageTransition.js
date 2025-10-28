"use client";

// 1. Import useState
import { useEffect, useRef, useState } from 'react'; // <-- ADDED useState
import { useRouter, usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import Logo from './Logo';


export default function PageTransition({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const overlayRef = useRef(null);
  const logoOverlayRef = useRef(null);
  const logoRef = useRef(null);
  const blocksRef = useRef([]);
  const isTransitioning = useRef(false);

  // 2. Add state to track initial load
  const [isInitialLoad, setIsInitialLoad] = useState(true); // <-- ADDED

  // ... (createBlocks function is unchanged) ...
  const createBlocks = () => {
    if (!overlayRef.current) return;
    overlayRef.current.innerHTML = '';
    blocksRef.current = [];
    const numBlocks = 20;
    for (let i = 0; i < numBlocks; i++) {
      const block = document.createElement('div');
      block.className = 'flex-grow h-full bg-black'; 
      overlayRef.current.appendChild(block);
      blocksRef.current.push(block);
    }
  };
  
  // ... (coverPage function is unchanged) ...
  const coverPage = (href) => {
    const tl = gsap.timeline({
      onComplete: () => {
        router.push(href);
      }
    });
    tl.set(blocksRef.current, { transformOrigin: 'left' });
    tl.to(blocksRef.current, {
      scaleX: 1,
      duration: 1.0,
      stagger: 0.05,
      ease: 'power2.inOut'
    });
    tl.to(logoOverlayRef.current, { autoAlpha: 1 }, 0.3);
    if (logoRef.current) {
      const path = logoRef.current.querySelector('path');
      gsap.set(path, { 
        strokeDashoffset: path.getTotalLength(),
        fill: 'transparent'
      });
      tl.to(path, {
        strokeDashoffset: 0,
        duration: 0.8,
        ease: 'power1.inOut'
      });
      tl.to(path, {
        fill: '#ffffff',
        duration: 0.2,
      }, ">-0.1");
    }
    tl.to(logoOverlayRef.current, {
      autoAlpha: 0,
      duration: 0.3
    });
  };

  // 3. Create a NEW function for the initial preloader
  const runInitialPreloader = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        setIsInitialLoad(false); // Mark initial load as complete
      }
    });

    // 1. Set blocks to be fully covered
    gsap.set(blocksRef.current, { scaleX: 1, transformOrigin: 'right' });

    // 2. Make logo overlay visible
    tl.set(logoOverlayRef.current, { autoAlpha: 1 });

    // 3. Animate logo (copied from coverPage)
    if (logoRef.current) {
      const path = logoRef.current.querySelector('path');
      gsap.set(path, { strokeDashoffset: path.getTotalLength(), fill: 'transparent' });
      tl.to(path, {
        strokeDashoffset: 0,
        duration: 0.8,
        ease: 'power1.inOut'
      });
      tl.to(path, {
        fill: '#ffffff',
        duration: 0.2
      }, ">-0.1");
    }

    // 4. Fade out logo
    tl.to(logoOverlayRef.current, { autoAlpha: 0, duration: 0.3, delay: 0.5 }); // Added a small delay

    // 5. Call revealPage() *after* logo fades
    tl.add(() => {
      revealPage(); // This will wipe away the blocks
    });
  };

  // 4. Modify revealPage: It *only* animates, it doesn't set state anymore.
  const revealPage = () => {
    // REMOVED: The gs.set() line was moved to the calling functions
    
    gsap.to(blocksRef.current, {
      scaleX: 0,
      duration: 1.0, 
      stagger: 0.05,
      ease: 'power2.inOut',
      onComplete: () => {
        isTransitioning.current = false;
      }
    });
  };

  // 5. Modify useEffect to handle the initial load
  useEffect(() => {
    createBlocks();

    // REMOVED: gs.set(blocksRef.current, { scaleX: 0 });
    // We now control the block state manually.

    // Prepare logo path
    if (logoRef.current) {
      const path = logoRef.current.querySelector('path');
      if (path) {
        const length = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
          fill: 'transparent'
        });
      }
    }
    
    if (isInitialLoad) {
      // 1. This is the first load. Run the logo preloader.
      runInitialPreloader();
    } else {
      // 2. This is a subsequent page load.
      // Set blocks to covered (right-side origin) and just reveal.
      gsap.set(blocksRef.current, { scaleX: 1, transformOrigin: 'right' });
      revealPage(); 
    }

    // Link listener logic is unchanged
    const links = document.querySelectorAll('a');
    const handleClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href.startsWith('/') && href !== pathname && !isTransitioning.current) {
        e.preventDefault();
        isTransitioning.current = true;
        coverPage(href);
      }
    };

    links.forEach(link => link.addEventListener('click', handleClick));
    return () => {
      links.forEach(link => link.removeEventListener('click', handleClick));
    };
  }, [pathname]); // This effect re-runs on every page (pathname) change

  // ... (JSX is unchanged) ...
  return (
    <div>
      <div 
        ref={overlayRef}
        className="fixed top-0 left-0 w-full h-screen flex z-[200] pointer-events-none"
      >
      </div>
      <div 
        ref={logoOverlayRef}
        className="fixed top-0 left-0 w-full h-screen grid place-items-center bg-black z-[300] pointer-events-none opacity-0 invisible"
      >
        <div className="w-[134px] h-[134px]">
          <Logo ref={logoRef} />
        </div>
      </div>
      {children}
    </div>
  );
}