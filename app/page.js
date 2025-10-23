import Cta from "@/sections/CTA/Cta";
import FloatingBookACall from "@/sections/FloatingBookACall";
import Hero from "@/sections/Hero/Hero";
import Dashboard from "@/sections/Project_Vault/Dashboard";
import WhyChooseStructure from "@/sections/Services/OurServices";

import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <FloatingBookACall />
      <Dashboard />

      {/* <Cta /> */}
      <WhyChooseStructure />
    </div>
  );
};

export default page;
