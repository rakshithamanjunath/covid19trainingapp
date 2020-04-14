import './Table.css'
import React, { Component } from 'react';

class Table extends Component {
    constructor(props) {
        super(props) 
        this.state = { 
          statesInCountry: [
              {   statename: 'Karnataka', total : '', active:151 , recovered:20, deceased:4},
           ],
           isLoaded: false,
           items : [],
           search:"",
           countryName: [
            {   Country: '', Confirmed: '', Recovered:'' , Deceased:'' },
         ],
         countries : []
        }
     }
     renderTableHeader() {
        let header = Object.keys(this.state.statesInCountry[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }
     renderTableData(data) {
        return data.map((eachState, index) => {
          const {search} = this.props;
           const { statecode, state, confirmed, recovered, active, deaths } = eachState //destructuring
           if (search !== "" && state.toLowerCase().indexOf(search) === -1 ){
               return null
           }
           return (
              <tr key={statecode}>
                  <td>{state}</td>
                 <td>{confirmed}</td>
                 <td>{active}</td>
                 <td>{recovered}</td>
                 <td>{deaths}</td>
              </tr>
           )
        })
     }
      componentDidMount(){
    //   const url = "https://api.covid19india.org/data.json";
    //   const response = await fetch(url);
    //   console.log(response)
    //   await response.json().then(json => {
    //       console.log(json.statewise)
    //       this.setState({
    //           isLoaded: true,
    //           items: json.statewise
    //         });        
    //       });
          
          Promise.all([fetch('https://api.covid19india.org/data.json'), fetch('https://api.covid19api.com/summary')])

          .then(([res1, res2]) => { 
             return Promise.all([res1.json(), res2.json()]) 
          })
          .then(([res1, res2]) => {
            // set state in here
            this.setState({
                isLoaded: true,
                items: res1.statewise,
                countries : res2.Countries
            }); 
          });
    }
    render(){
        const items = this.state.items;
        // const countries = this.state.countries;
        return(
        <>
        <h1 id='title'>{this.props.heading} </h1>
        <table id='states'>
            <tbody>
                <tr>{this.renderTableHeader()}</tr>
                {this.renderTableData(items)}
            </tbody>
        </table>
        </>
        );
    }
}
export default Table;