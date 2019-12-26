import React, {Component} from 'react';
<<<<<<< HEAD
//import Loading from '../components/Loading';
=======
>>>>>>> 5c13d9cb4a62c2896145e3bad4e6209aee349c8d

class News extends Component{
    
    state = {
        kpi: [],
<<<<<<< HEAD
        Symbol:'',
        loading: true
    }

    componentDidMount(){
        this.getKpi("TSLA")
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
        this.getKpi(Symbol);
        
    }

     getKpi = async (Symbol) => {
        await fetch(`/nyse/kpi/${Symbol}`)
            .then(response => response.json())
            .then(kpi => this.setState({kpi, loading: false,}, () => console.log(kpi)))
=======
    }

    componentDidMount(){
        this.getKpi()
    }

     getKpi = async () => {
        await fetch('/nyse/kpi/TSLA')
            .then(response => response.json())
            .then(kpi => this.setState({kpi}, () => console.log(kpi)))
>>>>>>> 5c13d9cb4a62c2896145e3bad4e6209aee349c8d
            .catch(e => e)
    }
    
    render(){
<<<<<<< HEAD

        const s = this.state.kpi;
        console.log('S:', typeof(s), s);
        return(
            <div>
                <div>
                    <form onClick={this.onSymbolClick}>
                        <input type="text" placeholder="Enter a stock symbol" value={this.state.Symbol} onChange={ this.onSymbolChange } />
                        <input type="submit" value="submit" />
                    </form>
       
                </div>
           
                
                <div className="card">
                    <div  className="card-header" >
                        <h1>{s.quoteType} </h1>
                        
                         
                    </div>
                  
                  
                </div>
            </div>
=======
        
        if (this.state.kpi === undefined || this.state.kpi.summary === undefined ) {
            return(<div> 
               <h5>Please wait...</h5>
            </div>);
        }
        const s = this.state.kpi;
        console.log('S:', typeof(s), s);
        return(
            
            <div className="card">
                    <div  className="card-header" >
                        {s.quoteType.longName} 
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">return On Equity (ROE) - {s.financialInfo.returnOnEquity.fmt}</li>
                        <li className="list-group-item">Return On Assets(ROA) - {s.financialInfo.returnOnAssets.fmt} </li>
                        <li className="list-group-item">Debt to Equity - {s.financialInfo.debtToEquity.fmt}</li>
                    </ul>
            </div>
 
>>>>>>> 5c13d9cb4a62c2896145e3bad4e6209aee349c8d
        )
    }
}


export default News;