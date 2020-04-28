import React, { useState, useEffect } from 'react';
import './Widget.css'
import Utils from '../../Util/Util';
import Spinner from '../UI/Spinner';
import TableComponent from '../Table/Tablecomponent';
const Widget = () => {
  const [countries, updatedCountries] = useState([]);
  const [heading] = useState("List of Countries affected by Covid-19 in the world");
  const [countryName] = useState(["Country","confirmed","recovered","deseased"]);
  const [isloaded, updatedisLoaded] = useState([]);
  const [search,updatedSearch]  = useState('');
  const useFetch = (url) => {
  // empty array as second argument equivalent to componentDidMount
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const json = await response.json();
      updatedCountries(json.Countries);
      updatedisLoaded(true)
    }
    fetchData();
  }, [url]);

  return {countries,heading,countryName,isloaded};
}
 const renderTableHeader = (countryNames) => {
    return countryNames.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }
 const renderTableData = (data)  => {
    return data.map((eachState, index) => {
      const searchtext = search.toLowerCase();
       const { CountryCode, Country, TotalConfirmed, TotalRecovered, TotalDeaths } = eachState //destructuring
       if (searchtext !== "" && Country.toLowerCase().indexOf(searchtext) === -1 ){
           return null
       }
       return (
          <tr key={CountryCode}>
             <td>{Country}</td>
             <td>{TotalConfirmed}</td>
             <td>{TotalRecovered}</td>
             <td>{TotalDeaths}</td>
          </tr>
       )
    })
 }

    const URL = 'https://api.covid19api.com/summary';
    const result = useFetch(URL);
    const renderHeader = renderTableHeader(result.countryName);
    const renderData  = renderTableData(result.countries);
    let tablesummary =  null;
    tablesummary = <TableComponent heading={result.heading} header={renderHeader} tablecontent={renderData} />
        if(!result.isloaded){
            tablesummary = <Spinner />
         }
    return(
        <>
            <Utils />
            <input type="text" placeholder="Search the country/state name" onChange={e => updatedSearch(e.target.value)}></input>
            {tablesummary}
        </>
           
    );
}
export default Widget;