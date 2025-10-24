"use client";

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { ChartPieIcon, Monitor, PaletteIcon } from "lucide-react";
import React from "react";

export function ComparisonBadge() {
    return (
        <div className="mb-8 flex justify-center text-center">
            <HoverBorderGradient
                containerClassName="rounded-full border border-white/10"
                as="button"
                className="bg-black text-white flex items-center space-x-2">
                <ChartPieIcon className="h-5 w-5  stroke-1 text-blue-200" />

                <span className="font-raleway uppercase">Comparison</span>
            </HoverBorderGradient>
        </div>
    );
}