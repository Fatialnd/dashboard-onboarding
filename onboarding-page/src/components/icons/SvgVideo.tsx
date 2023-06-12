import SvgWrapper from "./SvgWrapper";

type Props = {
  className?: string;
};

export default function SvgVideo({ className }: Props) {
  return (
    <SvgWrapper className={className}>
      <rect width="408" height="240" rx="8" fill="#F6F6F6" />
      <rect x="172" y="88" width="64" height="64" rx="32" fill="#0057FF" />
      <path
        d="M194.667 107.913V132.087C194.667 133.93 196.697 135.05 198.26 134.047L217.253 121.96C218.7 121.05 218.7 118.95 217.253 118.017L198.26 105.953C196.697 104.95 194.667 106.07 194.667 107.913Z"
        fill="white"
      />
    </SvgWrapper>
  );
}
