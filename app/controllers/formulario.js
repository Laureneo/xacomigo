module.exports.formagendamento = function (application, req, res) {
    res.render("formulario/formagendamento");
}

module.exports.formcertidao = function (application, req, res) {
    res.render("formulario/formcertidao");
}

module.exports.formmei = function(application, req, res){
    res.render("formulario/formmei")
}


//Funcão de salvar dados do formulario de agendamento
module.exports.formulario_agendamento_salvar = function (application, req, res) {

    var dadosAgendamento = req.body
    console.log(dadosAgendamento.nome)

    var connection = application.config.dbConnection()
    var agendamentoModel = new application.app.models.AgendamentoDAO(connection)

    agendamentoModel.salvarAgendamento(dadosAgendamento, function (error, result) {
        res.redirect("https://upnid.com/checkout/ll7xv?vi=92202742")//Abre a página de pagamento
        //res.send(dadosAgendamento)
    })

}

//Funcão de salvar dados do formulario de certidoes
module.exports.formulario_certidao_salvar = function (application, req, res) {

    var dadosCertidao = req.body

    var connection = application.config.dbConnection()
    var certidaoModel = new application.app.models.CertidaoDAO(connection)

    certidaoModel.salvarCertidao(dadosCertidao, function (error, result) {
        res.redirect("https://upnid.com/checkout/pzmdv?vi=92202742")//Abre a página de pagamento
        //res.send(dadosCertidao)
    })

}


//Funcão de salvar dados do formulario do MEI
module.exports.formulario_mei_salvar = function(application, req, res){
    var dadosMei = req.body
    console.log(dadosMei)

    var connection = application.config.dbConnection()
    var meiModel = new application.app.models.MeiDAO(connection)

    meiModel.salvarMei(dadosMei, function(error, result){
        res.redirect("https://xacomigo.net.br/retornoMei")//Abre a página de pagamento
        //res.send(dadosMei)
    })
}