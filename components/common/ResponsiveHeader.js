"use client";

import { useState, useEffect } from "react";
import Header from "./Header";
import MobHeader from "./MobHeader";

const ResponsiveHeader = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <MobHeader /> : <Header />;
};

export default ResponsiveHeader;
