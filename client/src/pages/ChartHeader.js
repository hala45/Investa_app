import React from 'react';
<<<<<<< HEAD
import './chart.css';

function ChartHeader(props){
    return(
      <div className="subheader">
        <header style={{marginBottom: 10}}>
          <div>
            <h6 className="header"> {props.title} </h6>
          </div>
      
          <div >
            <h6 > Powered by <a className="link" href="https://www.nyse.com/index">NYSE</a> </h6>
          </div>
        </header>
      </div>
=======
import {NavLink} from 'react-router-dom';

function ChartHeader(props){
    return(
        <header style={{marginBottom: 10}}>
        <div>
          <span className="header"> {props.title} </span>
        </div>
    
        <div className="subheader-body">
          <span className="subheader"> Powered by <a className="link" target="_blank" href="https://www.nyse.com/index">NYSE</a>. </span>
        </div>
      </header>
>>>>>>> 5c13d9cb4a62c2896145e3bad4e6209aee349c8d
    )
}

export default ChartHeader
