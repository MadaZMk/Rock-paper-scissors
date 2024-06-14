import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Choices from "./components/Choices";
import Game from "./components/Game";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Nav/>
          <Switch>
            <Route path="/game/:itemId">
              <Game/>
            </Route>
            <Route path="/">
              <Choices />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
