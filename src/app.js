/* Nueva version de app.js */
const express = require('express');
const app = express();
const path = require('path');
const routerMain = require('../src/routes/mainRouter');
const routerPr = require('../src/routes/productRouter.js');
const routerUs = require('../src/routes/userRouter.js');
const methodOverride = require('method-override');
const multer = require('multer');
const bodyParser = require('body-parser');

// archivos estáticos:
// GET => ENVIA, USE => USA
app.use(express.static(path.join(__dirname,'../public')));

// para poder usar los métodos PUT y DELETE:
app.use(methodOverride('_method'));

// capturar la información de POST:
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
// con body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// motor de plantillas: EJS:
app.set('view engine','ejs');
app.set('views',(path.resolve(__dirname,'./views')));

// después de llevar la función a router, le digo que uso:
app.use('/',routerMain);
app.use('/products',routerPr);
app.use('/users',routerUs);

// 404 handler
app.use((req,res,next) =>{
//    res.status(404).send('404 Not Found!');
    res.status(404).render('pages/404');
});
// app.use(function logErrors(err,req,res,next){
//     res.error(err.stack);
//     next(err);
// });

//otra opción de error handler:
app.use(function errorHandler(err, req, res, next) {
    res.status(500);
    res.render('error', { error: err });
  });
// otra opción de error: 
  // app.use((error,req,res,next) =>{
//     res.status(400).json({
//         status: 'error',
//         message: error.message
//     })
// });

app.listen(3000, (req,res)=> {
    console.log('El puerto mágico es 3000!');
})