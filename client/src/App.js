import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './pages/homePage';
import RegisterPage from './pages/registerPage'
import { Component } from 'react';
import Header from './components/header';


class App extends Component {

  render() {


    return (
      <div className="App">
        <Router>
          <div>
            <Header />
          </div>
          <Switch>
            <Route exact path={["/"]} component={HomePage} />
            <Route exact path={["/register"]} component={RegisterPage} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
