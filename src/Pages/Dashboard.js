import '../../src/components/Search/Search.css';
import '../../src/components/Table/Table.css';
import React, { Component } from 'react';
class Dashboard extends Component {

    constructor(props) {
        super(props) 
        this.state = { 
          statesInCountry: [
              {   statename: 'Karnataka', total : '', active:151 , recovered:20, deceased:4},
           ],
           search : "",
           isLoaded: false,
           items : []
        }
     }

     onchange = e => {
        this.setState({search : e.target.value})
    }
     renderTableHeader() {
      let header = Object.keys(this.state.statesInCountry[0])
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }
   renderTableData(data) {
      return data.map((eachState, index) => {
        const {search} = this.state;
        // console.log(search);
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
   async componentDidMount(){
    const url = "https://api.covid19india.org/data.json";
    const response = await fetch(url);
    console.log(response)
    const data = await response.json().then(json => {
        // console.log(json.statewise)
        this.setState({
            isLoaded: true,
            items: json.statewise
          });        
        });
    console.log(data);
}
    render(){
        const items = this.state.items;
        return(
        <>
            <input type="text" placeholder="Search the country" onChange={this.onchange}></input>
            {/* <Table tableheaderdata = {tableheaderdata} tablebodydata = {tablebodydata} /> */}
            <h1 id='title'>List of States affected by Covid-19 in India </h1>
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
export default Dashboard;