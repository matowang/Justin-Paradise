import React from "react";
import { Route, Switch } from "react-router-dom";
import "./sass/styles.scss";

import Navbar from './components/Navbar.js';
import Home from './components/Home.js'
import Articles from './components/Articles.js'
import Journy from './components/Journy.js'
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
        <Route path={new RegExp("/([a-zA-Z_0-9]+)")} component={SpaceForNav} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/articles" component={Articles} />
          <Route path={"/articles/:id"} component={ArticlePage} />
          <Route path="/journy" component={Journy} />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
};

const SpaceForNav = (props) => {
  return (
    <div id="space-for-nav"></div>
  );
}

// function NeutralColorPallets(props) {
//   const pallet = [];
//   for (let i = 0; i <= 10; i++) {
//     pallet.push(<div className={"neutral-bg-" + i} style={{ width: "100px", height: "100px", float: "left" }} key={i}></div>);
//   }
//   return pallet;
// }

export default App;