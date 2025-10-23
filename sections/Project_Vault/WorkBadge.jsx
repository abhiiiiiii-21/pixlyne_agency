"use client";

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Monitor, PaletteIcon } from "lucide-react";
import React from "react";

export function WorkBadge() {
    return (
        <div className="mb-8 flex justify-center text-center">
            <HoverBorderGradient
                containerClassName="rounded-full border border-white/10"
                as="button"
                className="bg-black text-white flex items-center space-x-2">
                <PaletteIcon className="  fill-blue-100 stroke-1 text-neutral-800" />

                <span className="font-raleway uppercase">Our Work</span>
            </HoverBorderGradient>
        </div>
    );
}