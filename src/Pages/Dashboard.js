import '../../src/components/Search/Search.css';
import Search from '../../src/components/Search/Search';
import '../../src/components/Table/Table.css';
import React, { Component } from 'react';
import Table from '../../src/components/Table/Table';
class Dashboard extends Component {

    constructor(props) {
        super(props) 
        this.state = { 
           search : "",
           heading:"List of States affected by Covid-19 in India"
        }
     }

     onchange = e => {
        this.setState({search : e.target.value})
    }

    render(){
        let searchText = this.state.search;
        return(
        <>
            <Search change={this.onchange} />
            <Table search={searchText.toLowerCase()} heading={this.state.heading} />
        </>
        );
    }
}
export default Dashboard;