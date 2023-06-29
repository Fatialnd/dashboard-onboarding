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
      id="accordion-item"
      className={`border-2 border-blue-100 pb-10 shadow-3xl rounded-lg  mb-3 pl-6 pr-8`}
    >
      <h2>
        {data.svgicon}
        <button className="accordion-item-btn" onClick={btnOnClick}>{data.title}</button>
      </h2>
      <div style={{ height }}>
        <div ref={contentRef}>{data.content}</div>
      </div>
    </li>
  );
}

export default AccordionItem;
