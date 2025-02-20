import React from "react";

interface CommitteeCardProps {
  title: string;
  members: { name: string; position: string }[];
}

const CommitteeCard: React.FC<CommitteeCardProps> = ({ title, members }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
    <h2 className="text-xl font-bold text-[rgb(209,40,52)]">{title}</h2>
    
    {/* Bizottság tagjai */}
    <div className="mt-6">
      <ul className="list-disc pl-5 text-gray-600">
        {members.map((member, i) => (
          <li key={i}>
            <strong>{member.name}</strong> - {member.position}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default CommitteeCard;
