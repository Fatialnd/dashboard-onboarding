import { AccordionData } from "../shared/type";

function AccordionItem({
  data,
  isOpen,
  btnOnClick,
}: {
  data: AccordionData;
  isOpen: boolean;
  btnOnClick: () => void;
}) {
  return (
    <li
      className={` ${
        isOpen
          ? "border-2 border-blue-100 pb-10 shadow-3xl"
          : "border  pb-0 border-neutral-8 pt-0 max-h-72"
      }  rounded-lg mb-3 pl-6 pr-8 transition ease-in-out duration-400`}
    >
      <button
        className={`${
          isOpen ? "" : "after:rotate-[-90deg]"
        } my-4 flex justify-between w-full cursor-pointer after:content-arrowdown after:mt-2 after:ease-in-out after:duration-300`}
        onClick={btnOnClick}
      >
        <div className="flex justify-center items-center">
          {data.svgicon}
          <h3
            className={`${
              isOpen ? "text-lg  text-neutral-7" : " text-base  text-neutral-4"
            }  font-bold font-dmsans ml-4`}
          >
            {data.title}
          </h3>
        </div>
      </button>

      <div className={`${isOpen ? "h-auto" : "h-0"} overflow-hidden`}>
        <div>{data.content}</div>
      </div>
    </li>
  );
}

export default AccordionItem;
