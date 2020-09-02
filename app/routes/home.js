module.exports = function(application){
    application.get('/', function(req, res){
        application.app.controllers.home.index(application, req, res)
    });
	
	application.get('/index', function(req, res){
        application.app.controllers.home.index(application, req, res)
    });
	
	application.get('/about', function(req, res){
        application.app.controllers.home.about(application, req, res)        
    });
	
	application.get('/agendamento', function(req, res){
        application.app.controllers.home.agendamento(application, req, res)
    });
	
	application.get('/certidao', function(req, res){
        application.app.controllers.home.certidao(application, req, res)
    });
	
	application.get('/contact', function(req, res){
        application.app.controllers.home.contact(application, req, res)
    });
	
	application.get('/mei', function(req, res){
        application.app.controllers.home.mei(application, req, res)
    });
	
	application.get('/passoapasso', function(req, res){
        application.app.controllers.home.passoapasso(application, req, res)
    });

    application.get('/services', function(req, res){
        application.app.controllers.home.services(application, req, res)
    })

    application.get('/politica_de_privacidade', function(req, res){
        application.app.controllers.home.politica_de_privacidade(application, req, res)
    })
    
    application.get('/termos_de_uso', function(req, res){
        application.app.controllers.home.termos_de_uso(application, req, res)
    })
}