import React, { Component } from 'react';
import './Nyse.css';

class Nyse extends Component {
    state = {
        symbols:[]
    }

    componentDidMount(){
        this.getSymbols();
    }

    getSymbols = () => {
        fetch('/nyse')
            .then(response => response.json())
            .then(symbols => this.setState({symbols}, () => console.log(symbols)))
            .catch(e => e)
    }

    render(){
        if(this.state.symbols){
            return(
            <div>
                <div className="  my-2" >
                    <h5 className="  text-center">New York Stock Exchange Companies</h5>
                    <div className="wrap d-flex justify-content-right">
                        <div className="search">
                            <input type="text" className="searchTerm" placeholder="Enter Stock here?"/>
                            <button type="submit" className="searchButton">
                            <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
                 {this.state.symbols.map( symbol => 
             <div className="border-0 collection">
                <ul className="container">
                    <li className="collection-item"> <span className="Symbol">{symbol.Symbol} </span>- {symbol.CompanyName} </li>
                </ul>
            </div>
                )}
            </div>
            )
        }

    }
}

export default  Nyse;