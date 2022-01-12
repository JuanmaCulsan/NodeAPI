var express = require('express')    
var app = express()  
const conn = require("../common/mysql.js");
//const mysql = require('mysql');

const users = (req, res, conn) => {
    const sql = "SELECT * from usuario";
    conn.query(sql, (err, result) => {
        if (err) throw err;

        return res.json(result);
    });
}
exports.users = users

const userId = (req, res, conn) => {
    const id_usuario = req.query.id
    const sql = `SELECT * from usuario WHERE id_usu = ${id_usuario}`;
    conn.query(sql, (err, result) => {
        if (err) throw err;

        return res.json(result);
    });
}

exports.userId = userId

const modUsuId = (req, res, conn) => {
    const id_usu = req.query.idusu
    const nombre = req.query.nombre
    const login = req.query.login
    const pass = req.query.pass
    const admin = req.query.admin

    res.send({
        'id_usu':id_usu,
        'nombre':nombre,
        'login':login,
        'pass':pass,
        'admin':admin
    })

}

exports.modUsuId = modUsuId

