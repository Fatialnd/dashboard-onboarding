import SubItems from "./subitems";
import SvgInsight from "../icons/SvgInsight";
import SvgStaff from "../icons/SvgStaff";
import SvgGuest from "../icons/SvgGuest";
import SvgProgram from "../icons/SvgProgram";
import SvgVendors from "../icons/SvgVendors";
import SvgBriefings from "../icons/SvgBriefings";
import SvgInbox from "../icons/SvgInbox";
import SvgMission from "../icons/SvgMission";
import SvgDashboard from "../icons/SvgDashboard";
import SvgEventIcon from "../icons/SvgEventIcon";
import SvgArrowDown from "../icons/SvgArrowDown";
import { ItemsType } from "../shared/type";

type Props = {
  children: JSX.Element;
  items: ItemsType;
};

const SideBarLink = ({ children, items }: Props) => (
  <div className="sidebar-items-wrapper">
    <a className="sidebar-link" href={items.link}>
      <div className="icon-wrapper">{children}</div>
      <div className="link-title">{items.title}</div>
    </a>
  </div>
);

export default function SideBar() {
  return (
    <div className="sidenav">
      <div className="event-wrapper">
        <div className="event-icon">
          <SvgEventIcon />
        </div>
        <div className="event-name">Social distival 2021</div>
        <div className="event-date">December 17th</div>
        <div className="event-arrow-icon">
          <SvgArrowDown />
        </div>
      </div>
      <SideBarLink items={{ link: "#dashboard", title: "dashboard" }}>
        <SvgDashboard />
      </SideBarLink>
      <SideBarLink items={{ link: "#controls", title: "Mission control" }}>
        <SvgMission />
      </SideBarLink>
      <SideBarLink items={{ link: "#insight", title: "Insight" }}>
        <SvgInsight />
      </SideBarLink>
      <SideBarLink items={{ link: "#staff", title: "Staff" }}>
        <SvgStaff />
      </SideBarLink>
      <SideBarLink items={{ link: "#guests", title: "Guest" }}>
        <SvgGuest />
      </SideBarLink>
      <SideBarLink items={{ link: "#program", title: "Program" }}>
        <SvgProgram />
      </SideBarLink>
      <SideBarLink items={{ link: "#vendors", title: "Vendors" }}>
        <SvgVendors />
      </SideBarLink>
      <SideBarLink
        items={{
          title: "Briefings",
          link: "#briefings",
        }}
      >
        <SvgBriefings />
      </SideBarLink>
      <SideBarLink items={{ title: "Inbox", link: "inbox" }}>
        <SvgInbox />
      </SideBarLink>

      <SubItems />
    </div>
  );
}
