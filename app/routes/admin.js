module.exports = function(application){

    application.get('/administrador', function(req, res){
        application.app.controllers.admin.administrador(application, req, res)
    });

    application.get('/consulta', function(req, res){

        application.app.controllers.admin.consulta(application, req, res)

    });

    application.get('/agradecimento', function(req, res){
        application.app.controllers.admin.agradecimento(application, req, res)
    });

    application.get('resultado_pesquisa', function(req, res){
        application.app.controllers.admin.resultado_pesquisa(application, req, res)
    });

    application.post('/autenticar', function(req,res){
        //res.send('Autenticando')
        application.app.controllers.admin.autenticar(application, req, res)
    })

    //Pesquisa Agendamento
    application.post('/resultado_pesquisa_agendamento', function(req, res){
        application.app.controllers.admin.resultado_pesquisa_agendamento(application, req, res)
    })

    //Pesquisa Certidões
    application.post('/resultado_pesquisa_certidao', function(req, res){
        application.app.controllers.admin.resultado_pesquisa_certidao(application, req, res)
    })

    //Pesquisa Mei
    application.post('/resultado_pesquisa_mei', function(req, res){
        application.app.controllers.admin.resultado_pesquisa_mei(application, req, res)
    })

}