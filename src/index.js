const express = require('express');
const app = express();
var cors = require('cors')
const morgan = require('morgan');
const conn = require('./common/mysql')
//ajustes
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//milderwares (esto es para soportar los datos)
app.use(morgan('dev'));//permite ver por consola lo que va llegando al servidor
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());
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



//LISTA DE USUARIOS

//modificar datos de un usuario
const modUsuId = require('./users/users').modUsuId
app.post('/modUsuId', (req, res) => modUsuId(req, res, conn))

//Crear un nuevo usuario 
const creaUsuId = require('./users/users').creaUsuId
app.post('/creaUsuId', (req, res) => creaUsuId(req, res, conn))

//Borrar datos de un usuario
const delUsuId = require('./users/users').delUsuId
app.get('/delUsuId', (req, res) => delUsuId(req, res, conn))



//LISTA DE VEHICULOS

//modificar datos de un vehiculo
const modVehId = require('./vehicles/vehicles').modVehId
app.post('/modVehId', (req, res) => modVehId(req, res, conn))

//Crear un nuevo vehiculo
const creaVehId = require('./vehicles/vehicles').creaVehId
app.post('/creaVehId', (req, res) => creaVehId(req, res, conn))

//Borrar datos de un vehiculo
const delVehId = require('./vehicles/vehicles').delVehId
app.get('/delVehId', (req, res) => delVehId(req, res, conn))



//LISTA DE SERVICIOS

//modificar datos de un servicio
const modSerId = require('./servic/services').modSerId
app.post('/modSerId', (req, res) => modSerId(req, res, conn))

//Crear un nuevo usuario 
const creaSerId = require('./servic/services').creaSerId
app.post('/creaSerId', (req, res) => creaSerId(req, res, conn))

//Borrar datos de un usuario
const delSerId = require('./servic/services').delSerId
app.get('/delSerId', (req, res) => delSerId(req, res, conn))



//QUERY COMPLEJAS

//Información de un usuario y su lista de vehículos en la misma llamada filtrando por ID de usuario
const usuVeh_UsuId = require('./users/users').usuVeh_UsuId
app.get('/listaUser', (req, res) => usuVeh_UsuId(req, res, conn))

//Información de un vehículo y su lista de servicios en la misma llamada filtrando por ID de usuario 
const vehSer_vehId = require('./vehicles/vehicles').vehSer_vehId
app.get('/listaSer', (req, res) => vehSer_vehId(req, res, conn))


//empezando el servidor
app.listen(3000,()=>{
    console.log(`Server on port ${app.get('port')}`);
})