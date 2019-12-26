import React, { Component } from 'react';
<<<<<<< HEAD
import './nyse.css';
import Loading from '../components/Loading';

class Nyse extends Component {
    state = {
        symbols:[],
        loading: true
=======

class Nyse extends Component {
    state = {
        symbols:[]
>>>>>>> 5c13d9cb4a62c2896145e3bad4e6209aee349c8d
    }

    componentDidMount(){
        this.getSymbols();
    }

    getSymbols = () => {
        fetch('/nyse')
            .then(response => response.json())
<<<<<<< HEAD
            .then(symbols => this.setState({symbols, loading: false}, () => console.log(symbols)))
=======
            .then(symbols => this.setState({symbols}, () => console.log(symbols)))
>>>>>>> 5c13d9cb4a62c2896145e3bad4e6209aee349c8d
            .catch(e => e)
    }

    render(){
<<<<<<< HEAD
        if(this.state.loading) {
            return <Loading />;
        }
        return(
            <div className="wrapper">
                <div className="  my-2" >
                    <h5 className="  text-center">New York Stock Exchange Companies</h5>
                    <div className="wrap d-flex justify-content-right">
                        <div className="search">
                            <input type="text" className="searchTerm" name="term" placeholder="Enter Stock here?"/>
                            <button type="submit" className="searchButton">
                            <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div >
                <div className="stockList">
                    {this.state.symbols.map( symbol => 
                    <div className="border-0 collection">
                        <ul className="container">
                            <li className="collection-item"> <span className="Symbol">{symbol.Symbol} </span>- {symbol.CompanyName} </li>
                        </ul>
                    </div>
                )}
                </div>
            </div>
        )  
=======
        if(this.state.symbols){
            return(
                <div >
                    <h5 className="text-center">New York Stock Exchange Companies</h5>
                    {this.state.symbols.map( symbol => 
                        <div className="collection">
                            <ul className="container">
                                <li className="collection-item"> {symbol.Symbol} - {symbol.CompanyName} </li>
                            </ul>
                        </div>
                    )}
                </div>
            )
        }

>>>>>>> 5c13d9cb4a62c2896145e3bad4e6209aee349c8d
    }
}

export default  Nyse;