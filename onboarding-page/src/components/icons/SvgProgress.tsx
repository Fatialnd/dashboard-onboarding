import SvgWrapper from "./SvgWrapper";

type Props = {
  className?: string;
};

export default function SvgProgress({ className }: Props) {
  return (
    <SvgWrapper className={className}>
      <rect width="120" height="8" rx="4" fill="#D9D9D9" />
      <rect width="15" height="8" rx="4" fill="#2BBC7F" />
    </SvgWrapper>
  );
}
