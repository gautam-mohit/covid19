import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Active from "./components/pages/Active";
import Death from "./components/pages/Death";
import Recovered from "./components/pages/Recovered";
import LineGraph from "./components/Graph/LineGraph";
import Statewise from "./components/Statewise/Statewise";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div>
          <div className="main-heading">
            <h1>Covid19 Tracker India</h1>
          </div>
            <Statewise></Statewise>
        </div>

        <Switch>
          <Route path="/" exact component={Active}></Route>
          <Route path="/death" exact component={Death}></Route>
          <Route path="/recovered" exact component={Recovered}></Route>
        </Switch>

        <LineGraph />
      </BrowserRouter>
    </div>
  );
}
export default App;
