"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import ReactLenis from "lenis/react";
import { useEffect, useRef, useState } from "react";

const images = [
  "/images/lummi/img14.png",
  "/images/lummi/img30.png",
  "/images/lummi/img19.png",
  "/images/lummi/img21.png",
  "/images/lummi/img23.png",
  "/images/lummi/imgp2.png",
  "/images/lummi/img27.png",
];

const Skiper34 = () => {
  return (
    <ReactLenis root>
      <section
        className="relative flex w-screen flex-col items-center gap-[10vh] px-4 pt-[50vh]">
        <div
          className="absolute left-1/2 top-24 grid -translate-x-1/2 content-start justify-items-center gap-6 text-center">
          <span
            className="after:from-background after:to-foreground relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:content-['']">
            scroll down to see effect
          </span>
        </div>
        {images.map((img, idx) => (
          <StickyCard_003 key={idx} imgUrl={img} />
        ))}
      </section>
    </ReactLenis>
  );
};

const StickyCard_003 = ({
  imgUrl
}) => {
  const vertMargin = 10;
  const container = useRef(null);
  const [maxScrollY, setMaxScrollY] = useState(Infinity);

  const filter = useMotionValue(0);
  const negateFilter = useTransform(filter, (value) => -value);

  const { scrollY } = useScroll({
    target: container,
  });
  const scale = useTransform(scrollY, [maxScrollY, maxScrollY + 10000], [1, 0]);
  const isInView = useInView(container, {
    margin: `0px 0px -${100 - vertMargin}% 0px`,
    once: true,
  });

  scrollY.on("change", (scrollY) => {
    let animationValue = 1;
    if (scrollY > maxScrollY) {
      animationValue = Math.max(0, 1 - (scrollY - maxScrollY) / 10000);
    }

    scale.set(animationValue);
    filter.set((1 - animationValue) * 100);
  });

  useEffect(() => {
    if (isInView) {
      setMaxScrollY(scrollY.get());
    }
  }, [isInView]);

  return (
    <motion.div
      ref={container}
      // 👇 FIX APPLIED HERE:
      // Removed h-[200px] and added aspect-[16/9]
      className="rounded-4xl sticky w-full max-w-7xl overflow-hidden aspect-[16/9]"
      style={{
        scale: scale,
        rotate: filter,
        // Removed 'height' from here
        top: `${vertMargin}vh`,
      }}>
      <motion.img
        src={imgUrl}
        alt={imgUrl}
        style={{
          rotate: negateFilter,
        }}
        className="h-full w-full scale-125 object-cover"
        sizes="90vw" />
    </motion.div>
  );
};

export { Skiper34, StickyCard_003 };