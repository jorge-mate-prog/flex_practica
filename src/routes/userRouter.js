const express = require('express');
const routerUs = express.Router();
const usersControlador = require('../controller/userController');

routerUs.get('/users',usersControlador.users); 

routerUs.get('/listadoUs',usersControlador.listado); 
// function(req,res){
//     res.send('Estamos en users/listadoUs');
// });
routerUs.get('/registroUs',usersControlador.register);
routerUs.post('/registroUs',usersControlador.save);

//detalle
routerUs.get('/:idUser', function(req,res){
    res.send("Bienvenidos al detalle del Usuario "+req.params.idUser);
});
// routerUs.get('/:idUser/comentario/:idComentario?', function(req,res){
//     if(req.params.idComentario == undefined){
//         res.send("Bienvenidos a los comentarios del Usuario!" + req.params.idUser);
//     }else{
//         res.send("Bienvenidos a los comentarios del Usuario"+ req.params.idUser + " y estas enfocado en el comentario " + req.params.idComentario);
//     }
// })
module.exports= routerUs;