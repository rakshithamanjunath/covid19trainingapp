import './Widget.css'
import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
class Widget extends Component {
    state = { 
        globalCount: [
            { total: 177788888, active:1577781 , recovered:255660, deceased:4000}
        ]
    }
    renderGlobalData() {
        return this.state.globalCount.map((eachState, index) => {
           const { total, active, recovered, deceased } = eachState //destructuring
           return (
            <div className="widgetMain">
                <div className="widget">Total <p>{total}</p></div>
                <div className="widget">Active <p>{active}</p></div>
                <div className="widget">Recovered <p> {recovered}</p></div>
                <div className="widget">Deceased <p>{deceased}</p></div> 
            </div>
           );
        })
     }
    render(){
        
        return(
            <Aux>
                {this.renderGlobalData()}
            </Aux>
               
        );
    }
}
export default Widget;