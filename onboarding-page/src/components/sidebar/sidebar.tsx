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
  <a
    className="flex flex-row items-center hover:bg-1  hover:rounded w-52 h-10 ml-0 my-3 p-0 text-neutral-1 hover:text-white py-[6] pr-2 pl-4 no-underline font-dmsans font-semibold text-sm"
    href={items.link}
  >
    <div className="pt-2 ">{children}</div>
    <div className="mt-[2px] ml-4">{items.title}</div>
  </a>
);

export default function SideBar() {
  return (
    <>
      <nav className="h-screen w-60 flex-none shrink-0 top-0 left-0 bg-0 overflow-x-hidden z-10">
        <div className="flex items-center border-b border-neutral-3 z-30 h-16">
          <div className="grid grid-cols-4 grid-rows-2 place-content-center justify-center">
            <SvgEventIcon className="rounded row-span-2 place-self-center h-7 w-7" />
            <div className="col-span-2 self-end text-white text-sm font-dmsans not-italic font-medium">
              Social distival 2021
            </div>
            <div className="col-span-2 col-start-2 row-start-2 text-xs text-neutral-1">
              December 17th
            </div>
            <SvgArrowDown className="row-span-2 col-start-4 row-start-1 place-self-center mt-2 ml-4" />
          </div>
        </div>
        <div className="px-4">
          <SideBarLink items={{ link: "#dashboard", title: "dashboard" }}>
            <SvgDashboard className="m-[2px]" />
          </SideBarLink>
          <SideBarLink items={{ link: "#controls", title: "Mission control" }}>
            <SvgMission className="mb-1" />
          </SideBarLink>
          <SideBarLink items={{ link: "#insight", title: "Insight" }}>
            <SvgInsight />
          </SideBarLink>
          <SideBarLink items={{ link: "#staff", title: "Staff" }}>
            <SvgStaff className="mb-[6px]" />
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
            <SvgBriefings className="mb-1" />
          </SideBarLink>
          <SideBarLink items={{ title: "Inbox", link: "inbox" }}>
            <SvgInbox />
          </SideBarLink>

          <SubItems />
        </div>
      </nav>
    </>
  );
}
