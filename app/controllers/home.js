module.exports.index = function(application, req, res){
    res.render("home/index");
}

module.exports.about = function(application, req, res){
    res.render("home/about");
}

module.exports.agendamento = function(application, req, res){
    res.render("home/agendamento");
}

module.exports.certidao = function(application, req, res){
    res.render("home/certidao");
}

module.exports.contact = function(application, req, res){
    res.render("home/contact");
}

module.exports.mei = function(application, req, res){
    res.render("home/mei");
}

module.exports.passoapasso = function(application, req, res){
    res.render("home/passoapasso");
}

module.exports.services = function(application, req, res){
    res.render("home/services")
}

module.exports.politica_de_privacidade = function(application, req, res){
    res.render("home/politica_de_privacidade")
}

module.exports.termos_de_uso = function(application, req, res){
    res.render("home/termos_de_uso")
}