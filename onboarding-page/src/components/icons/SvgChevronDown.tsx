import SvgWrapper from "./SvgWrapper";

type Props = {
  className ?: string;
};

export default function SvgChevronDown({ className }: Props) {
  return (
    <SvgWrapper className={className}>
      <path
        d="M11.29 1.28994C10.9 0.899936 10.27 0.899936 9.87998 1.28994L5.99998 5.16994L2.11998 1.28994C1.72998 0.899936 1.09998 0.899936 0.709977 1.28994C0.319977 1.67994 0.319977 2.30994 0.709977 2.69994L5.29998 7.28994C5.68998 7.67994 6.31998 7.67994 6.70998 7.28994L11.3 2.69994C11.68 2.31994 11.68 1.67994 11.29 1.28994Z"
        fill="#171717"
        fillOpacity="0.64"
      />
    </SvgWrapper>
  );
}
