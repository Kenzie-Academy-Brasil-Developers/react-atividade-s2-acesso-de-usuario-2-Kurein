import "./App.css";
import Home from "./components/Home";
import Customer from "./pages/Customer";
import Company from "./pages/Company";
import members from "./components/Members";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home members={members} />
        </Route>
        <Route exact path="/customer/:id">
          <Customer />
        </Route>
        <Route exact path="/company/:id">
          <Company />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
