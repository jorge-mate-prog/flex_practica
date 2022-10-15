const express = require('express');
//const usersControlador = require('../controller/userController');
const routerUsers = express.Router();
const multer = require('multer');
const usersControlador = require('../controller/userController');

routerUsers.get('/users/users',usersControlador.users); 

routerUsers.get('/listadoUs',usersControlador.listado); 
// function(req,res){
//     res.send('Estamos en users/listadoUs');
// });

routerUsers.get('/registroUs',usersControlador.register);
routerUsers.post('/registroUs',usersControlador.save);

module.exports= routerUsers;