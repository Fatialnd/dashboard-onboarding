import { useState, useRef, useEffect } from "react";
import { AccordionData } from "../shared/type";
import "../../App.css";

function AccordionItem({
  data,
  isOpen,
  btnOnClick,
}: {
  data: AccordionData;
  isOpen: boolean;
  btnOnClick: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      const contentEl = contentRef.current as HTMLDivElement;

      setHeight(contentEl.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);
  return (
    <li
      className={` ${
        isOpen
          ? "border-2 border-blue-100 pb-10 shadow-3xl"
          : "border  pb-0 border-neutral-8  max-h-[72px]"
      }  rounded-lg mb-3 pl-6 pr-8`}
    >
      <div>
        <button
          className={`${
            isOpen ? "after:rotate-[-90deg]" : ""
          }after:rotate-[-90deg] my-4 flex justify-between w-full cursor-pointer after:content-arrowdown after:mt-2 after:ease-in-out after:duration-300`}
          onClick={btnOnClick}
        >
          <div className="flex justify-center items-center ">{data.svgicon}
          <h3
            className={`${
              isOpen ? "text-lg  text-neutral-7" : " text-base  text-neutral-4"
            }  font-bold font-dmsans ml-4`}
          >
            {data.title}
          </h3></div>
          
        </button>
      </div>
      <div
        className="overflow-hidden height ease-in-out duration-300"
        style={{ height }}
      >
        <div ref={contentRef}>{data.content}</div>
      </div>
    </li>
  );
}

export default AccordionItem;
