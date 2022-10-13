//
const fs = require('fs');
const path = require('path');

const usersControlador = {
    users: function(req,res){
    //    res.send('Estás en el Index de usuarios');
        res.render('users/users');
    },
    listado: function(req,res){
        let usuariosArr = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../database/usuarios.json')));
    //    console.log(usuariosArr);
        res.render('users/listadoUs',{usuariosArr});
    },
    register: function(req,res){
        res.render('users/registroUs');
    },
    create: function(req,res){
     //   res.send('req.body');
        console.log(req.body);
        let usuariosArr = JSON.parse(path.resolve(__dirname,'../database/usuarios.json'));
        let ultimoUs = usuariosArr.pop();
        usuariosArr.push(ultimoUs);
        let nuevoUs = {
            id: ultimoUs.id +1,
            nombre: req.body.nombre,
            age: req.body.age,
            born: req.body.born,
            study: req.body.study
        }
        usuariosArr.push(nuevoUs);
       //console.log(nuevoUs);
    //    let nuevoUsuarios = JSON.stringify(usuariosArr,null,2);
    //    fs.writeFileSync(path.resolve(__dirname,'/usuarios.json'),nuevoUsuarios);
        res.redirect('users/users');
    }  
}

module.exports = usersControlador;