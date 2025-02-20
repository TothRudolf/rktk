import React from "react";
import CommitteeCard from "./CommitteeCard";

const Bizotsag: React.FC = () => {
  const committees = [
    {
      title: "Irodalomtudományi Bizottság",
      members: [
        { name: "Dr. Kovács Péter", position: "Elnök" },
        { name: "Szabó Anna", position: "Tag" }
      ]
    },
    {
      title: "Néprajzi Bizottság",
      members: [
        { name: "Dr. Kiss Mária", position: "Elnök" },
        { name: "Horváth Gábor", position: "Tag" }
      ]
    },
    {
      title: "Történelmi Bizottság",
      members: [
        { name: "Dr. Varga Tamás", position: "Elnök" },
        { name: "Nagy László", position: "Tag" }
      ]
    },
    // További bizottságok...
  ];

  return (
    <section className="max-w-7xl mx-auto p-6 text-gray-800">
      <h1 className="text-5xl font-extrabold text-center text-gray-800">Ismerd meg bizottsági tagjainkat.</h1>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {committees.map((committee, index) => (
          <CommitteeCard key={index} title={committee.title} members={committee.members} />
        ))}
      </div>
    </section>
  );
};

export default Bizotsag;
