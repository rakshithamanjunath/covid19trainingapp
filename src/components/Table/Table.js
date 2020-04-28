import './Table.css'
import React, { Component } from 'react';
import Spinner from '../UI/Spinner';
import TableComponent from './Tablecomponent';
class Table extends Component {
    constructor(props) {
        super(props) 
        this.state = { 
          statesInCountry: [
              {   statename: '', total : '', active:151 , recovered:20, deceased:4},
           ],
           isLoaded: false,
           items : [],
           search:"",
           countryName: [
            {   Country: '', Confirmed: '', Recovered:'' , Deceased:'' },
         ],
         countries : [],
         districts : []
        }
     }
     renderTableHeader() {
        let header = Object.keys(this.state.statesInCountry[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }
     
     renderTableData(data,districtsdata) {
        
        return data.map((eachState, index) => {
          const {search} = this.props;
           const { state, confirmed, recovered, active, deaths,deltaconfirmed,deltarecovered,deltadeaths } = eachState //destructuring
           if (search !== "" && state.toLowerCase().indexOf(search) === -1  ){
               return null;
           }
           const dist = this.state.districts
           function districtsfetch(dist){
                console.log(dist) 
            }
           return (
               
              <tr key={state} onClick={districtsfetch(dist)}>
                  <td >{state}</td>
                <td><p className="deltaconfirmed">New Confirmed - {deltaconfirmed}</p>{confirmed}</td>
                <td>{active}</td>
                 <td><p className="deltacovered">New Recovered - {deltarecovered}</p>{recovered}</td>
                 <td><p className="deltadeaths">New Deaths - {deltadeaths}</p>{deaths}</td>
              </tr>
           )
        })
     }
      componentDidMount(){
          
          Promise.all([fetch('https://api.covid19india.org/data.json'), fetch('https://api.covid19india.org/state_district_wise.json')])

          .then(([res1, res2]) => { 
             return Promise.all([res1.json(), res2.json()]) 
          })
          .then(([res1, res2]) => {
            // set state in here
            this.setState({
                isLoaded: true,
                items: res1.statewise,
                districts : res2
            }); 
          });
    }

    render(){
        const items = this.state.items;
        let tablesummary = null;
        tablesummary = <TableComponent heading={this.props.heading} header={this.renderTableHeader()} tablecontent={this.renderTableData(items)} />
        if(!this.state.isLoaded){
           tablesummary = <Spinner />
        }
        return(
        <>
            {tablesummary}
        </>
        );
    }
}
export default Table;