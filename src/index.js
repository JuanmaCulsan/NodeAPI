const express = require('express');
const app = express();
const morgan = require('morgan');
const conn = require('./common/mysql')
//ajustes
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//milderwares (esto es para soportar los datos)
app.use(morgan('dev'));//permite ver por consola lo que va llegando al servidor
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
//Lista de usuarios
const users = require('./users/users').users
app.get('/listUsu', (req, res) => users(req, res, conn))

//Información de un usuario, filtrando por su ID
const userId = require('./users/users').userId
app.get('/userId', (req, res) => userId(req, res, conn))

//Lista de vehículos filtrando por ID de usuario
const vehUserId = require('./vehicles/vehicles').vehUserId
app.get('/vehUserId', (req, res) => vehUserId(req, res, conn))

//Información de un vehículo filtrando por el ID del vehículo
const vehId = require('./vehicles/vehicles').vehId
app.get('/vehId', (req, res) => vehId(req, res, conn))

//Lista de servicios filtrando por un ID de vehículo
const serVehId = require('./servic/services').serVehId
app.get('/serVehId', (req, res) => serVehId(req, res, conn))

//Información de un servicio filtrando por el ID del servicio
const serId = require('./servic/services').serId
app.get('/serId', (req, res) => serId(req, res, conn))

//modificar datos de un usuario
const modUsuId = require('./users/users').modUsuId
app.post('/modUsuId', (req, res) => modUsuId(req, res, conn))

//crear un nuevo usuario 


//empezando el servidor
app.listen(3000,()=>{
    console.log(`Server on port ${app.get('port')}`);
})