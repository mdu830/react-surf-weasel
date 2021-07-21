import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Loginpage from './pages/Loginpage';
import Homepage from './pages/Homepage.js';
import Registerpage from './pages/Registerpage.js'



function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path={["/"]} component={Homepage} />
            <Route exact path={["/register"]} component={Registerpage} />
            <Route exact path={["/login"]} component={Loginpage} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
