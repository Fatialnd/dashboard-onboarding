import "./App.css";
import Content from "./components/content/content";

import SideBar from "./components/sidebar/sidebar";
function App() {
  return (
    <div className="App">
      <div className="flex h-screen">
        <SideBar />
        <Content />
      </div>
    </div>
  );
}

export default App;
