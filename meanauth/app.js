const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport");
const config = require("./config/database");

//connect to database
mongoose.connect(config.database);

//on connection
mongoose.connection.on('connected', () => {
  console.log('mon connected to database'+config.database);  
});
mongoose.connection.on('error', (err) => {
  console.log('mon connected to database'+err);  
});

const app = express();

const users = require("./routes/users");

const port = 8080;
 
app.use(cors());

// set static
app.use(express.static(path.join(__dirname, 'public')));

//body parser middleware
app.use(bodyParser.json());

app.use('/users', users);

app.get( '/', (req,res) => {
    res.send('invalid endpoint');
});

app.listen(port, () => {
   console.log("server started " + port ); 
});