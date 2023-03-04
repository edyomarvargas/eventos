import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./view/login";
import Register from "./view/register";
import Home from "./view/home";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Router>
    </Provider>
  );
}

export default App;
