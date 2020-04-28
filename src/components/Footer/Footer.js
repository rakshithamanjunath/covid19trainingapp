import './Footer.css'
import React, { Component } from 'react';
import covidLogo from '../../assets/footerlogo.png';
class Footer extends Component {
    render(){
    return(
        
        <>
        <div className="footermain">
            <img src={covidLogo} alt="covidlogo" />
            <div className="copyright">© 2020  all rights reserved </div>
        </div>
        
         </>
    );
    }
}
export default Footer;