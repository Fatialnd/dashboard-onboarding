import SvgInfo from "../icons/SvgInfo";
import SvgNotification from "../icons/SvgNotification";
import Avatar from "../../images/marina.jpg";

export default function TopbarSides() {
  return (
    <div className="flex gap-x-5">
      <SvgNotification className="w-7 h-7"/>
      <SvgInfo className=" mt-1"/>
      <img className="mt-[2px] h-6 w-6 " src={Avatar} alt="avatar" />
    </div>
  );
}
