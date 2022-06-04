import Avatar from "./components/Avatar";
import "./App.css";
import AvatarGroup from "./components/AvatarGroup";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
        <Navbar navbarStart={<h2>bob</h2>}/>
      <AvatarGroup>
        <Avatar imgUrl="https://robohash.org/bob" size="w-12" altDesc="robot" />
        <Avatar imgUrl="https://robohash.org/bob" size="w-12" altDesc="robot" />
      </AvatarGroup>
    </div>
  );
}

export default App;
