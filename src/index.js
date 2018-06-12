const express =require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mevn-database')
    .then(db=>console.log('DB is connected'))
    .catch(err =>console.error(err));
const app = express();
//Settings
app.set('port', process.env.PORT || 3000);


//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/tasks',require('./routes/tasks'));

//Static files
app.use(express.static(__dirname + '/public'));

//Servere is Listening
app.listen(app.get('port'),()=>{
    console.log('Server on port',app.get('port'));
});