var express = require('express')    
var app = express()  
const conn = require("../common/mysql.js");

//Lista de vehículos filtrando por ID de usuario
const vehUserId = (req, res, conn) => {
    const id = req.query.id
    const sql = `SELECT * from vehiculos WHERE id_usu = ${id}`;
    conn.query(sql, (err, result) => {
        if (err) throw err;

        return res.json(result);
    });
}
exports.vehUserId = vehUserId;


//Información de un vehículo filtrando por el ID del vehículo
const vehId = (req, res, conn) => {
    const id_vehiculo = req.query.id
    const sql = `SELECT * from vehiculos WHERE id_veh = ${id_vehiculo}`;
    conn.query(sql, (err, result) => {
        if (err) throw err;

        return res.json(result);
    });
}
exports.vehId = vehId;


//Modifica un vehiculo
const modVehId = (req, res, conn) => {
    const id_veh = req.query.id
    let vehiculos = {
        id_usu: req.body.idusu,
        matricula: req.body.matricula,
        marca: req.body.marca,
        modelo: req.body.modelo
    }
    let sql = `UPDATE vehiculos SET ? WHERE id_veh '${id_veh}'`;
    conn.query(sql, vehiculos,err => {
        if (err) throw err;
        return res.json(result);
    });

    res.send("VEHICULO MODIFICADO");
}
exports.modVehId = modVehId


//Crear un nuevo vehiculo
const creaVehId = (req, res, conn) => {
    let sql = "insert into vehiculos set ?";
    let vehiculos = {
        id_veh: req.body.idveh,
        id_usu: req.body.idusu,
        matricula: req.body.matricula,
        marca: req.body.marca,
        modelo: req.body.modelo
    }

    conn.query(sql, vehiculos,err => {
        if (err) throw err;

        return res.json(result);
    });

    res.send("VEHICULO CREADO");
}
exports.creaVehId = creaVehId


//Eliminar un vehiculo
const delVehId = (req, res, conn) => {
    const id_veh = req.query.id
    const sql = `DELETE FROM vehiculos WHERE id_veh = '${id_veh}'`;
    conn.query(sql, (err, result) => {
        if (err) throw err;

        return res.json(result);
    });

    res.send("VEHICULO ELIMINADO");
}
exports.delVehId = delVehId


//Información de un vehículo y su lista de servicios en la misma llamada filtrando por ID de usuario
const vehSer_vehId = (req, res, conn) => {
    const id_veh = req.query.id
    const sql = `SELECT * from vehiculos veh, servicios ser WHERE veh.id_veh = ${id_veh} and ser.id_veh = ${id_veh}`;
    conn.query(sql, (err, result) => {
        if (err) throw err;

        return res.json(result);
    });
}
exports.vehSer_vehId = vehSer_vehId