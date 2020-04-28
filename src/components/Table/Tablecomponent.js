import './Table.css'
import React from 'react';
const TableComponent = (props) => {
    return(
        <>               
            <h1 id='title'>{props.heading} </h1>
            <table id='states'>
                <tbody>
                    <tr>
                        {props.header}
                    </tr>
                    {props.tablecontent}
                </tbody>
            </table> 
        </>
    );
}
export default TableComponent;