import SvgWrapper from "./SvgWrapper";

type Props = {
  className: string;
}

export default function SvgDashboard({className}: Props) {
  return (
    <SvgWrapper className={className}>
      <path
        fillOpacity="evenodd"
        clipRule="evenodd"
        d="M15.0755 5.74229C15.0857 5.59597 15.1344 5.45494 15.2166 5.33346C15.2965 5.20727 15.4089 5.10488 15.5419 5.03701C15.675 4.96913 15.8238 4.93826 15.9729 4.94763C16.122 4.957 16.2658 5.00627 16.3893 5.09027C16.5128 5.17427 16.6114 5.28992 16.6749 5.42513C17.1762 6.61142 17.3957 7.89775 17.3161 9.18314C17.2366 10.4685 16.8602 11.718 16.2166 12.8335C16.0698 13.0878 15.8583 13.2988 15.6037 13.4452C15.3491 13.5915 15.0603 13.668 14.7666 13.6668H3.22493C2.93408 13.665 2.64874 13.5872 2.39729 13.441C2.14584 13.2948 1.93702 13.0854 1.7916 12.8335C0.912425 11.3185 0.532972 9.56502 0.707139 7.82211C0.881306 6.0792 1.60024 4.43548 2.76181 3.12444C3.92338 1.81341 5.46853 0.901715 7.17777 0.518873C8.88701 0.136031 10.6734 0.301506 12.2833 0.991792C12.4234 1.04941 12.5453 1.14416 12.6356 1.26586C12.7259 1.38756 12.7814 1.53159 12.796 1.68245C12.8105 1.83331 12.7837 1.98528 12.7183 2.12202C12.6529 2.25876 12.5515 2.37508 12.4249 2.45846C12.3035 2.54066 12.1624 2.58934 12.0161 2.59959C11.8698 2.60983 11.7233 2.58127 11.5916 2.51679C11.0307 2.27841 10.4386 2.12127 9.83326 2.05013C8.63692 1.89412 7.42067 2.06569 6.31417 2.54654C5.20766 3.02738 4.25238 3.79949 3.55017 4.78054C2.84795 5.76159 2.42512 6.91481 2.32675 8.11726C2.22838 9.31972 2.45816 10.5263 2.9916 11.6085C3.06199 11.7443 3.16843 11.8582 3.29926 11.9376C3.43008 12.017 3.58024 12.0588 3.73326 12.0585H14.2749C14.4271 12.0596 14.5767 12.019 14.7074 11.9411C14.8382 11.8633 14.9451 11.7511 15.0166 11.6168C15.6055 10.3922 15.8061 9.01691 15.5916 7.67513C15.5107 7.15623 15.3651 6.64951 15.1583 6.16679C15.0938 6.03504 15.0652 5.88861 15.0755 5.74229ZM7.33657 8.67095C7.33657 8.22868 7.51226 7.80452 7.825 7.49178L14.9 2.77512L10.1833 9.85012C9.87059 10.1629 9.44643 10.3385 9.00416 10.3385C8.78517 10.3385 8.56832 10.2954 8.366 10.2116C8.16368 10.1278 7.97985 10.005 7.825 9.85012C7.67014 9.69526 7.54731 9.51143 7.46351 9.30911C7.3797 9.10679 7.33657 8.88994 7.33657 8.67095Z"
      />
    </SvgWrapper>
  );
}
