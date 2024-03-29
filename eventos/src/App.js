import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./view/login";
import Register from "./view/register";
import Home from "./view/home";
import ForgotPassword from "./view/forgotPassword";
import CreateEvent from "./view/createEvent";
import EventDetails from "./view/eventDetails";
import { store, persistor } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/events/:route" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          <Route exact path="/create-event" component={CreateEvent} />
          <Route path="/event-details/:id" component={EventDetails} />
          <Route path="/edit-event/:id" component={CreateEvent} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
