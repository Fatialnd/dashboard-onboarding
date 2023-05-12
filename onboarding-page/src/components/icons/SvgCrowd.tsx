import SvgWrapper from "./SvgWrapper";

type Props = {
  className?: string;
}

export default function SvgCrowd({className}: Props) {
  return (
    <SvgWrapper className={className}>
      <rect width="40" height="40" rx="20" fill="#F1F1F1" />
      <path
        d="M24 19C25.66 19 26.99 17.66 26.99 16C26.99 14.34 25.66 13 24 13C22.34 13 21 14.34 21 16C21 17.66 22.34 19 24 19ZM16 19C17.66 19 18.99 17.66 18.99 16C18.99 14.34 17.66 13 16 13C14.34 13 13 14.34 13 16C13 17.66 14.34 19 16 19ZM16 21C13.67 21 9 22.17 9 24.5V26C9 26.55 9.45 27 10 27H22C22.55 27 23 26.55 23 26V24.5C23 22.17 18.33 21 16 21ZM24 21C23.71 21 23.38 21.02 23.03 21.05C23.05 21.06 23.06 21.08 23.07 21.09C24.21 21.92 25 23.03 25 24.5V26C25 26.35 24.93 26.69 24.82 27H30C30.55 27 31 26.55 31 26V24.5C31 22.17 26.33 21 24 21Z"
        fill="#999999"
      />
    </SvgWrapper>
  );
}
