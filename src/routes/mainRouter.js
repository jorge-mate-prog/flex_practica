// requiero las librerias: express
const express = require('express');
const controladorMain = require('../controller/mainController');
const routerMain = express.Router();

// traigo la función desde app y le asigno '/' raiz
// despues creo el controlador y lo vinculo a '/'
routerMain.get('/', controladorMain.index);
//router.use('/',(req,res) =>{
//    res.send('Bienvenidos a la raiz del sitio!');
//});

module.exports = routerMain;