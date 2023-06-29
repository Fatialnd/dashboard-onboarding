import { ReactNode } from "react";
export interface ItemsType {
    link: string;
    title: string;
}

export interface SubItemsType {
    link: string;
    title: string;
}

export type AccordionData = {
  svgicon: ReactNode;
  title: string;
  content: ReactNode;
  
} 