const express = require('express');
const router = express.Router();

var request = require("request");

router.get('/:id', (req, res) => {
<<<<<<< HEAD
    symbolName = req.params.id;

    var options = {
        method: 'GET',
        url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary',
        qs: {symbol:`${symbolName}`},
        headers: {
            'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
            'x-rapidapi-key': 'ce9b90c58fmsh5b71f37b9a6a50ep172728jsn54c6923e6e85'
            }
        };
    
=======

    symbolName = req.params.id;

    var options = {
    method: 'GET',
    url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary',
    qs: {symbol:`${symbolName}`},
    headers: {
        'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
        'x-rapidapi-key': '93b26d98c8msh56f6f024aa8de21p18ec5ejsn2e4cb3c87943'
        }
    };

>>>>>>> 5c13d9cb4a62c2896145e3bad4e6209aee349c8d
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        // convert json object to javascript array in order to read each object
        // using the dot notation in React
<<<<<<< HEAD
        let json = body;
        let obj = JSON.parse(json);
        let summary = obj.summaryProfile;
        let financialData = obj.financialData;
        let quoteType = obj.quoteType;

        res.send([{
            summary: summary.longBusinessSummary,
            price:financialData.currentPrice.raw,
            ROA:financialData.returnOnAssets.fmt,
            DTE:financialData.debtToEquity.fmt,
            ROE: financialData.returnOnEquity.fmt,
            revenue:financialData.totalRevenue.longFmt,
            quoteType: quoteType.longName
        }]); 
=======
        var json = body;
        var obj = JSON.parse(json);
        var summary = obj.summaryProfile;
        var financialData = obj.financialData;
        var quoteType = obj.quoteType;
        res.send({
            summary: summary,
            financialInfo: financialData,
            quoteType: quoteType
        }); 
>>>>>>> 5c13d9cb4a62c2896145e3bad4e6209aee349c8d
    });
})

module.exports = router;