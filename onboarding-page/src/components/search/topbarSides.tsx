import SvgInfo from "../icons/SvgInfo";
import SvgNotification from "../icons/SvgNotification";
import Avatar from "../../images/marina.jpg";

export default function TopbarSides() {
  return (
    <div className="side-icons-wrapper">
      <SvgNotification />
      <SvgInfo />
      <img src={Avatar} alt="avatar" />
    </div>
  );
}
