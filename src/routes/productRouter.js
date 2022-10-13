const express = require('express');
const productoControlador = require('../controller/productController');
const routerProd = express.Router();

// routerProd.get('/products', function(req,res){
//     res.send('Estamos en la raiz de productos');
// })
routerProd.get('/products/listadoProductos',productoControlador.list); 
// function(req,res){
//     res.send('Estamos en products/listadoProducts');
// });//productoControlador.list);
routerProd.get('/registroProductos',productoControlador.register);
//  function(req,res){
//     res.send('Estoy en products/REGISTROProductos');
// });
routerProd.post('/crearProductos',productoControlador.create);
//productoControlador.register);
// routerProd.get('/products/crearProductos',productoControlador.create)
// routerProd.post('/products/crearProductos',productoControlador.createN);

module.exports = routerProd;