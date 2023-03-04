import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './view/login';
import Register from './view/register';
import Home from './view/home';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
    </Router>
  );
}

export default App;
