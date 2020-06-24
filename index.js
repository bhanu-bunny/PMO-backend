const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Morgan = require('morgan');


const { mongoose } = require('./db.js');

var MasterdataController = require('./controllers/MasterdataController');
var UserController = require('./controllers/UsersControllers');
var BuildingController = require('./controllers/BuildingControllers');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(3000, () => console.log('Server started at port : 3000'));

app.use(Morgan());

app.use('/Masterdata', MasterdataController);
app.use('/Users', UserController);
app.use('/Building',BuildingController);

app.use((req,res,next) =>
    {
        const error = new Error('Not found');
        error.status=404;
        next(error);
    });

app.use((error, req, res, next)=>
{
    res.status(error.status || 500);
    res.json({
        error:{
            message:error.message
        }
    });
});    