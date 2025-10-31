"use client";

export default function AvailablePill() {
  return (
    <>
      <div className="inline-flex items-center justify-center rounded-[30px] bg-black p-[1px] shadow-lg">
        <div className="relative backdrop-blur-[60px] bg-black/70 rounded-[24px] px-4 py-2 flex items-center justify-center gap-3 border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          {/* Blinking glow dot */}

          <span className="h-[6px] w-[6px] rounded-full bg-[#0055FE] shadow-[0_0_12px_4px_rgba(0,120,255,0.9)] animate-pulse" />


          {/* Text */}
          <p className="text-neutral-200 text-xs font-medium font-raleway z-10 tracking-wide">
            Available For Work
          </p>

          {/* Soft highlight shimmer */}
          <div className="absolute inset-0 rounded-[24px] bg-[linear-gradient(105deg,rgba(255,255,255,0.1)_-20%,rgba(0,0,0,0)_25%)] pointer-events-none animate-shine" />
        </div>
      </div>
    </>
  );
}
