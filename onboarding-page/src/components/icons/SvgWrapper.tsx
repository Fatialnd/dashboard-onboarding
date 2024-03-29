import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function SvgWrapper({ children, className }: Props) {
  return (
    <svg
      className={`icon ${className}`}
      width="20"
      height="20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
}
