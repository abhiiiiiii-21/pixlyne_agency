// import { StickyCard002 } from "@/components/v1/skiper17";

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
    <div className="h-screen w-full bg-gray-900">
      <StickyCard002
        cards={customCards}
        className="bg-gradient-to-br from-gray-900 to-black"
        containerClassName="rounded-2xl shadow-2xl"
        imageClassName="object-cover"
      />
    </div>
  );
};
export default WhyChooseStructure;