import React, {Component} from 'react';
import _ from 'lodash';
import { Line } from 'react-chartjs-2';
//import {NavLink} from 'react-router-dom';
import ChartHeader from './ChartHeader';
<<<<<<< HEAD
import './chart.css';
import moment from 'moment';
//import Loading from '../components/Loading';

//import moment from 'moment';
//import symbols from './symbols.json';

=======
//import moment from 'moment';
//import symbols from './symbols.json';

>>>>>>> 5c13d9cb4a62c2896145e3bad4e6209aee349c8d
//console.log(symbols);

class Charts extends Component{

    state = {
        historicalData: [],
        Symbol:" ",
        errorMessage:""
    }

    componentDidMount(){
        console.log("compoentdidmount running...")
        this.getSymbol("TSLA");
    }

    onSymbolChange = event => {
        console.log("running onchange...");
        event.preventDefault();
        this.setState({Symbol:event.target.value.toUpperCase()});
    }

    onSymbolClick = (e) => {
        console.log("running onclick...");
        e.preventDefault();
        const Symbol = this.state.Symbol;
        this.getSymbol(Symbol);
        
    }

    getSymbol = async (Symbol) => {
        await fetch(`/chart/${Symbol}`)
            .then(response => response.json())
            .then(historicalData => this.setState({historicalData}))
            .catch(e => e)
        /*const response = fetch(`/chart/${Symbol}`);
        if(response.status === 404){
            this.setState({errorMessage: "Symbol Not Found"});
        }
        const historicalData = response.json();
        this.setState({historicalData:historicalData}) */
    }

    formatChartData(){
        console.log("graph running...");
<<<<<<< HEAD
        const stocks = this.state.historicalData;
        const stockdate = stocks.timestamp;
        
        return(
            {
                labels: _.map(_.keys(stockdate), stockdate => moment(stockdate.date).format("ll") ),
=======
        const stocks = this.state.historicalData
        const stockdate = stocks.timestamp
        return(
            {
                labels: _.map(_.keys(stockdate), stockdate => Intl.DateTimeFormat('en-US',{year: "numeric",month: "short",day: "2-digit"                          
                  }).format(stockdate.date) ),
>>>>>>> 5c13d9cb4a62c2896145e3bad4e6209aee349c8d
                datasets: [
                    {
                        label: "Stocks",
                        fill: true,
                        lineTension: 0.1,
                        backgroundColor: 'rgba(75,192,192,0.4)',
                        borderColor: 'rgba(75,192,192,1)',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: _.values(stocks.price)
                    }
                ]
            }
        )
    }


    render(){
        console.log('render is running...');
<<<<<<< HEAD
       /* if(this.state.Symbol === undefined){
            return(
                <div>Please Wait...</div>
            )
        }*/
        if (this.state.historicalData) {
        return(
            <div  >
                <ChartHeader title="NYSE Stock Index"/>
                <div className="subheader">
                    <form onClick={this.onSymbolClick}>
                        <input type="text" placeholder="Enter a stock symbol" value={this.state.Symbol} onChange={ this.onSymbolChange } />
=======
        if(this.state.Symbol === undefined){
            return(
                <div>Please Wait...</div>
            )
        }
        return(
            <div >
                <ChartHeader title="NYSE Stock Index"/>
                <div>
                    <form onClick={this.onSymbolClick}>
                        <input type="text" value={this.state.Symbol} onChange={ this.onSymbolChange } />
>>>>>>> 5c13d9cb4a62c2896145e3bad4e6209aee349c8d
                        <input type="submit" value="submit" />
                    </form>
       
                </div>
<<<<<<< HEAD
                <div className="container-chart">
                    <div className="row-chart">
                        <div className="graph-title">
                            <h6>{this.state.Symbol} graph over the last 30 days</h6>
                        </div>
                        <div className="col-chart">
                            
=======
                <div>
                    <div className="row">
                        <div className="col s6">
>>>>>>> 5c13d9cb4a62c2896145e3bad4e6209aee349c8d
                            <Line data={this.formatChartData()} height={50} />
                        </div>
                    </div>
                </div>
                {this.state.errorMessage}
            </div>
            
        );
<<<<<<< HEAD
        }
        return null;
=======
>>>>>>> 5c13d9cb4a62c2896145e3bad4e6209aee349c8d
    }
    
}

export default Charts;