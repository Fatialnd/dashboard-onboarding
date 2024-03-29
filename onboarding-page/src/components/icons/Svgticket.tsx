import SvgWrapper from "./SvgWrapper";

type Props = {
  className: string;
};

export default function SvgTicket({ className }: Props) {
  return (
    <SvgWrapper className={className}>
      <rect width="40" height="40" rx="20" fill="#F1F1F1" />
      <path
        d="M30 16.54V14C30 12.9 29.1 12 28 12H12C10.9 12 10.01 12.89 10.01 14V16.54C10.01 17.23 10.34 17.91 10.95 18.23C11.58 18.58 12 19.24 12 20C12 20.76 11.57 21.43 10.94 21.76C10.34 22.09 10 22.77 10 23.46V26C10 27.1 10.9 28 12 28H28C29.1 28 30 27.1 30 26V23.46C30 22.77 29.66 22.09 29.06 21.76C28.43 21.42 28 20.76 28 20C28 19.24 28.43 18.58 29.06 18.24C29.66 17.91 30 17.23 30 16.54ZM21 25.5H19V23.5H21V25.5ZM21 21H19V19H21V21ZM21 16.5H19V14.5H21V16.5Z"
        fill="currentColor"
      />
    </SvgWrapper>
  );
}
