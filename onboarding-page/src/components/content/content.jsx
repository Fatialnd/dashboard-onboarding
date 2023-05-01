import SvgProgress from "../icons/SvgProgress";
import Capabilities from "./capabilities";
import Media from "./media";

export default function Content() {
  return (
    <div className="content">
      <div className="content-heading-wrapper">
        <h2 className="content-heading">Hi there, Marina 👋🏼</h2>
        <p className="content-text">And welcome to your new event</p>
      </div>
      <div className="progress-heading-wrapper">
        <h3>Let’s configure your event</h3>
        <div className="progress-bar">
          <SvgProgress />
          <p className="progress-text">5 steps remaining</p>
        </div>
      </div>
      <Media />
      <Capabilities />
    </div>
  );
}
