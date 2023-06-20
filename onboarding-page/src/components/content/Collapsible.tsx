import React, { ReactNode, useState, useRef, useEffect } from "react";
import SvgChevronDown from "../icons/SvgChevronDown";
import SvgChevronRight from "../icons/SvgChevronRight";
import "../../App.css";

interface IProps {
  open?: Boolean; // Could you explain why this has a question mark and what it means?
  title: string;
  children: ReactNode; // What is the difference ReactNode and the JSX.Element?
  svgIcon: JSX.Element;
}

const Collapsible: React.FC<IProps> = ({ open, children, title, svgIcon }) => {
  const [isOpen, setIsOpen] = useState(open);
  const [height, setHeight] = useState<number | undefined>(
    open ? undefined : 0
  );

  const ref = useRef<HTMLDivElement>(null);
  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) {
      setHeight(ref.current?.getBoundingClientRect().height);
    } else {
      setHeight(0);
    }

    // What does this do?
    if (!height || !isOpen || !ref.current) return undefined;

    // How does a resize observer work?
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
            ? "border-2 border-blue-100 pb-10 shadow-3xl "
            : " border pb-0 border-neutral-8  max-h-[72px]"
        } rounded-lg  mb-3 pl-6 pr-8 overflow-hidden duration-300 ease-in `}
      >
        <div className="my-4 flex justify-between">
          <div className="flex justify-center items-center ">
            {svgIcon}
            <h3
              className={`${
                isOpen ? "text-lg  text-neutral-7" : " text-base  text-neutral-4"
              }  font-bold font-dmsans ml-4`}
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
