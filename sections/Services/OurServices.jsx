
import { StickyCard_003 } from "@/components/ui/skiper-ui/skiper34";
import { OurServicesBadge } from "./OurServicesBadge";

// The old require for StickyCard002 is no longer needed
// const { StickyCard002 } = require("@/components/ui/skiper-ui/skiper17");

const OurServices = () => {
  // Your original card data
  const customCards = [
    {
      id: "project-1",
      image: "/Services/Web_Development.png",
      alt: "Web Development",
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

  // Create a new array of image strings for StickyCard_003
  const myImages = customCards.map(card => card.image);

  return (
    // Removed h-screen to allow the new section to define the height
    <div className="w-full bg-black mt-35 mb-35">
      <OurServicesBadge />

      <div className="mb-6 font-raleway flex flex-col items-center text-center justify-center gap-3 tracking-tight leading-none">
        <p className="text-neutral-200 text-5xl font-medium">What We
          <span className="font-instrument-serif italic text-[#0055FE]"> Offer</span>
        </p>
        <p className="text-neutral-500">From web development to visual storytelling, we craft work that matters.</p>
      </div>

      {/* This is the new implementation using StickyCard_003 */}
      <section className="relative flex w-full flex-col items-center gap-[10vh] py-[10vh]">
        {myImages.map((img, idx) => (
          // We use 'idx' as the key because your original 'id' fields had duplicates
          <StickyCard_003 key={idx} imgUrl={img} />
        ))}
      </section>

      {/* The old StickyCard002 component is now removed */}
      {/* <StickyCard002
        cards={customCards}
        className="bg-black"
        containerClassName="rounded-2xl shadow-2xl bg-black"
        imageClassName="object-cover bg-black"
      /> 
      */}
    </div>
  );
};

export default OurServices;