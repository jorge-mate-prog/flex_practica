// requiero las librerias: express
const express = require('express');
//const { index } = require('../controller/mainController');
const mainController = require('../controller/mainController');
const router = express.Router();

// traigo la función desde app y le asigno '/' raiz
// despues creo el controlador y lo vinculo a '/'
router.get('/', mainController.index);
//router.use('/',(req,res) =>{
//    res.send('Bienvenidos a la raiz del sitio!');
//});


// exporto el modulo
module.exports = router;