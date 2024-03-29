import SvgWrapper from "./SvgWrapper";

type Props = {
  className: string;
}

export default function SvgInbox({className}: Props) {
  return (
    <SvgWrapper className={className}>
      <path d="M13.8333 0.5H2.15833C1.23333 0.5 0.508333 1.24167 0.508333 2.16667L0.5 13.8333C0.5 14.75 1.23333 15.5 2.15833 15.5H13.8333C14.75 15.5 15.5 14.75 15.5 13.8333V2.16667C15.5 1.24167 14.75 0.5 13.8333 0.5ZM13.8333 10.5H10.5C10.5 11.8833 9.375 13 8 13C6.625 13 5.5 11.8833 5.5 10.5H2.15833V2.16667H13.8333V10.5Z" />
    </SvgWrapper>
  );
}
