import React, { useState, useEffect } from 'react';
import './Widget.css'
import Global from '../../Global/Global';
import Spinner from '../UI/Spinner';
import TableComponent from '../Table/Tablecomponent';
const Widget = () => {
  const [countries, updatedCountries] = useState([]);
  const [heading] = useState("List of Countries affected by Covid-19 in the world");
  const [countryName] = useState(["Country","confirmed","recovered","deceased"]);
  const [isloaded, updatedisLoaded] = useState(false);
  const [search,updatedSearch]  = useState('');
  const useFetch = (url) => {
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
       const { CountryCode, Country, TotalConfirmed, TotalRecovered, TotalDeaths,NewConfirmed,NewDeaths,NewRecovered } = eachState //destructuring
       if (searchtext !== "" && Country.toLowerCase().indexOf(searchtext) === -1 ){
           return null
       }
       return (
          <tr key={CountryCode}>
             <td>{Country}</td>
             <td>
                
             <span className="deltaconfirmed red"> 
               <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
               {NewConfirmed}</span>
               {TotalConfirmed}</td>
             <td>             
                <span className="deltaconfirmed green"> 
               <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
               {NewRecovered}</span>
               {TotalRecovered}</td>
             <td>
             <span className="deltaconfirmed grey "> 
               <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
               {NewDeaths}</span>
               {TotalDeaths}</td>
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
            <Global />
            <input class="inputbox" type="text" placeholder="Search the country name" onfocus="this.placeholder = ''" onChange={e => updatedSearch(e.target.value)}></input>
            {tablesummary}
        </>
           
    );
}
export default Widget;