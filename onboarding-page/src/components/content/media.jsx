import SvgBook from "../icons/SvgBook";
import SvgVideo from "../icons/SvgVideo";

export default function Media() {
  return (
    <div className="media-wrapper">
      <div className="media-right-side">
        <SvgBook />
        <div className="media-right-text">
          <h3>Get to know In2Event</h3>
          <span className="side-text" id="first-paragraph">
            In2Event werkt met twee hoofdcategorien <br /> bezoekersgroepen;
            Staff en Guests. Hier uitleggen waat het <br /> verschil is.{" "}
          </span>
          <span className="side-text">
            <br /> Het is mogelijk om binnen deze twee hoofdcategorien <br />
            segmenten aan te maken. Dit kan handig zijn wanneer je
            <br /> tussen verschillende groepen binnen een van de <br />
            hoofdcategorieen bijvoorbeeld een andere briefing wilt
            <br />
            sturen.
          </span>
          <a href="#info" className="button">
            Continue
          </a>
        </div>
      </div>
      <div className="media-left-side">
        <SvgVideo />
      </div>
    </div>
  );
}
