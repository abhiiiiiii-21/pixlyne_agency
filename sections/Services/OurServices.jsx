// import { StickyCard002 } from "@/components/v1/skiper17";

import { OurServicesBadge } from "./OurServicesBadge";

const { StickyCard002 } = require("@/components/ui/skiper-ui/skiper17");

const WhyChooseStructure = () => {
  const customCards = [
    {
      id: "project-1",
      image: "/Vault/Web_Dev/project_2.jpg",
      alt: "Project 1",
    },
    {
      id: "project-2",
      image: "/Vault/Posters/Project_5.jpg",
      alt: "Project 2",
    },
    {
      id: "project-3",
      image: "/Vault/Web_Dev/project_2.jpg",
      alt: "Project 3",
    },
    {
      id: "project-2",
      image: "/Vault/Posters/Project_5.jpg",
      alt: "Project 2",
    },
    {
      id: "project-3",
      image: "/Vault/Web_Dev/project_2.jpg",
      alt: "Project 3",
    },
  ];

  return (
    <div className="h-screen w-full bg-black mt-35">
      <OurServicesBadge />

      <div className="mb-6 font-raleway flex flex-col items-center text-center justify-center gap-3 tracking-tight leading-none">
        <p className="text-neutral-200 text-5xl font-medium">What We
          <span className="font-instrument-serif italic text-blue-500"> Offer</span>
        </p>
        <p className="text-neutral-500">From web development to visual storytelling, we craft work that matters.</p>
      </div>



      <StickyCard002
        cards={customCards}
        className="bg-black"
        containerClassName="rounded-2xl shadow-2xl bg-black"
        imageClassName="object-cover bg-black"
      />
    </div>

  );
};

export default WhyChooseStructure;