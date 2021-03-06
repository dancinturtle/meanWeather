const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('./server/config/mongoose.js')

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist'));
const routes = require('./server/config/routes.js')(app);

app.listen(8000, ()=>{
    console.log("Listening on port 8000!")
});