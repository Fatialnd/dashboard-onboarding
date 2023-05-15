import SvgWrapper from "./SvgWrapper";

type Props = {
  className: string;
}

export default function SvgNotification({className}: Props) {
  return (
    <SvgWrapper className={className}>
      <path
        d="M12 25C13.1 25 14 24.1 14 23H9.99999C9.99999 24.1 10.89 25 12 25ZM18 19V14C18 10.93 16.36 8.36 13.5 7.68V7C13.5 6.17 12.83 5.5 12 5.5C11.17 5.5 10.5 6.17 10.5 7V7.68C7.62999 8.36 5.99999 10.92 5.99999 14V19L4.70999 20.29C4.07999 20.92 4.51999 22 5.40999 22H18.58C19.47 22 19.92 20.92 19.29 20.29L18 19Z"
        fill="#171717"
        fillOpacity="0.5"
      />
      <circle cx="22" cy="5" r="5" fill="#FF0000" />
    </SvgWrapper>
  );
}
