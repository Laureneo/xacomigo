var express = require('express');
var consign = require('consign');//Carrega as rotas automaticamente
var bodyParser = require('body-parser');//

var app = express();
app.use((req, res, next) => { //Cria um middleware onde todas as requests passam por ele 
    if ((req.headers["x-forwarded-proto"] || "").endsWith("http")) //Checa se o protocolo informado nos headers é HTTP 
        res.redirect(`https://${req.headers.host}${req.url}`); //Redireciona pra HTTPS 
    else //Se a requisição já é HTTPS 
        next(); //Não precisa redirecionar, passa para os próximos middlewares que servirão com o conteúdo desejado 
});
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public')); //Redireciona todas as rotas estaticas da pasta public, onde carrega as imagens e o bootstrap por exempo
app.use(bodyParser.urlencoded({extended: true}));

consign()
    .include('app/routes')//Carrega as rotas automaticamente dentro da pasta app/routes
    .then('config/dbConnection.js')
    .then('app/models')//Carrega as Models da pasta models
    .then('app/controllers')//Carrega os dados da pasta controllers
    .into(app);

module.exports = app;