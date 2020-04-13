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
                <a href="/globalstat"  className="headerDiv">Global Statistics</a>
                <a href="/search"  className="headerDiv">Search</a>
            </div>
        </div>
        
         </>
    );
    }
}
export default Header;