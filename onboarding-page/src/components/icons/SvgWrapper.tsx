import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function SvgWrapper({ children, className }: Props) {
  return (
    <svg
      className={`icon ${className}`}
      viewBox="0 0 0"
      width="25"
      height="25"
      fill="#999999"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
}
