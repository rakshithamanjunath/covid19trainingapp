import './Header.css'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import covidLogo from '../../assets/covidlogo.png';
class Header extends Component {
    render(){
    return(
        
        <>
        <div className="headerMain">
            <Link to="/" className="headerDiv">
            <img src={covidLogo} alt="covidlogo" />
            </Link>
            <div className="rightDiv">
                <Link to="/globalstat"  className="headerDiv">Global Statistics</Link>
                <Link to="/search"  className="headerDiv">Search</Link>
            </div>
        </div>
        
         </>
    );
    }
}
export default Header;