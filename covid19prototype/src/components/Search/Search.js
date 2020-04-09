import './Search.css'
import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Data from '../../statewise-cases.json';
const stateStatistics = Data.data.state_data;
class Search extends Component {

    // constructor(props) {
    //     super(props) 
        state = { 
          statesInCountry: [
              { id: 1, statename: 'Karnataka', total: 175, active:151 , recovered:20, deceased:4},
              { id: 2, statename: 'Maharashtra', total: 891, active:769 , recovered:70, deceased:52},
              { id: 3, statename: 'Delhi', total: 525, active:502 , recovered:16, deceased:7},
              { id: 4, statename: 'Kerala', total: 327, active: 266, recovered:59, deceased:2}
           ],
           search : "",
           loading: true
        }
    //  }

     onchange = e => {
        this.setState({search : e.target.value})
    }
    async componentDidMount(){
        debugger;
        const url = "https://api.covid19api.com/all";
        const response = await fetch(url);
        console.log(response)
        const data = await response.json(); 
        debugger;
        console.log(data);
    }
     renderTableHeader() {
      let header = Object.keys(this.state.statesInCountry[0])
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }
   renderTableData() {
      return stateStatistics.map((eachState, index) => {
        const {search} = this.state;
        // console.log(search);
         const { id, place, confirmed_indian, confirmed_foreign, cured, deaths } = eachState //destructuring
         if (search !== "" && place.toLowerCase().indexOf(search) === -1 ){
             return null
         }
         return (
            <tr key={id}>
                <td>{id}</td>
               <td>{place}</td>
               <td>{confirmed_indian}</td>
               <td>{confirmed_foreign}</td>
               <td>{cured}</td>
               <td>{deaths}</td>
            </tr>
         )
      })
   }

    render(){

        return(
        <Aux>
            <input type="text" placeholder="Search the country" onChange={this.onchange}></input>
            <h1 id='title'>List of States affected by Covid-19 in India </h1>
            <table id='states'>
                <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                </tbody>
            </table>
        </Aux>
        );
    }
}
export default Search;