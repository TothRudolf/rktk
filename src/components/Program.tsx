import React, { useState } from "react";

const Program: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<"aprilis-11" | "aprilis-12" | "aprilis-13">("aprilis-11");

  const renderTable = (day: string, events: { time: string; activities: string[] }[]) => (
    <table className="table-auto border border-gray-400 w-full text-sm sm:text-base">
      <thead>
        <tr className="bg-[rgb(209,40,52)]">
          <th className="border border-gray-400 px-2 sm:px-8 py-2 text-center text-white sm:max-w-[150px] sm:truncate">Időpont</th>
          <th className="border border-gray-400 px-2 sm:px-4 py-2 text-center text-white">Tevékenység</th>
        </tr>
      </thead>
      <tbody>
        {events.map((event, index) => (
          <tr key={`${day}-${index}`}>
            <td className="border border-gray-400 px-2 py-2 text-center sm:max-w-[150px] sm:truncate">{event.time}</td>
            <td className="border border-gray-400 px-2 sm:px-4 py-2">
              <ul className="list-disc pl-4">
                {event.activities.map((activity, i) => (
                  <li key={`${day}-${index}-${i}`}>{activity}</li>
                ))}
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
  

  const schedule = {
    "aprilis-11": [
      {
        time: "15:00 – 18:00",
        activities: [
          "A küldöttségek érkezése",
          "Regisztráció – Apáczai Csere János Elméleti Líceum, A07-es terem",
          "Elszállásolás – a Victoria szállodában (December 21 sugárút, 54–56. szám)",
          "Bemutatók feltöltése a szekciótermekben",
        ],
      },
      {
        time: "18:00 – 19:00",
        activities: [
          "Ünnepélyes megnyitó a Sapientia Erdélyi Magyar Tudományegyetem dísztermében (Tordai út 4 szám)",
        ],
      },
      {
        time: "19:00 – 20:00",
        activities: [
          "Vacsora a Református Kollégium (Farkas / Kogălniceanu utca 16 szám) étkezőjében",
        ],
      },
      {
        time: "20:30 – 21:30",
        activities: [
          "Rövidfilm válogatás a diákoknak a Sapientia Erdélyi Magyar Tudományegyetem dísztermében (Tordai út 4 szám)",
          "Kötetlen beszélgetés a felkészítő és kísérő tanároknak az Apáczai Csere János Elméleti Líceum tanári szobájában",
        ],
      },
    ],
    "aprilis-12": [
      {
        time: " 7:30 – 8:30",
        activities: ["Reggeli a szálláshelyen"],
      },
      {
        time: " 8:30 – 9:00",
        activities: ["Bemutatók feltöltése a szekciótermekben"],
      },
      {
        time: "  9:00 – 12:30",
        activities: [
          "Bemutatások az Apáczai Csere János Elméleti Líceumban, a kijelölt termekben",
        ],
      },
      {
        time: "13:00 – 15:00",
        activities: [
          "Ebéd: diákok, bizottság és tanárok – a Református Kollégium (Farkas / Kogalniceanu utca 16 szám) étkezdéjében",
        ],
      },
      {
        time: "15:00 – 17:00",
        activities: ["Látogatás a Hintz Házba (Dali kiállítás)"],
      },
      {
        time: "17:30",
        activities: [
          "Záróünnepség, díjkiosztás a Babes-Bolyai Tudományegyetem Aula Magna dísztermében (Farkas / Kogalniceanu utca 1-3 szám)",
        ],
      },
      {
        time: "19:00",
        activities: [
          "Állófogadás: diákok részére a Református Kollégium (Farkas / Kogalniceanu utca 16 szám) étkezdéjében",
          "Állófogadás: tanárok részére az Apáczai Csere János Elméleti Líceum tanári szobájában",
        ],
      },
    ],
    "aprilis-13": [
      {
        time: "7:30 – 8:30",
        activities: [
          "Reggeli a szálláshelyen - Victoria szálloda (December 21 sugárút, 54–56. szám)",
          "Küldöttségek hazautazása",
        ],
      },
    ],
  };

  return (
    <section className="text-left p-4 sm:p-6 lg:p-8">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-800 mb-6">Program</h1>

      <div className="flex flex-wrap justify-center space-x-0 sm:space-x-4 space-y-2 sm:space-y-0 mb-6">
        <button
          onClick={() => setSelectedDay("aprilis-11")}
          className={`px-3 py-2 font-bold ${
            selectedDay === "aprilis-11" ? "bg-red-500 text-white" : "bg-gray-200"
          } rounded w-full sm:w-auto`}
        >
          2025. április 11.
        </button>
        <button
          onClick={() => setSelectedDay("aprilis-12")}
          className={`px-3 py-2 font-bold ${
            selectedDay === "aprilis-12" ? "bg-red-500 text-white" : "bg-gray-200"
          } rounded w-full sm:w-auto`}
        >
          2025. április 12.
        </button>
        <button
          onClick={() => setSelectedDay("aprilis-13")}
          className={`px-3 py-2 font-bold ${
            selectedDay === "aprilis-13" ? "bg-red-500 text-white" : "bg-gray-200"
          } rounded w-full sm:w-auto`}
        >
          2025. április 13.
        </button>
      </div>

      <div className="p-2 sm:p-4">
        <h2 className="text-center text-lg sm:text-xl mb-4">
          {selectedDay === "aprilis-11"
            ? "2025. április 11., péntek"
            : selectedDay === "aprilis-12"
            ? "2025. április 12., szombat"
            : "2025. április 13., vasárnap"}
        </h2>

        {renderTable(selectedDay, schedule[selectedDay])}
      </div>
    </section>
  );
};

export default Program;
