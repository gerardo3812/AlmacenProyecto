const ruta =require('express').Router();
const consulta=require('../config/conexiondb');
const express = require("express");

////consulta bd (get)
ruta.get('/',(req, res)=>{
  let sql = "select * from producto"

  consulta.query(sql, (err, rows)=>{
    if(!err) res.json(rows)
    else
      console.error(err);
  });
});
////consulta bd con ID (get)

ruta.get('/:id',(req, res)=>{
  const {id} = req.params;
  let sql = "select * from producto where  idProducto =?"
  consulta.query(sql,[id],(err, rows)=>{
    if(!err) res.json(rows)
    else
      console.error(err);
  });
});
//eliminar(delete)
ruta.delete('/:id',(req, res)=>{
  const {id} = req.params;
  let sql = "delete from producto where  idProducto =?"
  consulta.query(sql,[id],(err)=>{
    if(!err) res.json('registro eliminado')
    else
      console.error(err);
  });
});
//insertar (post)
ruta.post('/bd/inserta',(req, res)=>{
  const {IdProducto, IdProveedor, IdAnaquel, nombre, descripcion, precio_producto, cantidad_producto} = req.body;
  let query = "insert into producto (IdProducto, IdProveedor, IdAnaquel, nombre, descripcion, precio_producto, cantidad_producto)values( '"+IdProducto+"',"+IdProveedor+","+IdAnaquel+",'"+nombre+"','"+descripcion+"',"+precio_producto+","+cantidad_producto+"   )"
  consulta.query(query,(err,rows, fields)=>{
    if(!err) res.json('Elemento insertado')
    else
      console.error(err);
  });

});
//modificar
ruta.put('/:id',(req, res)=>{
  const{id}=req.params;
  const{IdProveedor, IdAnaquel, nombre, descripcion, precio_producto, cantidad_producto} = req.body
  let query = " update producto set IdProveedor =  "+IdProveedor+" , IdAnaquel =  "+IdAnaquel+" ,nombre = '"+nombre+"',descripcion = '"+descripcion+"', precio_producto = "+precio_producto+", cantidad_producto = "+cantidad_producto+" where  IdProducto = ? "
  consulta.query(query,[id],(err,rows, fields)=>{
    if(!err) res.json('Elemento Actualizado')
    else
      console.error(err);
  });
})



module.exports = ruta;
