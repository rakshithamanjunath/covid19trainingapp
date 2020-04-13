import './Header.css'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Header extends Component {
    render(){
    return(
        
        <>
        <div className="headerMain">
            <Link to="/" className="headerDiv">Logo</Link>
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