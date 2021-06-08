import { Switch, Route } from "react-router-dom";
import "./App.css";
import LoginView from "./Views/LoginView";
import Main from "./Views/Main";
import SignupView from "./Views/SignupView";

//routing for login/signup will go in here.
function App() {
  return (
    <div style={{ margin: "0" }}>
      <Switch>
        <Route exact path="/">
          <LoginView />
        </Route>
        <Route path="/signup">
          <SignupView />
        </Route>
        <Route path="/main">
          <Main />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
