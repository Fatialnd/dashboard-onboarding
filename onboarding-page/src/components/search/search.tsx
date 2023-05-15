import SvgSearch from "../icons/SvgSearch";
import TopbarSides from "./topbarSides";

export default function Search() {
  return (
    <div className="sticky inset-x-0 top-0 z-50 min-h-[64px] border-b border-b-neutral-8 bg-white">
      <div className="h-16 flex items-center my-0 mx-8 justify-between">
        <div className="flex">
          <SvgSearch className="mt-1 mr-3" />
          <input type="text" placeholder="Search for anything" />
        </div>
        <TopbarSides />
      </div>
    </div>
  );
}
