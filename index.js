const express = require('express');
const app = express();

const chartsRouter = require('./controllers/chartsRouter');
const nyseRouter = require('./controllers/nyseRouter');
const kpiRouter = require('./controllers/kpiRouter');
<<<<<<< HEAD
const orderRouter = require('./controllers/order');
const signupRouter = require('./controllers/register');
const summaryRouter = require('./controllers/summary');
const login = require('./controllers/login');
=======
>>>>>>> 5c13d9cb4a62c2896145e3bad4e6209aee349c8d

// get all stocks at route /nyse
app.use('/nyse', nyseRouter);
//get chart for any individual stock symbol. example /chart/GOOGL
app.use('/chart', chartsRouter);
// get kpi and company info at route /nyse/kpi/TSLA for example
app.use('/nyse/kpi', kpiRouter);

<<<<<<< HEAD
//post get delete order
app.use('/order', orderRouter);
//transaction summary
app.use('/summary', summaryRouter);
// user registration
app.use('/registration', signupRouter);
app.use('/auth', login);


=======

>>>>>>> 5c13d9cb4a62c2896145e3bad4e6209aee349c8d

app.listen(8080, ()=>{
    console.log('server started on port 8080');
}) 

