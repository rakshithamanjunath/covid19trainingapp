import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestApiData } from "../store/actions";
import { Component } from "react";
class Global extends Component {
  componentDidMount() {
    this.props.requestApiData();
    console.log(this.props)
  }
  renderGlobalData = (updateDataGlobal) => {
    return (
     <div className="widgetMain" key = '1'>
         <div className="widget red">New Confirmed <p>+{updateDataGlobal["NewConfirmed"]}</p></div>
         <div className="widget blue">Total <p>{updateDataGlobal["TotalConfirmed"]}</p></div>
         <div className="widget green">Recovered <p> {updateDataGlobal["TotalRecovered"]}</p></div>
         <div className="widget grey">Deceased <p>{updateDataGlobal["TotalDeaths"]}</p></div> 
     </div>
    );
}

    render(){
      const results = this.props.data;
    return (
      <div>
        {this.renderGlobalData(results)}
      </div>
    );
    }
}
const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Global);
