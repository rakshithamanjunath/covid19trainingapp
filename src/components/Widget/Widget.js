import './Widget.css'
import React, { Component } from 'react';
class Widget extends Component {
    state = { 
        globalCount: [
            { id:1, total: 177788888, active:1577781 , recovered:255660, deceased:4000}
        ],
        items : [],
        countries : [],
        search : "",
        countryName: [
            {   Country: 'Karnataka', Confirmed: '', Recovered:151 , Deceased:20 },
         ],
    }
    renderGlobalData(data) {
           return (
            <div className="widgetMain" key = '1'>
                <div className="widget">New Confirmed <p>{data.NewConfirmed}</p></div>
                <div className="widget">Total <p>{data.TotalConfirmed}</p></div>
                <div className="widget">Recovered <p> {data.TotalRecovered}</p></div>
                <div className="widget">Deceased <p>{data.TotalDeaths}</p></div> 
            </div>
           );
     }
     onchange = e => {
        this.setState({search : e.target.value})
    }
     async componentDidMount(){
        const url = "https://api.covid19api.com/summary";
        const response = await fetch(url);
        console.log(response)
        const data = await response.json().then(json => {
            console.log(json)
            this.setState({
                items: json.Global,
                countries : json.Countries
              });        
            });
        console.log(data);
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
                  <td>{Country}</td>
                 <td>{TotalConfirmed}</td>
                 <td>{TotalRecovered}</td>
                 <td>{TotalDeaths}</td>
              </tr>
           )
        })
     }
    render(){
        const items = this.state.items
        
        const countries = this.state.countries;
        return(
            <>
                {this.renderGlobalData(items)}
                <input type="text" class="input" placeholder="Search the country" onChange={this.onchange}></input>
                <h1 id='title'>List of States affected by Covid-19 in the world </h1>
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