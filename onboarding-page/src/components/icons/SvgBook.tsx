import SvgWrapper from "./SvgWrapper";

type Props = {
  className?: string;
};

export default function SvgBook( {className} : Props) {
  return (
    <SvgWrapper className={className}>
      <rect width="40" height="40" rx="20" fill="#F6F6F6" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.2192 9.20246L27.3197 14.4768C27.5631 14.6069 27.7139 14.8477 27.7142 15.1081V27.8912C27.7142 28.2937 27.2499 28.7258 26.8149 28.7258C26.3796 28.7258 25.7858 28.4834 25.7858 27.8912V16.0198C25.7858 15.7769 25.7804 15.7556 25.5122 15.6137C25.2426 15.4715 16.4319 10.6948 16.4319 10.6948C16.2959 10.6416 15.7034 10.4831 14.9126 10.9027C14.1619 11.3009 13.7533 11.7334 13.6494 11.9379L22.83 17.1299C23.0742 17.26 23.2242 17.5006 23.2242 17.761V30.2711C23.2242 30.539 23.0655 30.7855 22.8105 30.9124C22.6937 30.9711 22.5649 31 22.4365 31C22.2856 31 22.133 30.962 22.0037 30.8806C21.963 30.855 21.6875 30.6807 21.2547 30.4071C19.1239 29.0597 13.1826 25.3028 12.7169 25.0134C12.4477 24.846 12.1332 24.5047 12.1249 24.252L12.0003 12.3413C12.0003 12.3271 12.0002 12.3123 12.0001 12.2968C11.9985 12.0616 11.9959 11.6721 12.3242 11.146C13.1079 9.89063 15.8359 8.46402 17.2192 9.20246Z"
        fill="currentColor"
      />
    </SvgWrapper>
  );
}
