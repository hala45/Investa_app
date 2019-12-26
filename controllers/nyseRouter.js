const express = require('express');
let router = express.Router();
<<<<<<< HEAD
const {Stock} = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// import the symbol.json file
//const symbols = require('./symbols.json');

var request = require("request");
/*
router.get('/', (req, res) => {
    res.send(symbols);
})*/
router.get('/', (req,res) => {
  Stock.findAll()
        .then(stocks => {
            //console.log(stocks);
            //res.sendStatus(200);
            res.send(stocks)
        })
        .catch(e => console.log(e));
})

router.get('/search', (req, res) => {
  const { term } = req.query;
  Stock.findAll({ where: { CompanyName: { [Op.like]: '%' + term + '%'}}})
    .then(stock => res.send(stock))
    .catch(err => console.log(err))
=======

// import the symbol.json file
const symbols = require('./symbols.json');

var request = require("request");

router.get('/', (req, res) => {
    res.send(symbols);
>>>>>>> 5c13d9cb4a62c2896145e3bad4e6209aee349c8d
})

router.get('/:id', (req, res) => {
    let symbolName = req.params.id;
    let timestamp = Math.floor(Date.now()/1000);
<<<<<<< HEAD
=======
    switch(symbolName)
    {
      case 'AAPL':
        symbolName = 'AAPL';
        break;
      case 'GOOGL':
        symbolName = 'GOOGL';
        break;
      case 'IBM':
        symbolName = 'IBM';
        break;
      case 'MSFT':
        symbolName = 'MSFT';
        break;
      case 'TSLA':
        symbolName = 'TSLA';
        break;
      default:
        console.log("The symbol is not a valid symbol");
        break;

    }
>>>>>>> 5c13d9cb4a62c2896145e3bad4e6209aee349c8d

    var options = {
      method: 'GET',
      url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-historical-data',
      qs: {
        frequency: '1d',
        filter: 'history',
        period1: `${timestamp}`,
        period2: `${timestamp}`,
        symbol: `${symbolName}`
      },
      headers: {
        'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
<<<<<<< HEAD
        'x-rapidapi-key': 'ce9b90c58fmsh5b71f37b9a6a50ep172728jsn54c6923e6e85'
=======
        'x-rapidapi-key': '93b26d98c8msh56f6f024aa8de21p18ec5ejsn2e4cb3c87943'
>>>>>>> 5c13d9cb4a62c2896145e3bad4e6209aee349c8d
      }
    };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);
<<<<<<< HEAD
      let json = body;
      let obj = JSON.parse(json);
      let p = obj.prices[0];  
      let x = (p.close).toString();
      res.send(x);
      
    });
}); 
=======
    
      res.send(body);
    });
}); 
/*
const stock= {
  prices: [
  {
  date: 1571860801,
  open: 242.10000610351562,
  high: 243.22000122070312,
  low: 241.22000122070312,
  close: 243.17999267578125,
  volume: 19932545,
  adjclose: 243.17999267578125
  }
  ],
  isPending: false,
  firstTradeDate: 345459600,
  id: "1wk15718791161571879116",
  timeZone: {
  gmtOffset: -14400
  },
  eventsData: [ ]
  }

  app.get('/stocks/AAPL', (req, res) => {
    res.send(stock)
  });
*/
>>>>>>> 5c13d9cb4a62c2896145e3bad4e6209aee349c8d

module.exports = router;