import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Preview from "./components/Preview";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Main />
        <Preview />
      </Router>
    </div>
  );
}

export default App;
