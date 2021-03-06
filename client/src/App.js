import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Header from './components/header';
import Footer from './components/footer'
import HomePage from './pages/homePage';
import RegisterPage from './pages/registerPage';
import SurfReportPage from './pages/surfReportPage';
import ScrollToTop from './components/scrollToTop';



class App extends Component {

  render() {


    return (
      <div className="App">
        <Router>
          <div>
            <ScrollToTop />
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
                  <Route exact path={["/report"]} component={SurfReportPage} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )} />
          <div>
            <Footer />
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
