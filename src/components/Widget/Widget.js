import './Widget.css'
import React, { Component } from 'react';
class Widget extends Component {
    state = { 
        globalCount: [
            { id:1, total: 177788888, active:1577781 , recovered:255660, deceased:4000}
        ],
        items : []
    }
    renderGlobalData(data) {
           return (
            <div className="widgetMain" key = '1'>
                <div className="widget">New Confirmed <p>{data.NewConfirmed}</p></div>
                <div className="widget">Total <p>{data.TotalConfirmed}</p></div>
                <div className="widget">Recovered <p> {data.TotalRecovered}</p></div>
                <div className="widget">Deceased <p>{data.TotalDeaths}</p></div> 
            </div>
           );
     }
     async componentDidMount(){
        const url = "https://api.covid19api.com/summary";
        const response = await fetch(url);
        console.log(response)
        const data = await response.json().then(json => {
            console.log(json)
            this.setState({
                items: json.Global
              });        
            });
        console.log(data);
    }
    render(){
        const items = this.state.items
        
        return(
            <>
                {this.renderGlobalData(items)}
            </>
               
        );
    }
}
export default Widget;