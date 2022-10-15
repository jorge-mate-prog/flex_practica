//
const fs = require('fs');
const path = require('path');
const { encode } = require('punycode');

const usersJSON = fs.readFileSync(path.resolve(__dirname,'../database/usuarios.json'));
const usersN = JSON.parse(usersJSON);
let nuUsuariosJSON;

const usersControlador = {
    users: function(req,res){
    //    res.send('Estás en el Index de usuarios');
        res.render('users/users');
    },
    listado: function(req,res){
    //    let usuariosArr = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../database/usuarios.json')));
    //    console.log(usuariosArr);
        res.render('users/listadoUs',{usersN});
    },
    register: function(req,res){
        res.render('users/registroUs');
    },
    save: function(req,res){
     //   res.send('llegaron!');
        //   res.send('req.body');
    //     console.log(req.body);  <--funciona
        let dato = req.body;
        let userNu = {
            id: usersN.length +1,
            genero:dato.genero,
            name: dato.name,
            age: dato.age,
            born: dato.born,
            study: dato.study
        }
        usersN.push(userNu);
        let nuUsuariosJSON = JSON.stringify(usersN, {encoding: "utf-8"});
        fs.writeFileSync(path.resolve(__dirname,'../database/usuarios.json'),nuUsuariosJSON);
        
        res.redirect('users/users');
        // let usuariosArr = JSON.parse(path.resolve(__dirname,'../database/usuarios.json'));
        // let ultimoUs = usuariosArr.pop();
        // usuariosArr.push(ultimoUs);
        // let nuevoUs = {
        //     id: ultimoUs.id +1,
        //     nombre: req.body.nombre,
        //     age: req.body.age,
        //     born: req.body.born,
        //     study: req.body.study
        // }
        // usuariosArr.push(nuevoUs);
       //console.log(nuevoUs);
    //    let nuevoUsuarios = JSON.stringify(usuariosArr,null,2);
    //    fs.writeFileSync(path.resolve(__dirname,'/usuarios.json'),nuevoUsuarios);
    //    res.redirect('users/users');
    }  
}

module.exports = usersControlador;