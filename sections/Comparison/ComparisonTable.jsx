"use client";

import { Check, LayersIcon, X } from "lucide-react";

export default function ComparisonTable() {
  const pixlynePoints = [
    "Fast project delivery with agile process",
    "Designs tailored to your brand story",
    "Expertise in short & long-form videos",
    "Clean, optimized web development",
    "Direct communication with our creative team",
    "Strategic approach focused on measurable growth",
  ];
  const othersPoints = [
    "Slower timelines & delayed delivery",
    "Generic templates & reused layouts",
    "Limited to basic video edits",
    "Heavy, unoptimized websites",
    "Communication via intermediaries",
    "No long-term creative strategy",
  ];

  return (
    <section className="relative flex flex-col items-center justify-center py-15 px-6 bg-gradient-to-b from-[#050505] via-[#0b0b0b] to-[#050505] text-white overflow-hidden">
      {/* Headings (No changes) */}
      <div className="grid md:grid-cols-2 gap-10 w-full max-w-6xl mb-10 text-center">
        <div className="flex flex-row items-center justify-center gap-2">
          <img
            src="/PixlyneLogo/P.png"
            alt="PixLyne logo"
            className="w-10 h-10 opacity-90"
          />
          <h3 className="font-instrument-serif italic text-3xl text-blue-500 tracking-wide">
            PixLyne
          </h3>
        </div>
        <div className="flex flex-row items-center justify-center gap-3">
          <LayersIcon className="w-7 h-7 text-neutral-500" />
          <h3 className="font-instrument-serif italic text-3xl text-neutral-400 tracking-wide">
            Others
          </h3>
        </div>
      </div>

      {/* Comparison Boxes */}
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl font-raleway">
        {/* PixLyne Column (No changes to this parent div) */}
        <div
          className="
            rounded-2xl border border-blue-500/20 
            bg-gradient-to-b from-blue-950/30 via-blue-900/10 to-transparent 
            shadow-[0_0_40px_rgba(37,99,235,0.12)] 
            transition-transform duration-500 ease-in-out
            hover:scale-[1.02]
          "
        >
          <div className="divide-y divide-blue-500/10">
            {pixlynePoints.map((point, index) => (
              <div
                key={index}
                className={`
                  flex items-center gap-3 px-8 py-5 
                  hover:bg-blue-500/10
                  {/* REMOVED: transition-colors duration-400 ease-out */}
                  ${index === 0 ? "rounded-t-2xl" : ""}
                  ${index === pixlynePoints.length - 1 ? "rounded-b-2xl" : ""}
                `}
              >
                <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <p className="text-neutral-200 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Others Column (No changes to this parent div) */}
        <div
          className="
            rounded-2xl border border-white/10 
            bg-gradient-to-b from-white/5 to-transparent 
            shadow-[0_0_30px_rgba(255,255,255,0.05)] 
            transition-transform duration-500 ease-in-out
            hover:scale-[1.02]
          "
        >
          <div className="divide-y divide-white/10">
            {othersPoints.map((point, index) => (
              <div
                key={index}
                className={`
                  flex items-center gap-3 px-8 py-5 
                  hover:bg-white/5
                  {/* REMOVED: transition-colors duration-400 ease-out */}
                  ${index === 0 ? "rounded-t-2xl" : ""}
                  ${index === othersPoints.length - 1 ? "rounded-b-2xl" : ""}
                `}
              >
                <X className="w-5 h-5 text-neutral-500 flex-shrink-0" />
                <p className="text-neutral-500 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}