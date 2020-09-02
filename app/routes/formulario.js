module.exports = function(application){
    application.get('/formagendamento', function(req, res){
        application.app.controllers.formulario.formagendamento(application, req, res)
    });

    application.get('/formcertidao', function(req, res){
        application.app.controllers.formulario.formcertidao(application, req, res)
    });

    application.get('/formmei', function(req, res){
        application.app.controllers.formulario.formmei(application, req, res)
    })

    application.post('/dadosagendamento/salvar', function(req, res){        
        application.app.controllers.formulario.formulario_agendamento_salvar(application, req, res)
    });

    application.post('/dadoscertidao/salvar', function(req, res){
        application.app.controllers.formulario.formulario_certidao_salvar(application, req, res)
    });

    application.post('/dadosmei/salvar', function(req, res){
        application.app.controllers.formulario.formulario_mei_salvar(application, req, res)
    })
    
}