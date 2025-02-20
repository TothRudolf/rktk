import felhivas from "../assets/2felhivasRKTK2025.pdf";
import minta from "../assets/RKTK-minta.pdf";

const Jelentkezes: React.FC = () => (
  <section className="max-w-4xl mx-auto px-6 sm:px-10 py-10 text-gray-800">
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-red-600 mb-8 sm:mb-10">
      Jelentkezés
    </h1>

    <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-justify mb-8 sm:mb-10 text-gray-700">
      Az alábbiakban megtaláljátok a felhívás dokumentumát, a minta dolgozatot, valamint a jelentkezési
      űrlapot. Kérjük, alaposan olvassátok el a felhívást és tanulmányozzátok a minta dolgozatot a sikeres
      részvétel érdekében!
    </p>

    <div className="space-y-6 sm:space-y-8">
      {/* Felhívás letöltése */}
      <div className="flex items-center space-x-4 sm:space-x-6">
        <span className="text-xl sm:text-2xl font-semibold text-gray-700">📄</span>
        <a
          href={felhivas}
          download
          className="text-lg sm:text-xl lg:text-2xl text-blue-600 hover:underline"
        >
          Felhívás letöltése (PDF)
        </a>
      </div>

      {/* Minta dolgozat letöltése */}
      <div className="flex items-center space-x-4 sm:space-x-6">
        <span className="text-xl sm:text-2xl font-semibold text-gray-700">📘</span>
        <a
          href={minta}
          download
          className="text-lg sm:text-xl lg:text-2xl text-blue-600 hover:underline"
        >
          Minta dolgozat letöltése (PDF)
        </a>
      </div>

      {/* Jelentkezési Google Űrlap */}
      <div className="flex items-center space-x-4 sm:space-x-6">
        <span className="text-xl sm:text-2xl font-semibold text-gray-700">📝</span>
        <a
          href="https://shorturl.at/GNfCx"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg sm:text-xl lg:text-2xl text-blue-600 hover:underline"
        >
          Jelentkezési űrlap kitöltése (Google Form)
        </a>
      </div>
    </div>

    <p className="mt-8 sm:mt-12 text-lg sm:text-xl lg:text-2xl text-gray-700 text-justify">
      Kérdés esetén keressetek minket az alábbi e-mail címen:{" "}
      <a
        href="mailto:rktk2025@gmail.com"
        className="text-blue-600 hover:underline"
      >
        rktk2025@gmail.com
      </a>.
    </p>
  </section>
);

export default Jelentkezes;
