import Accordion from "./Accordion";
import SvgBook from "../icons/SvgBook";
import SvgCrowd from "../icons/SvgCrowd";
import SvgImg from "../icons/SvgImage";
import SvgTick from "../icons/SvgTick";
import SvgTicket from "../icons/Svgticket";

export default {
  title: "Accordion",
  component: Accordion,
};

export const Default = () => {
  const accordionItems = [
    {
      svgicon: <SvgBook className=" w-10 h-10" />,
      title: "Get to know In2Event",
      content: (
        <div className="flex justify-around gap-8">
          <div className="flex flex-col gap-7">
            <div className="font-light text-sm font-dmsans">
              <p className="text-justify">
                In2Event werkt met twee hoofdcategorien bezoekersgroepen; Staff
                en Guests. Hier uitleggen waat het verschil is.
              </p>
              <p className="mt-7">
                Het is mogelijk om binnen deze twee hoofdcategorien segmenten
                aan te maken. Dit kan handig zijn wanneer je tussen
                verschillende groepen binnen een van de hoofdcategorieen
                bijvoorbeeld een andere briefing wilt sturen.
              </p>
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
        <div className="flex justify-around gap-8">Under construction</div>
      ),
    },
    {
      svgicon: <SvgTicket className=" w-10 h-10" />,
      title: "Accreditation items",
      content: (
        <div className="flex justify-around gap-8">Under construction</div>
      ),
    },
    {
      svgicon: <SvgImg className=" w-10 h-10" />,
      title: "Accreditation items",
      content: (
        <div className="flex justify-around gap-8">Under construction</div>
      ),
    },
  ];
  return <Accordion items={accordionItems} />;
};
