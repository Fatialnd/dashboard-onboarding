import SvgInfo from "../icons/SvgInfo";
import SvgNotification from "../icons/SvgNotification";
import Avatar from "../../images/marina.jpg";

export default function TopbarSides() {
  return (
    <div className="flex">
      <SvgNotification />
      <SvgInfo />
      <img className="mt-[2px] h-6 w-6 mr-3" src={Avatar} alt="avatar" />
    </div>
  );
}
