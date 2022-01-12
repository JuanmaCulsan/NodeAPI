var express = require('express')    
var app = express()  
const conn = require("../common/mysql.js");

//Lista de vehículos filtrando por ID de usuario
const vehUserId = (req, res, conn) => {
    const id_usuario = req.query.id
    const sql = `SELECT * from vehiculos WHERE id_usu = ${id_usuario}`;
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