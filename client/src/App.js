import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LoginPage from './pages/loginPage';
import HomePage from './pages/homePage';
import RegisterPage from './pages/registerPage'



function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path={["/"]} component={HomePage} />
            <Route exact path={["/register"]} component={RegisterPage} />
            <Route exact path={["/login"]} component={LoginPage} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
