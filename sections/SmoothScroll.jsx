'use client'; 
import { ReactLenis } from 'lenis/react';

function SmoothScroll({ children }) {
  const options = {
    lerp: 0.08,
    duration: 1.1,
    smoothTouch: false, 
  };

  return (
    <ReactLenis root options={options}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;