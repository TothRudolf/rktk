import apaczai from "../assets/apaczai.jpg";
import apaczai2 from "../assets/Apaczai400.png";

const Koszonto: React.FC = () => (
  <section className="max-w-4xl mx-auto p-6 text-gray-800">
     <div className="flex flex-col items-center sm:flex-row sm:justify-between sm:items-center">
      {/* Left Image */}
      <img
        src={apaczai2}
        alt="RKTK logo"
        className="h-32 w-auto sm:h-40"
      />

      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-red-600 mt-6 sm:mt-0 sm:mx-8">
        Kedves versenyző Diákok, tisztelt Kollégák!
      </h1>

      {/* Right Image */}
      <img
        src={apaczai}
        alt="Apáczai logo"
        className="h-32 w-auto sm:h-40"
      />
    </div>

    
    <blockquote className="mt-6 text-lg text-justify italic text-gray-700">
      „Tégy oly célt fel, amelyre soha senki nem ért. Mert szép dolog a középszerű tudós emberekkel elérkezni,
      de szebb még a legtudósbakkal egyarányú messze hagyíttani, a legszebb penig mindeneket fellyülhaladni,
      és a nagy hegynek oly részében állani, ahová soha senki maga erejétől nem hághatott, s talán soha nem is
      hág.”
      <br />
      <span className="block mt-2">Apáczai Csere János</span>
    </blockquote>

    <p className="mt-6 text-lg leading-relaxed text-gray-700 text-justify">
      Szeretettel és tisztelettel köszöntöm a Romániai Középiskolások Tudományos Konferenciájának 2025-ös
      résztvevőit. Kimondottan büszke vagyok arra, hogy az RKTK-ként újrainduló rangos tudományos verseny
      első házigazdái lehetünk, de elődjét, a TUDEK-et is két alkalommal megszervezhette a kolozsvári
      Apáczai Csere János Elméleti Líceum.
    </p>

    <p className="mt-4 text-lg leading-relaxed text-gray-700 text-justify">
      Fontos számunkra, hogy rendezvényünket felkarolta a román Oktatási és Kutatási Minisztérium, amelynek
      anyagilag is támogatott versenyei sorában jelenik (maradt) meg, illetve az erdélyi tudományegyetemek, a
      Babeș-Bolyai Tudományegyetem és a Sapientia Erdélyi Magyar Tudományegytem is, a kezdeményezés első
      percétől feltétlen támogatásukról biztosítottak. A konferencia ezen három pilléren tud stabilan és az őt
      megillető ranggal működni a jövőben is.
    </p>

    <p className="mt-4 text-lg text-gray-700 text-justify">
      Kiemelten értékeljük ezen intézmények vezetőinek hozzájárulását ahhoz, hogy az RKTK továbbra is
      hatékonyan tudja majd serkenteni a romániai magyar középiskolás diákok tudományos kreativitását.
      Kulcsfontosságú érték a konferencia számára, hogy egyetemi oktatók, kutatók vállalják fel a zsűrizést,
      a diákok dolgozatainak szakavatott bírálatát. A biztató szavak, a szélesebbkörű kitekintést megláttató
      tanácsok sorsformálóak lehetnek a fiatalok számára.
    </p>

    <p className="mt-4 text-lg leading-relaxed text-gray-700 text-justify">
      A versenyre való felkészülés hónapok óta elkezdődött, amelynek nyomán februárban leadtatok egy
      kivonatot kutatási tervetekről. A most bemutatott dolgozatok lehet nem valósították meg teljesen az
      eredetileg kitűzött célt. Azonban fontos, hogy ti Apáczai fenti gondolataival összhangban magasra
      emeltétek a lécet magatok számára és ha azt most nem is sikerült megvalósítanotok, reméljük a kutatás
      iránti érdeklődésetek csak fokozódni fog és újabb ötletekkel fogjátok azt a képzeletbeli lécet egyre
      magasabbra emelni.
    </p>

    <p className="mt-4 text-lg leading-relaxed text-gray-700 text-justify">
      Számunkra középiskolai tanároknak pedig az igazi öröm az, amikor tanítványaink teljesítménye
      túlszárnyalja nemcsak a mi megvalósításainkat, hanem ifjúkori céljainkat is. Munkátokban legyetek
      mindig igényesek, céljaitokat körvonalazzátok meg minél célratörőbben.
    </p>

    <p className="mt-4 text-lg leading-relaxed text-gray-700 text-justify">
      Fontos tényezője az innovációnak, tudományos kutatásnak az eredményekről történő kommunikáció, vita és
      sok esetben manapság már el sem képzelhető, hogy a jelentős eredmények ne csapatban szülessenek meg.
      A mostani konferencia fő céljaként foglamazza meg azt, hogy olyan lehetőséget biztosítsunk
      tanítványainknak, ahol hasonló érdeklődésű fiatalokkal tudnak eszmét cserélni, megerősítést nyerni és
      ezáltal újabb ötletekkel gazdagodva folytathassák kíváncsiságuk kielégítését.
    </p>

    <p className="mt-4 text-lg leading-relaxed text-gray-700 text-justify">
      Ezért is fontos, hogy rendezvényünkre személyes jelenléttel kerül sor.
    </p>

    <p className="mt-6 text-lg leading-relaxed text-gray-700 text-justify">
      A 400 évvel ezelőtt született Apáczai Csere Jánosnak jelentős hatása volt az erdélyi oktatás
      átalakítására, a tanítási tartalmakat, irányvonalakat határozta meg az általa megírt Magyar
      Encyclopaedia által, amely tankönyvként is iránymutató volt a maga idejében a tudományosság több
      területén is. Az ő személyisége bennünket, mai oktatókat is arra serkent, hogy a tudományosság friss
      eredményeinek megismerésére vezessük rá tanítványainkat. Ilyen módon kijelenthető, hogy az itt
      jelen levő felkészítő tanárok Apáczai szellemiségét követve érkezett Kolozsvárra.
    </p>

    <p className="mt-6 text-lg leading-relaxed text-gray-700 text-justify">
      Sok sikert kívánok mindenkinek az előadásokhoz és a megbeszélésekhez!
    </p>

    <footer className="mt-8 text-center text-pretty text-lg font-semibold text-gray-800">
      Vörös Alpár, igazgató <br />
      Apáczai Csere János Elméleti Líceum
    </footer>
  </section>
);

export default Koszonto;
