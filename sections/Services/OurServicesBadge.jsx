"use client";

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { BoxIcon, BriefcaseBusinessIcon, BriefcaseIcon, Monitor, PaletteIcon } from "lucide-react";
import React from "react";

export function OurServicesBadge() {
    return (
        <div className="mb-8 flex justify-center text-center">
            <HoverBorderGradient
                containerClassName="rounded-full border border-white/10"
                as="button"
                className="bg-black text-white flex items-center space-x-2">
                <BoxIcon className="fill-blue-100 stroke-1 text-neutral-800" />

                <span className="font-raleway uppercase">Our Services</span>
            </HoverBorderGradient>
        </div>
    );
}