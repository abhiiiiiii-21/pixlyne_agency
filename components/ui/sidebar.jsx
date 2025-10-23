"use client";;
import { cn } from "@/lib/utils";
import React, { useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "motion/react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import useTabStore from "@/Tabstore/tabstore";


const sidebarLoadVariants = {
  hidden: {
    opacity: 0,
    scale: 1.05,
    y: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: [1.05, 1, 1.07, 1],
    boxShadow: [
      "0 0 0px 0px rgba(0,0,0,0)",         // 1. Start (at 1.5): No shadow
      "0 0 1px 1px rgba(255,222,173,0.6)", // 2. Midway (at 1): Strong shadow
      "0 0 0px 0px  rgba(0,0,0,0) ",       // 3. Midway (at 1.5): Medium shadow
      "0 0 0px 0px rgba(0,0,0,0)",       // 4. End (at 1): No shadow
    ],
    transition: {
      opacity: { type: "spring", damping: 10, stiffness: 100, mass: 0.8 },
      y: { type: "spring", damping: 10, stiffness: 100, mass: 0.8 },
      scale: { duration: 3, ease: "easeInOut", times: [0, 0.33, 0.6, 1] },
      boxShadow: { duration: 3, ease: "easeInOut", times: [0, 0.33, 0.6, 1] },
    },
  },
};

const SidebarContext = createContext(undefined);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export const SidebarProvider = ({
  children,
  open: openProp,
  setOpen: setOpenProp,
  animate = false
}) => {
  const [openState, setOpenState] = useState(false);

  const open = openProp !== undefined ? openProp : openState;
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

  return (
    <SidebarContext.Provider value={{ open, setOpen, animate: animate }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const Sidebar = ({
  children,
  open,
  setOpen,
  animate
}) => {
  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
      {children}
    </SidebarProvider>
  );
};

export const SidebarBody = (props) => {
  return (
    <>
      <DesktopSidebar {...props} />
      <MobileSidebar {...(props)} />
    </>
  );
};

export const DesktopSidebar = ({ className, children, ...props }) => {
  const { open, setOpen, animate } = useSidebar();
  return (
    <>
      <motion.div
        className={cn(
          "h-[96%] px-4 py-4 m-3 hidden rounded-md border border-neutral-900 md:flex md:flex-col bg-[#0E0E0E] w-[300px] shrink-0",
          className
        )}
        // --- 3. ADD: Added the load animation props ---
        // These control the 4-step scale/shadow animation
        variants={sidebarLoadVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        // ---------------------------------------------
        // This existing prop for width animation still works!
        // The animations don't conflict because they control different properties.
        animate={{
          width: animate ? (open ? "300px" : "60px") : "300px",
        }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        {...props}
      >
        {children}
      </motion.div>
    </>
  );
};
export const MobileSidebar = ({
  className,
  children,
  ...props
}) => {
  const { open, setOpen } = useSidebar();
  return (
    <>
      <div
        className={cn(
          "h-10 px-4 py-4 flex flex-row md:hidden  items-center justify-between bg-neutral-800 w-full"
        )}
        {...props}>
        <div className="flex justify-end z-20 w-full">
          <IconMenu2
            className="text-neutral-200"
            onClick={() => setOpen(!open)} />
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className={cn(
                "fixed h-full w-full inset-0 bg-neutral-900 p-10 z-[100] flex flex-col justify-between",
                className
              )}>
              <div
                className="absolute right-10 top-10 z-50 text-neutral-200"
                onClick={() => setOpen(!open)}>
                <IconX />
              </div>
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export const SidebarLink = ({ link, className, ...props }) => {
  const { open, animate } = useSidebar();
  const { setCurrentTab } = useTabStore()
  return (
    // --- 4. FIX: Changed 'div' to 'motion.div' so it can animate
    <motion.div
      className={cn("flex items-center justify-start gap-2  cursor-pointer group/sidebar py-2", className)}
      {...props}
    >
      {link.icon}
      <motion.div // This also needs to be a motion component
        onClick={() => setCurrentTab(link.tab)}
        // The animate prop now correctly controls this motion.div
        animate={{
          display: animate ? (open ? "inline-block" : "none") : "inline-block",
          opacity: animate ? (open ? 1 : 0) : 1,
        }}
        className="text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0">
        {link.label}
      </motion.div>
    </motion.div>
  );
};