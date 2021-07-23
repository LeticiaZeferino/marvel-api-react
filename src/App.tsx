import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Characters from "./pages/Characters";
import CharDetail from "./pages/CharDetail";
import CreateGlobalStyle from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <CreateGlobalStyle />
      <Switch>
        {/* <Redirect from="/page/1" to="/" />
        <Route path="/page/:pageNumber" component={Characters} /> */}
        <Route path="/" exact component={Characters} />
        <Route path="/charDetail/:id" component={CharDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
