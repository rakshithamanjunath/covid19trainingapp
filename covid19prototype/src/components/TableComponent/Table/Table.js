// import React, { Component } from 'react'
// import './Table.css';
// class Table extends Component {
//    constructor(props) {
//       super(props) 
//       this.state = { 
//         statesInCountry: [
//             { id: 1, statename: 'Karnataka', total: 175, active:151 , recovered:20, deceased:4},
//             { id: 2, statename: 'Maharashtra', total: 891, active:769 , recovered:70, deceased:52},
//             { id: 3, statename: 'Delhi', total: 525, active:502 , recovered:16, deceased:7},
//             { id: 4, statename: 'Kerala', total: 327, active: 266, recovered:59, deceased:2}
//          ]
//       }
//    }
//    renderTableHeader() {
//     let header = Object.keys(this.state.statesInCountry[0])
//     return header.map((key, index) => {
//        return <th key={index}>{key.toUpperCase()}</th>
//     })
//  }
//  renderTableData() {
//     return this.state.statesInCountry.map((eachState, index) => {
//        const { id, statename, total, active, recovered, deceased } = eachState //destructuring
//        return (
//           <tr key={id}>
//               <td>{id}</td>
//              <td>{statename}</td>
//              <td>{total}</td>
//              <td>{active}</td>
//              <td>{recovered}</td>
//              <td>{deceased}</td>
//           </tr>
//        )
//     })
//  }
//  render() {
//     return (
//        <div>
//           <h1 id='title'>List of States affected by Covid-19 in India </h1>
//           <table id='states'>
//              <tbody>
//                 <tr>{this.renderTableHeader()}</tr>
//                 {this.renderTableData()}
//              </tbody>
//           </table>
//        </div>
//     )
//  }
// }

// export default Table