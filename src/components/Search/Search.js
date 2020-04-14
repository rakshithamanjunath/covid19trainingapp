import './Search.css'
import React, { Component } from 'react';
class Search extends Component {
    render(){
        const change = this.props.change;
        return(
        <>
            <input type="text" placeholder="Search the country/state name" onChange={change}></input>
        </>
        );
    }
}
export default Search;