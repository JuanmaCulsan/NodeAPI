const{Router} = require('express');
const router = Router();
const conn = require("../common/mysql.js");


router.get('/:id_usu', (req,res)=>{
    const {id_usu} = req.params;
    conn.query('Select * from usuario where id_usu=?',[id_usu], (err,rows,fields)=>{
      if(!err){
        res.json(rows[0]);
      } else{
        console.log(err);
      }
  });
});

module.exports = router;