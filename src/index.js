const express = require('express');
const app = express();
const morgan = require('morgan');

//ajustes
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//milderwares (esto es para soportar los datos)
app.use(morgan('dev'));//permite ver por consola lo que va llegando al servidor
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use(require('./users/users'));
app.use(require('./users/usersbyid'));
app.use(require('./vehicles/listadevehiculos'));


//empezando el servidor
app.listen(3000,()=>{
    console.log(`Server on port ${app.get('port')}`);
})