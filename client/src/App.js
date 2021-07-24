import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Header from './components/header';
import HomePage from './pages/homePage';
import RegisterPage from './pages/registerPage'



class App extends Component {

  render() {


    return (
      <div className="App">
        <Router>
          <div>
            <Header />
          </div>
          <Route render={({location}) => (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={500}
                classNames="slide"
              >
                <Switch location={location}>
                  <Route exact path={["/"]} component={HomePage} />
                  <Route exact path={["/register"]} component={RegisterPage} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )} />
        </Router>
      </div>
    )
  }
}

export default App;
