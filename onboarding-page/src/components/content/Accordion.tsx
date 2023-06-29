import { useState } from "react";
import { AccordionData } from "../shared/type";
import AccordionItem from "./AccordionItem";

function Accordion({ items }: { items: Array<AccordionData> }) {
  const [currentIndex, setCurrentIndex] = useState(-1)
  const btnOnClick = (index: number) => {
    setCurrentIndex(index)
  }
  return (
    <ul>
      {items.map((item, index) => (
        <AccordionItem key={index} data={item} isOpen={index === currentIndex} btnOnClick={() => btnOnClick}/>
      ))}
    </ul>
  );
}

export default Accordion;

