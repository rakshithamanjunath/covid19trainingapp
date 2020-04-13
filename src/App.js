import React, { Component } from 'react';
import './App.css';
import RouteConfig from './RouteConfig';
import Header from './components/Header/Header';
// import Banner from './components/Banner/Banner';
// import Table from './components/TableComponent/Table/Table';
// import { Route } from 'react-router-dom';
// import Data from './statewise-cases.json';
// const stateStatistics = Data.data.state_data;
class App extends Component {
//   state = { 
//     statesInCountry: [
//         { statename: '', total: '', active:'' , recovered:'', deceased:''}
//      ],
//      search : "",
//      loading: true
//   }
//   onchange = e => {
//     this.setState({search : e.target.value})
//   }
//  renderTableHeader() {
//   let header = Object.keys(this.state.statesInCountry[0])
//   return header.map((key, index) => {
//      return <th key={index}>{key.toUpperCase()}</th>
//   })
//   }
//   renderTableData() {
//     return stateStatistics.map((eachState, index) => {
//       const {search} = this.state;
//       // console.log(search);
//       const { id, place, confirmed_indian, confirmed_foreign, cured, deaths } = eachState //destructuring
//       if (search !== "" && place.toLowerCase().indexOf(search) === -1 ){
//           return null
//       }
//       return (
//           <tr key={id}>
//               <td>{id}</td>
//             <td>{place}</td>
//             <td>{confirmed_indian}</td>
//             <td>{confirmed_foreign}</td>
//             <td>{cured}</td>
//             <td>{deaths}</td>
//           </tr>
//       )
//     })
//   }

  render(){
    return (
      <div className="App">
        <Header />
        <RouteConfig />
       </div>
    );
  
  }
    
}

export default App;
