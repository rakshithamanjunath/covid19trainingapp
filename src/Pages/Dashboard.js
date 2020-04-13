import '../../src/components/Search/Search.css';
import Search from '../../src/components/Search/Search';
import '../../src/components/Table/Table.css';
import React, { Component } from 'react';
import Table from '../../src/components/Table/Table';
class Dashboard extends Component {

    constructor(props) {
        super(props) 
        this.state = { 
           search : ""
        }
     }

     onchange = e => {
        this.setState({search : e.target.value})
    }

    render(){
        const items = this.state.items;
        return(
        <>
            <Search change={this.onchange}/>
            <Table search={this.state.search} />
        </>
        );
    }
}
export default Dashboard;