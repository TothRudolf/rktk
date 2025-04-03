import React, { useState } from "react";

interface SectionCardProps {
  title: string;
  isOpen: boolean;
  onClose: () => void; 
  onClick: () => void;
  participants: { name: string; secondName?: string; teacher: string; school: string; project: string }[];
}

const SectionCard: React.FC<SectionCardProps> = ({ title, participants }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleParticipants = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <h2
        onClick={toggleParticipants}
        className="text-xl font-bold text-[rgb(209,40,52)] cursor-pointer"
      >
        {title}
      </h2>

      {/* Résztvevők lista, csak akkor jelenik meg, ha a szekció kinyílik */}
      {isOpen && (
        <div className="mt-6">
          <ul className="list-none pl-5 text-gray-600">
            {participants.map((participant, i) => (
              <li key={i} className="mb-3">
                <h1 className="text-2xl font-extrabold text-gray-800">{participant.project}</h1>
                <div className="font-semibold">{participant.name}</div>
                {participant.secondName && (
                  <div className="font-semibold">{participant.secondName}</div>
                )}
                <div className="text-sm text-gray-500">Felkészítő: {participant.teacher}</div>
                <div className="text-sm text-gray-500">Iskola: {participant.school}</div>
                <hr></hr>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SectionCard;
