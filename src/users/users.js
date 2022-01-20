var express = require('express')    
var app = express()  
const conn = require("../common/mysql.js");
//const mysql = require('mysql');

//Lista de usuarios
const users = (req, res, conn) => {
    const sql = "SELECT * from usuario";
    conn.query(sql, (err, result) => {
        if (err) throw err;

        return res.json(result);
    });
}
exports.users = users

//Información de un usuario, filtrando por su ID
const userId = (req, res, conn) => {
    const id_usuario = req.query.id
    const sql = `SELECT * from usuario WHERE id_usu = ${id_usuario}`;
    conn.query(sql, (err, result) => {
        if (err) throw err;

        return res.json(result);
    });
}
exports.userId = userId

//Modifica un usuario
const modUsuId = (req, res, conn) => {
    const id_usu = req.query.id
    let usuario = {
        nombre : req.body.nombre,
        login : req.body.login,
        pass : req.body.pass,
        admin : req.body.admin
    }
    let sql = `UPDATE usuario SET ? WHERE id_usu '${id_usu}'`;
    conn.query(sql, usuario,err => {
        if (err) throw err;
        return res.json(result);
    });

    res.send("USUARIO MODIFICADO");
}
exports.modUsuId = modUsuId


//Crear un nuevo usuario
const creaUsuId = (req, res, conn) => {
    let sql = "insert into usuario set ?";
    let usuario = {
        id_usu: req.body.idusu,
        nombre : req.body.nombre,
        login : req.body.login,
        pass : req.body.pass,
        admin : req.body.admin
    }

    conn.query(sql, usuario,err => {
        if (err) throw err;

        return res.json(result);
    });
    res.send("USUARIO CREADO");
}
exports.creaUsuId = creaUsuId


//Eliminar a un usuario
const delUsuId = (req, res, conn) => {
    const id_usuario = req.query.id
    const sql = `DELETE FROM usuario WHERE id_usu = '${id_usuario}'`;
    conn.query(sql, (err, result) => {
        if (err) throw err;

        return res.json(result);
    });
    res.send("USUARIO ELIMINADO");
}
exports.delUsuId = delUsuId


//Información de un usuario y su lista de vehículos en la misma llamada filtrando por ID de usuario

const usuVeh_UsuId = (req, res, conn) => {
    const id_usuario = req.query.id
    const sql = `SELECT * from usuario, vehiculos WHERE usuario.id_usu = ${id_usuario} and vehiculos.id_usu = ${id_usuario}`;
    conn.query(sql, (err, result) => {
        if (err) throw err;

        return res.json(result);
    });
}
exports.usuVeh_UsuId = usuVeh_UsuId

