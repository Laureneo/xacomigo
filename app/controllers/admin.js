module.exports.administrador = function(application, req, res){
    res.render("admin/administrador");
}

module.exports.consulta = function(application, req, res){
    res.render("admin/consulta");
}

module.exports.agradecimento = function(application, req, res){
    res.render("admin/agradecimento");
}

module.exports.autenticar = function(application, req, res){

    var dadosForm = req.body

    var connection = application.config.dbConnection()
    var UsuariosDAO = new application.app.models.UsuariosDAO(connection)
    
    UsuariosDAO.autenticar(dadosForm, req, res)

}

//Pesquisa Agendamento
module.exports.resultado_pesquisa_agendamento = function(application, req, res){

    var connection = application.config.dbConnection()
    var consultaModel = new application.app.models.ConsultaDAO(connection)

    var dadosConsulta = req.body

    consultaModel.getConsultaAgendamento(dadosConsulta, function(error, result){
        res.render("admin/resultado_pesquisa", { resultado_pesquisa : result })
        console.log("Consulta Agendamento: ")
        console.log(result)
    })

}

//Pesquisa Certidoes
module.exports.resultado_pesquisa_certidao = function(application, req, res){

    var connection = application.config.dbConnection()
    var consultaModel = new application.app.models.ConsultaDAO(connection)

    var dadosConsulta = req.body
    
    consultaModel.getConsultaCertidoes(dadosConsulta, function(error, result){
        res.render("admin/resultado_pesquisa", { resultado_pesquisa : result })
        console.log(result)
    })

}

module.exports.resultado_pesquisa_mei = function(application, req, res){

    var connection = application.config.dbConnection()
    var consultaModel = new application.app.models.ConsultaDAO(connection)

    var dadosConsulta = req.body    

    consultaModel.getConsultaMei(dadosConsulta, function(error, result){
        res.render("admin/resultado_pesquisa", { resultado_pesquisa : result })
        console.log(result)
    })
}


module.exports.resultado_pesquisa_mei = function(application, req, res){

    var connection = application.config.dbConnection()
    var consultaModel = new application.app.models.ConsultaDAO(connection)

    var dadosConsulta = req.body    

    consultaModel.getConsultaMei(dadosConsulta, function(error, result){
        res.render("admin/resultado_pesquisa", { resultado_pesquisa : result })
        console.log(result)
    })
}