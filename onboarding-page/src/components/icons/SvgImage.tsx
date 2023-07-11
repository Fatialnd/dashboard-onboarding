import { types } from "util";
import SvgWrapper from "./SvgWrapper";

type Props = {
  className: string;
}

export default function SvgImg({className}: Props) {
  return (
    <SvgWrapper className={className}>
      <rect width="40" height="40" rx="20" fill="#F1F1F1" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 13.7399C10 13.1324 10.4925 12.6399 11.1 12.6399H24.96V14.3999H27.6V17.0399H29.36V27.3799C29.36 27.9874 28.8675 28.4799 28.26 28.4799H11.1C10.4925 28.4799 10 27.9874 10 27.3799V13.7399ZM17.0399 17.0398C17.0399 16.0678 16.2519 15.2798 15.2799 15.2798C14.3078 15.2798 13.5199 16.0678 13.5199 17.0398C13.5199 18.0118 14.3078 18.7998 15.2799 18.7998C16.2519 18.7998 17.0399 18.0118 17.0399 17.0398ZM15.9223 20.8328C13.9335 20.8328 12.6399 24.96 12.6399 24.96H26.7199C23.5351 16.2017 21.8631 18.5375 20.2047 20.8542C20.0302 21.098 19.8559 21.3416 19.6799 21.572C18.7067 22.8731 18.1595 22.3432 17.509 21.7132C17.0772 21.295 16.5999 20.8328 15.9223 20.8328ZM31.9998 13.52V12.64H29.3598V10H28.4798V12.64H25.8398V13.52H28.4798V16.16H29.3598V13.52H31.9998Z"
        fill="currentColor"
      />
    </SvgWrapper>
  );
}
