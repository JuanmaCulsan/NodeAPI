var express = require('express')    
var app = express()  
const conn = require("../common/mysql.js");

//Lista de servicios filtrando por un ID de vehículo
const serVehId = (req, res, conn) => {
    const id_vehiculo = req.query.id
    const sql = `SELECT * from servicios WHERE id_veh = ${id_vehiculo}`;
    conn.query(sql, (err, result) => {
        if (err) throw err;

        return res.json(result);
    });
}

exports.serVehId = serVehId;

//Información de un servicio filtrando por el ID del servicio
const serId = (req, res, conn) => {
    const id_servicio = req.query.id
    const sql = `SELECT * from servicios WHERE id_ser = ${id_servicio}`;
    conn.query(sql, (err, result) => {
        if (err) throw err;

        return res.json(result);
    });
}

exports.serId = serId;
