import React from "react";
import { Route, Switch } from "react-router-dom";
import "./sass/styles.scss";

//import Navbar from './components/Navbar.js';
import Navbar from './containers/Navbar.js';
import Home from './components/Home.js'
import Articles from './components/Articles.js'
import Journey from './components/Journey.js'
import ArticlePage from './components/ArticlePage.js';
import Footer from './components/Footer.js';
import ErrorPage from "./components/ErrorPage";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div>
        <header>
          <Navbar />
        </header>
        {/*adds space for navbar if it is not landing page*/}
        <Route path={new RegExp("/([a-zA-Z_0-9]+)")} render={() => <div className="navbar-height"></div>} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/articles" component={Articles} />
          <Route path={"/articles/:id"} component={ArticlePage} />
          <Route path="/journey" component={Journey} />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
};
export default App;