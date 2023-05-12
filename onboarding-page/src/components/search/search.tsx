import SvgSearch from "../icons/SvgSearch";
import TopbarSides from "./topbarSides";

export default function Search() {
  return (
    <div className="block pl-[270px] border-b border-neutral-0 relative overflow-y-auto">
      <div className=" h-14 flex items-center my-0 mx-8 justify-between">
        <div className="flex">
          <SvgSearch />
          <input type="text" placeholder="Search for anything" />
        </div>
        <TopbarSides />
      </div>
    </div>
  );
}
