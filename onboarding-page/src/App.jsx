import "./App.css";
import Content from "./components/content/content";
import Search from "./components/search/search";
import SideBar from "./components/sidebar/sidebar";
function App() {
  return (
    <div className="App">
      <SideBar />
      <Search />
      <Content />
    </div>
  );
}

export default App;
