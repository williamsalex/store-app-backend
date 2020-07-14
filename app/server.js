const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
require('./routes')(app, {});

app.listen(port, () => { console.log("Live from " + port + " it's Saturday night!"); });
