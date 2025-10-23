"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis from "lenis/react";
import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

// StickyCard002 Component
const StickyCard002 = ({ cards, className, containerClassName, imageClassName }) => {
  const container = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const imageElements = imageRefs.current;
    const totalCards = imageElements.length;

    if (!imageElements[0]) return;

    gsap.set(imageElements[0], { y: "0%", scale: 1, rotation: 0 });
    for (let i = 1; i < totalCards; i++) {
      gsap.set(imageElements[i], { y: "100%", scale: 1, rotation: 0 });
    }

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".sticky-cards",
        start: "top top",
        end: `+=${window.innerHeight * (totalCards - 1)}`,
        pin: true,
        scrub: 0.5,
        pinSpacing: true,
      },
    });

    for (let i = 0; i < totalCards - 1; i++) {
      const currentImage = imageElements[i];
      const nextImage = imageElements[i + 1];
      scrollTimeline.to(currentImage, {
        scale: 0.7,
        rotation: 5,
        duration: 1,
        ease: "none",
      }, i);
      scrollTimeline.to(nextImage, {
        y: "0%",
        duration: 1,
        ease: "none",
      }, i);
    }

    const resizeObserver = new ResizeObserver(() => ScrollTrigger.refresh());
    if (container.current) resizeObserver.observe(container.current);

    return () => {
      resizeObserver.disconnect();
      scrollTimeline.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className={cn("relative h-full w-full bg-black", className)} ref={container}>
      <div className="sticky-cards relative flex h-full w-full items-center justify-center overflow-hidden p-3 lg:p-8 bg-black">
        <div
          className={cn(
            "relative h-[90%] w-full max-w-sm overflow-hidden rounded-lg sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl bg-black",
            containerClassName
          )}
        >
          {cards.map((card, i) => (
            <img
              key={card.id}
              src={card.image}
              alt={card.alt || ""}
              className={cn(
                "absolute h-full w-full object-cover rounded-4xl bg-black",
                imageClassName
              )}
              ref={(el) => (imageRefs.current[i] = el)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Example usage component with default cards
const Skiper17 = () => {
  const defaultCards = [
    { id: 1, image: "/images/lummi/img14.png" },
    { id: 2, image: "/images/lummi/img15.png" },
    { id: 3, image: "/images/lummi/img29.png" },
    { id: 4, image: "/images/lummi/img21.png" },
    { id: 5, image: "/images/lummi/img27.png" },
  ];

  return (
    <ReactLenis root>
      <div className="h-full w-full">
        <StickyCard002 cards={defaultCards} />
      </div>
    </ReactLenis>
  );
};

export { Skiper17, StickyCard002 };
