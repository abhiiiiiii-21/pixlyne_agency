"use client";
import React, { Children, useState } from "react";

import {
  IconArrowLeft,
  IconBrandTabler,
  IconBrandYoutube,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { CodeXml, Youtube } from "lucide-react";

export function SidebarMain({ children }) {
  const links = [
    {
      label: "Web Development",
      tab: 1,
      href: "",
      icon: (
        <CodeXml className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Reels & Shorts",
      href: "#",
      tab: 2,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="icon icon-tabler icons-tabler-outline icon-tabler-crop-16-9">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 8m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
          <text x="12" y="14" textAnchor="middle" fontSize="13" fontWeight="600" fill="#404040" stroke="none">9:16</text>
        </svg>
      ),
    },
    {
      label: "Long Videos",
      href: "#",
      tab: 3,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="icon icon-tabler icons-tabler-outline icon-tabler-crop-16-9">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 8m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
          <text x="12" y="14" textAnchor="middle" fontSize="13" fontWeight="600" fill="#404040" stroke="5">16:9</text>
        </svg>
      ),
    },
    {
      label: "Youtube Thumbnails",
      href: "#",
      tab: 4,
      icon: (
        <Youtube className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Posters",
      href: "#",
      tab: 5,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#404040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-photo-scan"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 8h.01" /><path d="M6 13l2.644 -2.644a1.21 1.21 0 0 1 1.712 0l3.644 3.644" /><path d="M13 13l1.644 -1.644a1.21 1.21 0 0 1 1.712 0l1.644 1.644" /><path d="M4 8v-2a2 2 0 0 1 2 -2h2" /><path d="M4 16v2a2 2 0 0 0 2 2h2" /><path d="M16 4h2a2 2 0 0 1 2 2v2" /><path d="M16 20h2a2 2 0 0 0 2 -2v-2" /></svg>
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (

    <div
      className={cn(
        "mx-auto flex w-full max-w-7xl flex-1 flex-col rounded-lg border md:flex-row border-neutral-800 bg-black", // <-- FIX: Removed 'overflow-hidden'
        "h-[75vh]"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between  gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            <Logo alwaysVisible />
            <div className="mt-8 flex flex-col gap-2 font-raleway">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div className="font-raleway pointer-events-none">
            <SidebarLink
              link={{
                label: "Pixlyne Team",
                href: "#",
                icon: (
                  <img
                    src="/PixlyneLogo/P.png"
                    className="h-7 w-7 shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar" />
                ),
              }} />
          </div>
        </SidebarBody>
      </Sidebar>
      {/* <Dashboard /> */}
      {children}
    </div>
  );
}
export const Logo = ({ alwaysVisible = false }) => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-white font-raleway"
    >
      <motion.img
        src="/PixlyneLogo/P.png"
        alt="PixLyne Logo"
        className="h-8 w-8 shrink-0"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: alwaysVisible ? 1 : [0, 1] }}
        className="font-medium whitespace-pre text-white font-raleway"
      >
        PixLyne
      </motion.span>
    </a>
  );
};

export const LogoIcon = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-white">
      <div
        className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-white" />
    </a>
  );
};