function ConsultaDAO(connection){
    this._connection = connection
}

ConsultaDAO.prototype.getConsultaAgendamento = function (dadosConsulta, callback) {
    
    var cpf = dadosConsulta.cpf    
    var consulta_agendamento = this._connection.query(`select * from agendamento where cpf = '${cpf}'`, callback);
    
}

ConsultaDAO.prototype.getConsultaCertidoes = function (dadosConsulta, callback) {
    
    var cpf = dadosConsulta.cpf
    this._connection.query(`select * from certidoes where cpf = '${cpf}'`, callback);//Consulta por CPF na tabela mei
    
}

ConsultaDAO.prototype.getConsultaMei = function (dadosConsulta, callback) {
    
    var cpf = dadosConsulta.cpf    
    this._connection.query(`select * from mei where cpf = '${cpf}'`, callback);//Consulta por CPF na tabela mei
    
}

module.exports = function(){
    return ConsultaDAO
}