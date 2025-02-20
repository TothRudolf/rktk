import cover from "../assets/cover.png";

const Apaczai400: React.FC = () => {
    return (
      <section className="max-w-4xl mx-auto px-6 sm:px-10 py-10 text-gray-800 text-center">
        {/* Nagy kép */}
        <img
          src={cover}
          alt="Apáczai Csere János"
          className="w-full max-h-[500px] object-cover rounded-2xl shadow-lg mb-6"
        />
  
        {/* Szöveg */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-red-600 mb-4">
          Apáczai Csere János 400 éve született
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
          Apáczai Csere János (1625–1659) pedagógus, filozófus, tudós, 
          aki jelentős hatást gyakorolt a magyar oktatásra és tudományra.
        </p>
  
        {/* Wikipédia link */}
        <div className="mt-6">
          <a
            href="https://hu.wikipedia.org/wiki/Ap%C3%A1czai_Csere_J%C3%A1nos"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl sm:text-2xl text-blue-600 font-semibold hover:underline"
          >
            📖 További információ a Wikipédián
          </a>
        </div>
      </section>
    );
  };
  
  export default Apaczai400;
  