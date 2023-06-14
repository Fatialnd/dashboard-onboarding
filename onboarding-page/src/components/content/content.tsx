import SvgProgress from "../icons/SvgProgress";
import Search from "../search/search";
import Collapsible from "./Collapsible";
import Capabilities from "./capabilities";

export default function Content() {
  const source = "https://player.vimeo.com/video/801902656?h=5a6c50f5e2";
  return (
    <div className="relative flex flex-1 flex-col overflow-y-auto">
      <Search />
      <div className="font-dmsans mt-14 mx-[120px] mb-[90px]">
        <div className="inline-flex flex-col">
          <h2 className="font-bold text-2xl text-neutral-7">
            Hi there, Marina 👋🏼
          </h2>
          <p className="text-neutral-9 text-base not-italic mt-2">
            And welcome to your new event
          </p>
        </div>
        <div className="flex justify-between mt-12 mb-6">
          <h3 className="text-[18px] font-bold">Let’s configure your event</h3>
          <div className="flex items-center">
            <SvgProgress className="w-[120px] h-3 " />
            <p className="text-sm ml-4">5 steps remaining</p>
          </div>
        </div>
        <Collapsible open title="Get to know In2Event">
          <div className="flex gap-8">
            <div className="flex flex-col gap-7">
              <div className="font-light text-sm font-dmsans">
                <span>
                  In2Event werkt met twee hoofdcategorien <br />{" "}
                  bezoekersgroepen; Staff en Guests. Hier uitleggen waat het{" "}
                  <br /> verschil is.
                </span>
                <span className="mb-10">
                  <br /> Het is mogelijk om binnen deze twee hoofdcategorien{" "}
                  <br />
                  segmenten aan te maken. Dit kan handig zijn wanneer je
                  <br /> tussen verschillende groepen binnen een van de <br />
                  hoofdcategorieen bijvoorbeeld een andere briefing wilt
                  <br />
                  sturen.
                </span>
              </div>
              <a
                href="#info"
                className="flex items-center justify-center font-dmsans text-sm font-semibold no-underline text-white  bg-3 hover:bg-blue-700  w-[86px] h-8 rounded"
              >
                Continue
              </a>
            </div>

            <iframe
              src={source}
              allow="autoplay; fullscreen; picture-in-picture"
            ></iframe>
          </div>
        </Collapsible>
        <Capabilities />
      </div>
    </div>
  );
}
