import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from  "react-router-dom";
import Banner from './components/Banner/Banner';
import Widget from './components/Widget/Widget';
import Dashboard from './Pages/Dashboard';
import Header from './components/Header/Header';
class RouteConfig extends Component{
    render(){
        return(
            <Router>
                <Header />
                <Switch>
                    <Route path="/" component={Banner} exact />
                    <Route path="/globalstat" component={Widget} exact />
                    <Route path="/search" component={Dashboard} exact />
                </Switch>
            </Router>
        );
    }
}
export default RouteConfig;
