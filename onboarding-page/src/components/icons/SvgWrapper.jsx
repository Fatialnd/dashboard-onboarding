export default function SvgWrapper({ children }) {
  return (
    <svg
      className="icon"
      viewBox="0 0 0"
      width="25"
      height="25"
      fill="#999999"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
}
