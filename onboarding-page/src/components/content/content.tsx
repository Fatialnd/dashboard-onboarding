import SvgProgress from "../icons/SvgProgress";
import Capabilities from "./capabilities";
import Media from "./media";

export default function Content() {
  return (
    <div className="pl-[390px] font-dmsans mt-14 mr-[120px] mb-0 ml-0">
      <div className="inline-flex flex-col">
        <h2 className="font-bold text-2xl text-neutral-7">Hi there, Marina 👋🏼</h2>
        <p className="text-neutral-9 text-base not-italic mt-2">And welcome to your new event</p>
      </div>
      <div className="flex justify-between mt-12 mb-6">
        <h3 className="text-[18px] font-bold">Let’s configure your event</h3>
        <div className="flex items-center">
          <SvgProgress className="w-[120px] h-3 "/>
          <p className="text-sm ml-4">5 steps remaining</p>
        </div>
      </div>
      <Media />
      <Capabilities />
    </div>
  );
}
