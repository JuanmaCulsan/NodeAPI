//Información de un vehículo filtrando por el ID del vehículo
const{Router} = require('express');
const router = Router();
const conn = require("../common/mysql.js");

router.get('/:id_veh', (req,res)=>{
    const {id_veh} = req.params;
    conn.query('Select * from vehiculos where id_veh=?',[id_veh], (err,rows,fields)=>{
      if(!err){
        res.json(rows[0]);
      } else{
        console.log(err);
      }
  });
});

module.exports = router;