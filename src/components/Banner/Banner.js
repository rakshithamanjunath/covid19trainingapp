import React, { useState, useEffect } from 'react';
import './Banner.css';
const useFetch = (url) => {
  const [data, updateData] = useState([]);
  // empty array as second argument equivalent to componentDidMount
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const json = await response.json();
      updateData(json.Global);
    }
    fetchData();
  }, [url]);
  return {data};
};

const Banner = () => {
    const URL = 'https://api.covid19api.com/summary';
    const result = useFetch(URL);
    return (
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
            <div className="globalCount">{result["data"].TotalConfirmed} <p className="globalSpan">people are affected by covid-19</p></div>
            </>
    );
}
export default Banner;