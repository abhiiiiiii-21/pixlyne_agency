import { forwardRef } from 'react';

const Logo = forwardRef((props, ref) => {
  return (
    <svg
      ref={ref} // Attach the ref here
      width="134" // Fixed width
      height="134" // Fixed height
      viewBox="0 0 134 134" // Viewbox matches width/height for easy scaling
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="logoTitle logoDesc" // Good for accessibility
      role="img"
      {...props}
    >
      <title id="logoTitle">PixLyne Logo</title>
      <desc id="logoDesc">A stylized letter P</desc>
      
      {/* This is a simple path for the letter 'P'.
        The 'd' attribute defines the shape.
        It starts at (30, 30), draws down to (30, 100),
        then up to (30, 30) to start the top curve,
        arcs to (100, 30), then to (100, 65), and back to (30, 65)
      */}
      <path
        d="M 30 30 L 30 100 M 30 30 C 90 0, 90 65, 30 65 M 30 65 L 100 65"
        fill="none" // Important for the stroke animation (no initial fill)
        stroke="#ffffff" // White stroke for contrast on dark background
        strokeWidth="5" // Slightly thicker stroke for visibility
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Logo.displayName = 'Logo';

export default Logo;