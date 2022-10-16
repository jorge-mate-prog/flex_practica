// Main Controlador
const fs = require('fs');

const controladorMain ={
    index: function(req,res){
    //    res.send('El GET funciona! en controller');
        res.render('pages/index');
    }
}

module.exports = controladorMain;