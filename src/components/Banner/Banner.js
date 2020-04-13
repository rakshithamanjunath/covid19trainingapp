import './Banner.css'
import React from 'react';
const banner = () => {
    return(
        <>
        <div className='banner'>
            <div className='bannerText'>
                <h1>A free API for data on the Coronavirus</h1>
                <p>Access data on COVID19 through an easy API for free. Build dashboards, mobile apps or integrate in to other applications. Data is sourced from &nbsp; 
                    <a href="/" target="_blank">Johns Hopkins CSSE</a>
                </p>
            </div>
            <div className="bannerImage"></div>
        </div>
        <div className="globalCount">1,347,343 <p className="globalSpan">people are affected by covid-19</p></div>
       </>

    );
}
export default banner;