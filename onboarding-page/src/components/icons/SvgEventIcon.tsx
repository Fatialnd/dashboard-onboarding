import SvgWrapper from "./SvgWrapper";

export default function SvgEventIcon() {
  return (
    <SvgWrapper>
      <g clipPath="url(#clip0_6244_3891)">
        <rect
          width="28"
          height="28"
          rx="4"
          fill="url(#paint0_radial_6244_3891)"
        />
        <circle
          cy="28"
          r="13.5"
          fill="url(#paint1_radial_6244_3891)"
          stroke="white"
        />
        <circle
          cx="28"
          r="13.5"
          fill="url(#paint2_radial_6244_3891)"
          stroke="white"
        />
      </g>
      <defs>
        <radialGradient
          id="paint0_radial_6244_3891"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(23.8 25.55) rotate(154.799) scale(26.3036 63.9565)"
        >
          <stop stopColor="#58FFFF" />
          <stop offset="1" stopColor="#E7FF56" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_6244_3891"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(0 28) rotate(90) scale(14)"
        >
          <stop offset="0.614583" stopColor="white" stopOpacity="0.5" />
          <stop offset="1" stopColor="white" stopOpacity="0.8" />
        </radialGradient>
        <radialGradient
          id="paint2_radial_6244_3891"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(28) rotate(90) scale(14)"
        >
          <stop offset="0.614583" stopColor="white" stopOpacity="0.5" />
          <stop offset="1" stopColor="white" stopOpacity="0.8" />
        </radialGradient>
        <clipPath id="clip0_6244_3891">
          <rect width="28" height="28" rx="4" fill="white" />
        </clipPath>
      </defs>
    </SvgWrapper>
  );
}
