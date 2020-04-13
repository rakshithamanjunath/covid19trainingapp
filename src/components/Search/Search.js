import './Search.css'
import React, { Component } from 'react';
import Table from '../Table/Table';
// import Data from '../../statewise-cases.json';
// const stateStatistics = Data.data.state_data;
class Search extends Component {
    render(){
        const change = this.props.change;
        const tableheaderdata = this.props.tableheader;
        const tablebodydata = this.props.tableheader;
        return(
        <>
            <input type="text" placeholder="Search the country" onChange={change}></input>
            <Table tableheaderdata = {tableheaderdata} tablebodydata = {tablebodydata} />
            {/* <h1 id='title'>List of States affected by Covid-19 in India </h1>
            <table id='states'>
                <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                </tbody>
            </table> */}
        </>
        );
    }
}
export default Search;