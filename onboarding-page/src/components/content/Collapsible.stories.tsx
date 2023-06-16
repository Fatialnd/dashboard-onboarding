import { Component } from "react";
import Collapsible from "./Collapsible";
import SvgImg from "../icons/SvgImage";

export default {
  title: "Collapsible",
  Component: Collapsible,
};

export const Default = () => (
  <Collapsible svgIcon={<SvgImg className=" w-10 h-10"/>}open title="Get to know In2Event">
    <div className="flex justify-around gap-8">
      <div className="flex flex-col gap-7">
        <div className="font-light text-sm font-dmsans">
          <span>
            In2Event werkt met twee hoofdcategorien <br /> bezoekersgroepen;
            Staff en Guests. Hier uitleggen waat het <br /> verschil is.
          </span>
          <span className="mb-10">
            <br /> Het is mogelijk om binnen deze twee hoofdcategorien <br />
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
      ></iframe>
    </div>
  </Collapsible>
);
