import Avatar from "./components/Avatar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Avatar imgUrl="https://robohash.org/bob" size="w-24" altDesc="robot" />
      <Footer description="This is a test by Sean" />
    </div>
  );
}

export default App;
