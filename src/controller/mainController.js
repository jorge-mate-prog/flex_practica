const mainController = {
    index: function(req,res){
    //    res.send('Estamos en raiz en controller!');
        res.render('pages/index');
    }
}

module.exports = mainController;