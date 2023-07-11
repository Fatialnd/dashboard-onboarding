import { ItemsType } from "../shared/type";

type Props = {
  subItems: ItemsType;
};

const SubListItem = ({ subItems }: Props) => (
  <>
    <a
      className="flex flex-row items-center hover:bg-1  hover:rounded w-52 h-9 ml-0 my-1 p-0 text-neutral-1 hover:text-white py-[6] pr-2 pl-4 no-underline  font-dmsans text-sm sub-links font-medium"
      href={subItems.link}
    >
      {subItems.title}
    </a>
  </>
);

export default function SubItems() {
  return (
    <div>
      <SubListItem subItems={{ link: "#event", title: "Event settings" }} />
      <SubListItem subItems={{ link: "#setup", title: "Setup guide" }} />
      <SubListItem subItems={{ link: "#report", title: "Reports" }} />
    </div>
  );
}
