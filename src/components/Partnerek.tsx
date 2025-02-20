import bbte from "../assets/BBTELogo.jpg";
import egyhazkerulet from "../assets/egyhazkerulet.png";
import sapi from "../assets/sapientia.png";
import miniszterium from "../assets/ministerul.jpg";
import inspector from "../assets/inspectorat.jpeg";

const Tamogatok: React.FC = () => {
    // Támogatók listája (név + logó)
    const sponsors = [
      { name: "Erdélyi Református Egyházkerület", logo: egyhazkerulet },
      { name: "Ministerul Educației", logo: miniszterium },
      { name: "Babeș-Bolyai Tudományegyetem", logo: bbte },
      { name: "Sapientia Erdélyi Magyar Tudományegyetem", logo: sapi },
      { name: "Inspectoratul Școlar Județean Cluj", logo: inspector },
    ];
  
    return (
      <section className="max-w-5xl mx-auto px-6 sm:px-10 py-10 text-gray-800">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-red-600 mb-12">
          Partnerek és támogatók
        </h2>
  
        {/* Grid layout a logókhoz nagyobb térközzel */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 sm:gap-26 place-items-center">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="text-center space-y-4">
              {/* Logo */}
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-28 sm:h-36 w-auto object-contain mx-auto rounded-lg"
              />
              {/* Név */}
              <p className="text-lg sm:text-xl font-semibold text-gray-700">
                {sponsor.name}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
export default Tamogatok;
