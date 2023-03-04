import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './view/login';
import Register from './view/register';
import Home from './view/home';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/home" component={Home} />
    </Router>
  );
}

export default App;
