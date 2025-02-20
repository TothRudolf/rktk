import React, { useState } from "react";
import SectionCard from "./SzekcioKartya";

const Szekciok: React.FC = () => {
  const [openSectionIndex, setOpenSectionIndex] = useState<number | null>(null);

  const sections = [
    {
      title: "Irodalomtudomány, nyelvészet",
      participants: [
        { name: "Kiss Péter", teacher: "Dr. Varga Mária", school: "Apáczai Csere János Elméleti Líceum" },
        { name: "Nagy László", teacher: "Dr. Szabó Gábor", school: "Babeș-Bolyai Tudományegyetem" }
      ]
    },
    {
      title: "Néprajz",
      participants: [
        { name: "Horváth Erika", teacher: "Dr. Tóth Júlia", school: "Sapientia Erdélyi Magyar Tudományegyetem" },
        { name: "Fekete Zoltán", teacher: "Dr. Kósa Béla", school: "Székely Mikó Kollégium" }
      ]
    },
    // További szekciók...
  ];

  const handleSectionClick = (index: number) => {
    setOpenSectionIndex(openSectionIndex === index ? null : index); // Toggle between opening and closing
  };

  const handleCloseSection = () => {
    setOpenSectionIndex(null); // Close the current open section
  };
  

  return (
    <section className="max-w-7xl mx-auto p-6 text-gray-800">
      <h1 className="text-5xl font-extrabold text-center text-[rgb(209,40,52)]">A konferencia szekciói</h1>
      <p className="mt-4 text-lg text-center text-gray-600">Ismerkedj meg a szekciókkal és résztvevőikkel.</p>

      <div className="mt-8 space-y-8">
        {sections.map((section, index) => (
          <SectionCard
            key={index}
            title={section.title}
            participants={section.participants}
            isOpen={openSectionIndex === index}
            onClick={() => handleSectionClick(index)} // Trigger the section open/close
            onClose={handleCloseSection}
          />
        ))}
      </div>
    </section>
  );
};

export default Szekciok;
