import SvgBook from "../icons/SvgBook";
import SvgCrowd from "../icons/SvgCrowd";
import SvgImg from "../icons/SvgImage";
import SvgProgress from "../icons/SvgProgress";
import SvgTick from "../icons/SvgTick";
import SvgTicket from "../icons/Svgticket";
import Header from "../header/Header";
import Accordion from "./Accordion";

export default function Content() {
  const accordionItems = [
    {
      svgicon: <SvgBook className=" w-10 h-10" />,
      title: "Get to know In2Event",
      content: (
        <div className="flex justify-around gap-8">
          <div className="flex flex-col gap-7">
            <div className="font-light text-sm font-dmsans">
              <span>
                In2Event werkt met twee hoofdcategorien <br /> bezoekersgroepen;
                Staff en Guests. Hier uitleggen waat het <br /> verschil is.
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
            src="https://player.vimeo.com/video/801902656?h=5a6c50f5e2"
            allow="autoplay; fullscreen; picture-in-picture"
          />
        </div>
      ),
    },
    {
      svgicon: <SvgCrowd className=" w-10 h-10" />,
      title: "Crowdtypes & Segments",
      content: (
        <div className="flex justify-around gap-8">Under construction</div>
      ),
    },
    {
      svgicon: <SvgTick className=" w-10 h-10" />,
      title: "Access zones",
      content: (
        <div className="flex justify-around gap-8">
          Under construction
        </div>
      ),
    },
    {
      svgicon: <SvgTicket className=" w-10 h-10" />,
      title: "Accreditation items",
      content: (
        <div className="flex justify-around gap-8">
          Under construction
        </div>
      ),
    },
    {
      svgicon: <SvgImg className=" w-10 h-10" />,
      title: "Accreditation items",
      content: (
        <div className="flex justify-around gap-8">
          Under construction
        </div>
      ),
    },
  ];
  return (
    <section className="relative flex flex-1 flex-col overflow-y-auto">
      <Header />
      <main className="font-dmsans mt-14 mx-[120px] mb-[90px]">
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

        <Accordion items={accordionItems} />
      </main>
    </section>
  );
}
