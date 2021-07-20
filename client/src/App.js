import './App.css';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import loginPage from './pages/loginPage.js';
import homePage from './pages/homePage.js';
import registerPage from './pages/registerPage.js'
import Header from './components/header';



function App() {
  return (
    <div className="App">
      <Header/>
      <Router basename="#/">
          <Switch>
            <Route exact path={["/"]} component={homePage} />
            <Route exact path={["/register"]} component={registerPage} />
            <Route exact path={["/login"]} component={loginPage} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
