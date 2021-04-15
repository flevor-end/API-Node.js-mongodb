const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

app.use(morgan('dev'));
app.use(cors());


app.use(require('./routes/users'));
app.use(require('./routes/index'));


app.use(express.urlencoded({extended: false}));


module.exports = app;