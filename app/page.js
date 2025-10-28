// import Cta from "@/sections/CTA/Cta";
// import FloatingBookACall from "@/sections/FloatingBookACall";
import Hero from "@/sections/Hero/Hero";
import Dashboard from "@/sections/Project_Vault/Dashboard";

import Comparison from '@/sections/Comparison/Comparison'

import React from 'react'
import FloatingBookACall from "@/sections/FloatingBookACall";
import Footer from "@/sections/Footer/Footer";
import OurServices from "@/sections/Services/OurServices";


const page = () => {
  return (
    <div >
      <Hero/>
      <OurServices/>
      <Dashboard/>
      <Comparison/>
      <FloatingBookACall/>
      <Footer/>
    </div>
  );
};

export default page;
