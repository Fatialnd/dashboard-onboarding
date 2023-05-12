export default function SubItems() {
  return (
    <>
      <div className="flex flex-row items-center hover:bg-1  hover:rounded w-52 h-10 ml-0 my-3 p-0 text-neutral-1 hover:text-white">
        <a
          className="  py-[6] pr-2 pl-4 no-underline text-neutral-1 hover:text-white flex items-center font-dmsans text-sm sub-links font-medium"
          href="#setting"
        >
          Event settings
        </a>
      </div>
      <div className="flex flex-row items-center hover:bg-1  hover:rounded w-52 h-10 ml-0 my-3 p-0 text-neutral-1 hover:text-white">
        <a
          className=" py-[6] pr-2 pl-4 no-underline text-neutral-1 hover:text-white flex items-center font-dmsans text-sm sub-links font-medium"
          href="#setup"
        >
          Setup guide
        </a>
      </div>
      <div className="flex flex-row items-center hover:bg-1  hover:rounded w-52 h-10 ml-0 my-3 p-0 text-neutral-1 hover:text-white">
        <a
          className=" py-[6] pr-2 pl-4 no-underline text-neutral-1 hover:text-white flex items-center font-dmsans text-sm sub-links font-medium"
          href="#reports mt-0 hover:bg-1"
        >
          Reports
        </a>
      </div>
    </>
  );
}
