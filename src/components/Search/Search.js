import './Search.css'
import React, { Component } from 'react';
class Search extends Component {
    render(){
        const change = this.props.change;
        return(
        <>
            <input type="text" placeholder="Search the name of the state" onfocus="this.placeholder = ''" onChange={change}></input>
        </>
        );
    }
}
export default Search;