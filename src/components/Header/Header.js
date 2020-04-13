import './Header.css'
import React, { Component } from 'react';
// import Dashboard from '../../Pages/Dashboard';
// import Widget from '../Widget/Widget';
// import {
//     Link
//   } from  "react-router-dom";
// import Banner from '../Banner/Banner';
class Header extends Component {
    render(){
    return(
        
        <>
        <div className="headerMain">
            <a href="/" className="headerDiv">Logo</a>
            <div className="rightDiv">
                <a href="/globalstats"  className="headerDiv">Global Statistics</a>
                <a href="/search"  className="headerDiv">Search</a>
            </div>
        </div>
        {/* <Switch>
          <Route path="/globalstats" exact>
            <Widget />
          </Route>
          <Route path="/search" exact >
            <Dashboard />
          </Route>
        </Switch> */}
        {/* <Route path="/" exact>
            <Banner />
        </Route> */}
        
         </>
    );
    }
}
export default Header;