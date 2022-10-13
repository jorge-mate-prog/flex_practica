/* Nueva version de app.js */
const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const multer = require('multer');
const bodyParser = require('body-parser');

const router = require('./src/routes/mainRouter');
const routerProd = require('./src/routes/productRouter');
const routerUsers = require('./src/routes/userRouter');
// archivos estáticos:
app.use(express.static(path.join(__dirname,'./public')));

// para poder usar los métodos PUT y DELETE:
app.use(methodOverride('_method'));

// después de llevar la función a router, le digo que uso:
app.use(router);
app.use(routerProd);
app.use(routerUsers);

app.set('view engine','ejs');
app.set('views',(path.resolve(__dirname,'./src/views')));

app.listen(3000, (req,res)=> {
    console.log('El puerto mágico es 3000!');
})

