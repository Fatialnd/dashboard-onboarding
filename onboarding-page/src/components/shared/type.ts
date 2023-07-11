import { type } from "os";
import { ReactNode } from "react";
export type ItemsType = {
    link: string;
    title: string;
}

export interface AccordionData {
  svgicon: ReactNode;
  title: string;
  content: ReactNode;
} 