import { useState } from "react";
import { AccordionData } from "../shared/type";
import AccordionItem from "./AccordionItem";

function Accordion({ items }: { items: Array<AccordionData> }) {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const btnOnClick = (index: number) => {
    setCurrentIndex((currentValue) => (currentValue !== index ? index : -1));
  };
  return (
    <ul>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          data={item}
          isOpen={index === currentIndex}
          btnOnClick={() => btnOnClick(index)}
        />
      ))}
    </ul>
  );
}

export default Accordion;
