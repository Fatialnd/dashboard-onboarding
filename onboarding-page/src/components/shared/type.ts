import { type } from "os";
import { ReactNode } from "react";
export type ItemsType = {
  link: string;
  title: string;
};

export type AccordionData = {
  svgicon: ReactNode;
  title: string;
  content: ReactNode;
};
