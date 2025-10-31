"use client";
import Beams from "@/components/Beams";
import LogoCloud from "@/components/logo-cloud";
import { HoverButton } from "@/components/ui/hover-glow-button";
import { Mouse } from "lucide-react";
import Image from "next/image";
import React from "react";
import Cta from "../CTA/Cta";
import Pill from "./Pill";

const Hero = () => {
  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/PixlyneLogo/P.png"
            alt="PixLyne Logo"
            width={42}
            height={42}
            className="drop-shadow-[0_0_10px_rgba(0,255,195,0.4)]"
          />
          <p className="text-neutral-300 font-raleway font-semibold text-xl tracking-wide">
            PixLyne
          </p>
        </div>

        {/* Modern Hover Button */}
        <Cta>
          <HoverButton
            data-cal-namespace="30min"
            data-cal-link="srijanpatel/30min"
            data-cal-config='{"layout":"month_view"}'
            glowColor="#0055FE"
            backgroundColor="#0d0d0d"
            textColor="#ffffff"
            hoverTextColor="#ffffff"
            className="!px-5 !py-2  text-sm font-light tracking-wider uppercase"
          >
            Book a Call
          </HoverButton>
        </Cta>
      </nav>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center z-40 text-center px-4">
        {/* Section 1: Tagline Badge */}
        <div className="mb-9 mt-48">
          <Pill/>
        </div>

        {/* Section 2: Headline */}
        <div className="flex flex-col items-center space-y-1 text-neutral-300">
          <h1 className="font-medium text-center font-raleway">
            <span className="block text-8xl tracking-tight leading-none">
              Shaping{" "}
              <span className="italic text-[#0055FE] font-instrument-serif">
                Brands
              </span>
            </span>
            <span className="block text-8xl tracking-tight leading-none mt-2">
              With Every{" "}
              <span className="italic text-[#0055FE] font-instrument-serif">
                Frame
              </span>
            </span>
          </h1>
        </div>

        <div className="mt-20 flex flex-col items-center font-raleway">
          <div className="flex items-center justify-center gap-3 text-neutral-300">
            <p>Scroll down</p>
            <div className="w-40 h-px bg-white/30"></div>
            <Mouse className="animate-smoothFloat" fill="#0055FE" />
            <div className="w-40 h-px bg-white/30"></div>
            <p>to see projects</p>
          </div>

          <LogoCloud />
        </div>
      </div>

      <style jsx>{`
        @keyframes shine {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        .animate-[shine_2s_infinite] {
          background-size: 200% 100%;
          animation: shine 2s infinite linear;
        }

        /* Global smooth float animation for Mouse icon */
        :global(.animate-smoothFloat) {
          display: inline-block;
          animation: smoothFloat 2.5s ease-in-out infinite;
        }

        @keyframes smoothFloat {
          0%,
          100% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(-8px);
            opacity: 0.9;
          }
        }
      `}</style>

      {/* Beams Background */}
      <Beams
        beamWidth={2}
        beamHeight={60}
        beamNumber={12}
        lightColor="#669cff"
        speed={3}
        noiseIntensity={1.75}
        scale={0.2}
        rotation={30}
      />

    </div>
  );
};

export default Hero;
