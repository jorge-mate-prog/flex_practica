const fs = require('fs');
const path = require('path');
const { encode } = require('punycode');

let productosJSON = fs.readFileSync(path.resolve(__dirname,'../database/productos.json'));
let productosN = JSON.parse(productosJSON);

const productoControlador = {
    
    list: function(req,res){
        
        res.render('products/listadoProductos',{productosN}) ;
    },
    register: function(req,res) {
        res.render('products/registroProductos');
    //        res.send(req.body);   
    },
    save: function(req,res){
    //  res.render('products/crearProductos');
          
//        res.send('llegaron los datos!');
//         console.log(req.body);
        let productoNu = {
            id : productosN.length +1,
            name: req.body.name,
            category: req.body.category,
            precio : req.body.precio,
            descuento: req.body.descuento
//             //        email: req.body.email
        }
        productosN.push(productoNu);
        let nuProductosN = JSON.stringify(productosN,(encode,'utf-8'));
        fs.writeFileSync(path.resolve(__dirname,'../database/productos.json'),nuProductosN);
   // Guardar la info enviada
        res.redirect('products/listadoProductos');
    },
    edit: function(req,res){
        res.render('edit');
    },
    delete: function(req,res){
        res.render('delete');
    }

}

module.exports = productoControlador;