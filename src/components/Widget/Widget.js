import './Widget.css'
import React, { Component } from 'react';
import Search from '../Search/Search';
import Utils from '../../Util/Util';
// import Table from '../Table/Table';
class Widget extends Component {
    state = {
        countries : [],
        search : "",
        heading : "List of Countries affected by Covid-19 in the world",
        countryName: [
            {  CountryCode:'', Country: '', Confirmed: '', Recovered:'' , Deceased:'' },
         ]
    }

     onchange = e => {
        this.setState({search : e.target.value})
    }
     async componentDidMount(){
        const url = "https://api.covid19api.com/summary";
        const response = await fetch(url);
        await response.json().then(json => {
            this.setState({
                countries : json.Countries
              });        
            });
    }
    renderTableHeader() {
        let header = Object.keys(this.state.countryName[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }
     renderTableData(data) {
        return data.map((eachState, index) => {
          const {search} = this.state;
           const { CountryCode, Country, TotalConfirmed, TotalRecovered, TotalDeaths } = eachState //destructuring
           if (search !== "" && Country.toLowerCase().indexOf(search) === -1 ){
               return null
           }
           return (
              <tr key={CountryCode}>
                 <td>{CountryCode}</td>
                 <td>{Country}</td>
                 <td>{TotalConfirmed}</td>
                 <td>{TotalRecovered}</td>
                 <td>{TotalDeaths}</td>
              </tr>
           )
        })
     }
    render(){
        
        const countries = this.state.countries;
        return(
            <>
                <Utils />
                <Search change={this.onchange} />
                {/* <Table search={this.state.search} /> */}
                <h1 id='title'>{this.state.heading} </h1>
                <table id='states'>
                    <tbody>
                        <tr>
                            {this.renderTableHeader()}
                        </tr>
                        {this.renderTableData(countries)}
                    </tbody>
                </table> 
            </>
               
        );
    }
}
export default Widget;