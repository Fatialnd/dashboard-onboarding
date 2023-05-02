import SvgSearch from "../icons/SvgSearch";
import TopbarSides from "./topbarSides";

export default function Search() {
  return (
    <div className="search-wrapper">
      <div className="search">
        <div className="search-side">
          <SvgSearch />
          <input type="text" placeholder="Search for anything" />
        </div>
        <TopbarSides />
      </div>
    </div>
  );
}
