import './Table.css'
import React, { Component } from 'react';

class Table extends Component {
    render(){
        const tableheader = this.props.tableheaderdata;
        const tableBody = this.props.tablebodydata;
        return(
        <>
            <h1 id='title'>List of States affected by Covid-19 in India </h1>
            <table id='states'>
                <tbody>
                    <tr>{tableheader}</tr>
                    {tableBody}
                </tbody>
            </table>
        </>
        );
    }
}
export default Table;