"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import PageTransition from "./PageTransition";

const LoaderWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  // Only run loader if we're on /path
  useEffect(() => {
    if (pathname === "/") {
      const timer = setTimeout(() => setLoading(false), 4000); // 4s loader
      return () => clearTimeout(timer);
    } else {
      setLoading(false); // immediately show children on other pages
    }
  }, [pathname]);

  if (loading && pathname === "/") {
    return (
      <div className="flex items-center justify-center h-screen">
        <PageTransition />
      </div>
    );
  }

  return <>{children}</>;
};

export default LoaderWrapper;
