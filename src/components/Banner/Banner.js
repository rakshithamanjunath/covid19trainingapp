import React, { useState, useEffect } from 'react';
import './Banner.css';
import covidimage from '../../assets/covid.jpg';
const useFetch = (url) => {
  const [data, updateData] = useState([]);
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
                    <h1>COVID19- WHAT YOU NEED TO KNOW!</h1>
                    <ul>
                          <li>COVID-19 is the disease caused by the new coronavirus that emerged in China in December 2019.</li>
                          <li>COVID-19 symptoms include cough, fever, shortness of breath, muscle aches, sore throat, unexplained loss of taste or smell, diarrhea and headache. COVID-19 can be severe, and some cases have caused death</li>
                          <li>The new coronavirus can be spread from person to person. It is diagnosed with a laboratory test.</li>
                          <li>There is no coronavirus vaccine yet. <a href="https://www.hopkinsmedicine.org/health/conditions-and-diseases/coronavirus/how-can-i-protect-myself-from-coronavirus">Prevention</a> involves frequent hand-washing, coughing into the bend of your elbow, staying home when you are sick and wearing a cloth face covering if you can't practice social distancing.</li>
                      </ul>
                </div>
                <div className="bannerImage">
                  <img src={covidimage} alt="Covid" />
                </div>
            </div>
            <div className="globalCount">{result["data"].TotalConfirmed} <p className="globalSpan">people are affected by covid-19 Globally</p></div>
            </>
    );
}
export default Banner;