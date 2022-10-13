const fs = require('fs');
const path = require('path');

const productoControlador = {
    
    list: function(req,res){
        
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../database/productos.json')));
        res.render('products/listadoProductos',{productos}) ;
    },
    register: function(req,res) {
        res.render('products/registroProductos');
    //        res.send(req.body);   
    },
    create: function(req,res){
       res.render('products/crearProductos');
    //        res.send(req.body.name);
    //    res.send('llegaron los datos!');
    },
    createN: function(req,res){

//        console.log(req.body);
        let producto = {
            id : req.body.id,
            nombre: req.body.nombre,
            category: req.body.category,
            precio : req.body.precio,
            descuento: req.body.descuento
            //        email: req.body.email
        }
      res.send(producto);
        // Guardar la info enviada
       res.redirect('/crearProductos');
    },
    edit: function(req,res){
        res.render('edit');
    },
    delete: function(req,res){
        res.render('delete');
    },

}

module.exports = productoControlador;