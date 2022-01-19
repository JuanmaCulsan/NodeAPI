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


//Modifica un servicio
const modSerId = (req, res, conn) => {
    const id_ser = req.query.id
    let servicios = {
        id_veh : req.body.idveh,
        descrip : req.body.descrip,
        fecha : req.body.fecha,
        km : req.body.km
    }
    let sql = `UPDATE servicios SET ? WHERE id_ser '${id_ser}'`;
    conn.query(sql, servicios,err => {
        if (err) throw err;
        return res.json(result);
    });

    res.send("SERVICIO MODIFICADO");
}
exports.modSerId = modSerId


//Crear un nuevo servicio
const creaSerId = (req, res, conn) => {
    let sql = "insert into servicios set ?";
    let servicios = {
        id_ser: req.body.idser,
        id_veh: req.body.idveh,
        descrip: req.body.descrip,
        fecha: req.body.fecha,
        km: req.body.km
    }

    conn.query(sql,servicios,err => {
        if (err) throw err;

        return res.json(result);
    });

    res.send("SERVICIO CREADO");
}
exports.creaSerId = creaSerId


//Eliminar un servicio
const delSerId = (req, res, conn) => {
    const id_ser = req.query.id
    const sql = `DELETE FROM servicios WHERE id_ser = '${id_ser}'`;
    conn.query(sql, (err, result) => {
        if (err) throw err;

        return res.json(result);
    });

    res.send("SERVICIO ELIMINADO");
}
exports.delSerId = delSerId
