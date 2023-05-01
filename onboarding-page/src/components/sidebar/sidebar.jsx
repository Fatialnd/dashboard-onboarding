import SubItems from "./subitems";
import SvgInsight from "../icons/SvgInsight";
import SvgStaff from "../icons/SvgStaff";
import SvgGuest from "../icons/SvgGuest";
import SvgProgram from "../icons/SvgProgram";
import SvgVendors from "../icons/SvgVendors";
import SvgBriefings from "../icons/SvgBriefings";
import SvgInbox from "../icons/SvgInbox";
import SvgMission from "../icons/Svgmission";
import SvgDashboard from "../icons/svgDashboard";
import SvgEventIcon from "../icons/SvgEventIcon";
import SvgArrowDown from "../icons/SvgArrowDown";

const SideBarLink = ({ children, items }) => (
  <div className="sidebar-items-wrapper">
    <a className="sidebar-link" href={items.link}>
      <div className="icon-wrapper">{children}</div>
      <div className="link-title">{items.title}</div>
    </a>
  </div>
);

export default function SideBar() {
  return (
    <>
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
        <SideBarLink items={{ title: "Staff", href: "#staff" }}>
          <SvgStaff />
        </SideBarLink>
        <SideBarLink items={{ title: "Guests", href: "#guest" }}>
          <SvgGuest />
        </SideBarLink>
        <SideBarLink items={{ title: "Program", href: "#program" }}>
          <SvgProgram />
        </SideBarLink>
        <SideBarLink items={{ title: "Vendors", href: "#vendors" }}>
          <SvgVendors />
        </SideBarLink>
        <SideBarLink
          items={{
            title: "Briefings",
            href: "#briefings",
          }}
        >
          <SvgBriefings />
        </SideBarLink>
        <SideBarLink items={{ title: "Inbox", href: "inbox" }}>
          <SvgInbox />
        </SideBarLink>

        <SubItems />
      </div>
    </>
  );
}
