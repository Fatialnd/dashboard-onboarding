import SvgCrowd from "../icons/SvgCrowd";
import SvgImg from "../icons/SvgImage";
import SvgTick from "../icons/SvgTick";
import SvgTicket from "../icons/Svgticket";

type Props = {
  children: React.ReactNode;
  text: string;
};
export default function Capabilities() {
  const Features = ({ children, text }: Props) => (
    <div className="flex mb-3 rounded-lg border border-neutral-8 h-[72px] items-center">
      {children} <p className="m-0 font-bold text-base text-neutral-4 ml-4">{text}</p>
    </div>
  );
  return (
    <div className="my-4 mx-0 pb-10">
      <Features text="Crowdtypes and segments">
        <SvgCrowd className=" w-10 h-10 ml-4" />
      </Features>
      <Features text="Access zones">
        <SvgTick className=" w-10 h-10 ml-4"/>
      </Features>
      <Features text="Accreditation items">
        <SvgTicket className=" w-10 h-10 ml-4"/>
      </Features>
      <Features text="Upload event logo">
        <SvgImg className=" w-10 h-10 ml-4"/>
      </Features>
    </div>
  );
}
