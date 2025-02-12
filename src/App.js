// import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
// import { Index } from "./shell/index";
// import { IndexFn } from "./shell/index2";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieGrid from "./components/MovieGrid";
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}
      {/* <Index isGoal={false}></Index> */}
      {/* <IndexFn /> */}
      <div className="Constainer">
        <Header></Header>
      </div>
      <div className="Constainer">
        <MovieGrid></MovieGrid>
      </div>
      <div className="Constainer">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
