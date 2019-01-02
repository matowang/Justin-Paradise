import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "normalize.css";
import "./sass/styles.scss";

import Navbar from './components/Navbar.js';
import LandingPage from './components/LandingPage.js';
import Articles from './components/Articles.js'
import Journy from './components/Journy.js'
import ArticlePage from './components/ArticlePage.js';
import Footer from './components/Footer.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <header>
            <Navbar />
          </header>
          {/*adds space for navbar if it is not landing page*/}
          <Route path={new RegExp("/([a-zA-Z_0-9]+)")} component={SpaceForNav} />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/articles" component={Articles} />
            <Route path="/article/123456" component={ArticlePage} />
            <Route path="/journy" component={Journy} />
          </Switch>
          <Footer />
          <NeutralColorPallets />
        </div>
      </BrowserRouter>
    );
  }
};

const SpaceForNav = (props) => {
  return (
    <div id="space-for-nav"></div>
  );
}

function NeutralColorPallets(props) {
  const pallet = [];
  for (let i = 0; i <= 10; i++) {
    pallet.push(<div className={"neutral-bg-" + i} style={{ width: "100px", height: "100px", float: "left" }} key={i}></div>);
  }
  return pallet;
}

export default App;