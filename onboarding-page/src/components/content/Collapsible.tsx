import React, { ReactNode, useState, useRef, useEffect } from "react";
import SvgChevronDown from "../icons/SvgChevronDown";
import SvgChevronRight from "../icons/SvgChevronRight";
import "../../App.css";
import SvgBook from "../icons/SvgBook";

interface IProps {
  open?: Boolean;
  title: string;
  children: ReactNode;
}

const Collapsible: React.FC<IProps> = ({ open, children, title }) => {
  const [isOpen, setIsOpen] = useState(open);
  const [height, setHeight] = useState<number | undefined>(
    open ? undefined : 0
  );

  const ref = useRef<HTMLDivElement>(null);
  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) setHeight(ref.current?.getBoundingClientRect().height);
    else setHeight(0);
    if (!height || !isOpen || !ref.current) return undefined;

    const resizeObserver = new ResizeObserver((el) => {
      setHeight(el[0].contentRect.height);
    });
    resizeObserver.observe(ref.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, [height, isOpen]);

  return (
    <>
      <div
        className={`${
          isOpen
            ? "border-2 border-blue-100 pb-10 shadow-3xl"
            : " border pb-0 border-neutral-8"
        } flex-col items-center rounded-lg  pl-6 pr-8 transition-all delay-150 duration-100 overflow-hidden`}
      >
        <div className="py-6  flex justify-between">
          <div className="flex justify-center items-center ">
            <SvgBook className=" w-10 h-10 fill-slate-50" />
            <h3
              className={`${
                isOpen ? " text-neutral-7" : "text-neutral-4"
              } text-lg  font-bold font-dmsans ml-4`}
            >
              {title}
            </h3>
          </div>

          <button type="button" className="btn" onClick={handleFilterOpening}>
            {!isOpen ? <SvgChevronRight /> : <SvgChevronDown />}
          </button>
        </div>
        <div style={{ height }}>
          <div>{isOpen && <div>{children}</div>}</div>
        </div>
      </div>
    </>
  );
};

export default Collapsible;
