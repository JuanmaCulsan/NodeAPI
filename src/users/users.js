const{Router} = require('express');
const router = Router();
const conn = require("../common/conexion");

router.get('/', (req,res)=>{
    conn.query('Select * from usuario', (err,rows,fields)=>{
      if(!err){
        res.json(rows);
      } else{
        console.log(err);
      }
    });
});

module.exports = router;
