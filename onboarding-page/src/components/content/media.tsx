import SvgBook from "../icons/SvgBook";
import SvgVideo from "../icons/SvgVideo";
export default function Media() {
  return (
    <div className="pt-6 pr-10 pb-0 pl-4 flex h-[358] border-blue-100 rounded-lg border-2 shodow-100 shadow-200">
      <div className="flex flex-row">
        <SvgBook className="mt-3 w-10 h-10" />
        <div className="flex flex-col ml-4">
          <h3 className="text-lg text-neutral-7 font-bold font-dmsans mb-7">
            Get to know In2Event
          </h3>
          <span className="font-light  text-sm font-dmsans">
            In2Event werkt met twee hoofdcategorien <br /> bezoekersgroepen;
            Staff en Guests. Hier uitleggen waat het <br /> verschil is.{" "}
          </span>
          <span className="font-light mb-10 text-sm font-dmsans">
            <br /> Het is mogelijk om binnen deze twee hoofdcategorien <br />
            segmenten aan te maken. Dit kan handig zijn wanneer je
            <br /> tussen verschillende groepen binnen een van de <br />
            hoofdcategorieen bijvoorbeeld een andere briefing wilt
            <br />
            sturen.
          </span>
          <a
            href="#info"
            className="flex items-center justify-center font-dmsans text-sm font-semibold no-underline text-white bg-3 w-[86px] h-8 rounded mb-10"
          >
            Continue
          </a>
        </div>
      </div>
      <div className="inline-flex items-center ml-7">
        <SvgVideo className="w-[408px] h-60"/>
      </div>
    </div>
  );
}
