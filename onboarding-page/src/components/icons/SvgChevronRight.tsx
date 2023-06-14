import SvgWrapper from "./SvgWrapper";

type Props = {
  className?: string;
};

export default function SvgChevronRight({ className }: Props) {
  return (
    <SvgWrapper className={className}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.518968 11.8203C0.331007 11.6264 0.331007 11.3182 0.518968 11.1243L4.56692 6.94797C4.75488 6.75405 4.75488 6.44591 4.56692 6.25199L0.518968 2.07564C0.331007 1.88172 0.331007 1.57358 0.518968 1.37966L1.28009 0.594395C1.47654 0.391717 1.8017 0.391717 1.99815 0.594395L7.48181 6.25199C7.66978 6.44591 7.66977 6.75405 7.48181 6.94797L1.99815 12.6056C1.8017 12.8082 1.47654 12.8082 1.28009 12.6056L0.518968 11.8203Z"
        fill="#171717"
        fillOpacity="0.5"
      />
    </SvgWrapper>
  );
}
