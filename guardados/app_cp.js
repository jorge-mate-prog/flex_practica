// Requiero las librerias express y path
const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const multer = require('multer');

const router = require('../src/routes/mainRouter');
const routerProd = require('../src/routes/productRouter');
const routerUsers = require('../src/routes/userRouter');

// para poder usar los métodos PUT y DELETE:
app.use(methodOverride('_method'));
// capturar la información:
 app.use(express.urlencoded({ extended: false}));
 app.use(express.json());
 
 // con body-parser:
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended: false}));
//  app.post('/crearProductos', function(req,res){
//     var data = req.body;

//     console.log("Nombre:",data.nombre);
//     console.log("Edad:",data.edad);
//     console.log("Email:",data.email);

//     res.send();
//  })
// pruebo el servidor con get
app.use(router);
app.use(routerProd);
app.use(routerUsers);
// Y lo redirecciono al mainRouter
//app.use('/', mainRouter); // directorio/archivo

// Archivos estáticos
// GET => ENVIA, USE => USA
app.use(express.static(path.join(__dirname,'../public')));
//app.use(express.static('public'));
// le asigno el template
app.set('view engine','ejs'); // app.set <-
app.set('views',(path.join(__dirname,'./views')));
//app.set('products',(path.join(__dirname,'./views/products')));
//app.set('users',(path.join(__dirname,'./views/users')));

// 404 handler
app.use((req,res,next) =>{
    res.status(404).send('404 Not Found!');
})

// Le doy puerto al server
app.listen(3000, (req,res)=>{
    console.log('El puerto mágico es 3000');
})