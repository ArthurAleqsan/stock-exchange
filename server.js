const express = require('express');
const bodyParser = require('body-parser');

//connect routes

const currency = require('./routes/currency');

const app = express();

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

//use routes
app.use('/', currency);

app.listen(port, ()=> console.log(`Server initialized in port ${port}`));

