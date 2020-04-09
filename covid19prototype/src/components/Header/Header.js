import './Header.css'
import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Search from '../Search/Search';
import Widget from '../Widget/Widget';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from  "react-router-dom";
import Banner from '../Banner/Banner';
class Header extends Component {
    render(){
    return(
        <Router>
        <Aux>
        <div className="headerMain">
            <Link to="/" className="headerDiv">Logo</Link>
            <div className="rightDiv">
                <Link to="/globalstats"  className="headerDiv">Global Statistics</Link>
                <Link to="/search"  className="headerDiv">Search</Link>
            </div>
        </div>
        <Switch>
          <Route path="/globalstats" exact>
            <Widget />
          </Route>
          <Route path="/search" exact >
            <Search />
          </Route>
        </Switch>
        <Route path="/" exact>
            <Banner />
        </Route>
        
         </Aux>
         </Router>
    );
    }
}
export default Header;