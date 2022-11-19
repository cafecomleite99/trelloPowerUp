var express = require('express');
let cors = require('cors')
var app = express();

// http://expressjs.com/en/starter/static-files.html
app.use(cors({ origin: 'https://trello.com' }));

console.log("Leonardo Sousa");
