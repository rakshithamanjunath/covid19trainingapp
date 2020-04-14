import React, { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, updateData] = useState([]);

  // empty array as second argument equivalent to componentDidMount
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const json = await response.json();
      updateData(json.Global);
    //   renderGlobalData(json.Global);
    }
    fetchData();
  }, [url]);

  return data;
};
const renderGlobalData = (updateData) => {
    return (
     <div className="widgetMain" key = '1'>
         <div className="widget">New Confirmed <p>{updateData["NewConfirmed"]}</p></div>
         <div className="widget">Total <p>{updateData["TotalConfirmed"]}</p></div>
         <div className="widget">Recovered <p> {updateData["TotalRecovered"]}</p></div>
         <div className="widget">Deceased <p>{updateData["TotalDeaths"]}</p></div> 
     </div>
    );
}
const Util = () => {
    const URL = 'https://api.covid19api.com/summary';
    const result = useFetch(URL);
    const renderData  = renderGlobalData(result);
    return (
      <div>
        {renderData}
      </div>
    );
}
export default Util;