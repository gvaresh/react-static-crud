import logo from "./logo.svg";
import "./App.css";
// import { Index } from "./shell/index";
import { IndexFn } from "./shell/index2";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Index isGoal={false}></Index> */}
        <IndexFn />
      </header>
    </div>
  );
}

export default App;
