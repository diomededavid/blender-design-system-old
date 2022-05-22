import Avatar from "./components/Avatar";
import "./App.css";
import AvatarGroup from "./components/AvatarGroup";

function App() {
  return (
    <div className="App">
      <AvatarGroup>
        <Avatar imgUrl="https://robohash.org/bob" size="w-12" altDesc="robot" />
        <Avatar imgUrl="https://robohash.org/bob" size="w-12" altDesc="robot" />
      </AvatarGroup>
    </div>
  );
}

export default App;
