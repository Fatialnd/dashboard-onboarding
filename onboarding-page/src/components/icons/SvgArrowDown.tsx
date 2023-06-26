import SvgWrapper from "./SvgWrapper";

type Props = {
  className?: string;
}

export default function SvgArrowDown( {className} : Props) {
  return (
    <SvgWrapper className={className}>
      <path
        d="M2.12499 1.00002L6.00499 4.88002L9.88499 1.00002C10.275 0.61002 10.905 0.61002 11.295 1.00002C11.685 1.39002 11.685 2.02002 11.295 2.41002L6.70499 7.00002C6.31499 7.39002 5.68499 7.39002 5.29499 7.00002L0.704992 2.41002C0.517739 2.22319 0.412506 1.96954 0.412506 1.70502C0.412506 1.4405 0.517739 1.18685 0.704992 1.00002C1.09499 0.62002 1.73499 0.61002 2.12499 1.00002Z"
        fill="#666666"
      />
    </SvgWrapper>
  );
}
