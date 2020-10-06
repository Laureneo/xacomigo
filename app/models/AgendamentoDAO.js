function AgendamentoDAO(connection){
    this._connection = connection
}

AgendamentoDAO.prototype.getAgendamento = function(callback){
    //console.log(callback)
    this._connection.query('select * from agendamento', callback)//Seleciona a tabela agendamento
}

AgendamentoDAO.prototype.getConsultaAgendamento = function(cpf, callback){
    this._connection.query('select * from agendamento where id = 1', cpf.cpf, callback);//Consulta por CPF na tabela agendamento
}

AgendamentoDAO.prototype.salvarAgendamento = function(dadosAgendamento, callback){
  
    //Recupera os dados do formulario e insere nas respectivas variáveis
    var nome = dadosAgendamento.nome
    var sexo = dadosAgendamento.sexo
    var cpf = dadosAgendamento.cpf
    var rg = dadosAgendamento.rg
    var pai = dadosAgendamento.pai
    var mae = dadosAgendamento.mae
    var nascimento = dadosAgendamento.nascimento
    var uf_naturalidade = dadosAgendamento.uf_naturalidade
    var municipio_naturalidade = dadosAgendamento.municipio_naturalidade
    var bairro = dadosAgendamento.bairro
    var estado_civil = dadosAgendamento.estado_civil
    var endereco = dadosAgendamento.endereco
    var numero = dadosAgendamento.numero
    var cidade = dadosAgendamento.cidade
    var estado = dadosAgendamento.estado
    var telefone = dadosAgendamento.telefone
    var email = dadosAgendamento.email
    var periodo = dadosAgendamento.periodo
    var tipo_agendamento = dadosAgendamento.tipo_agendamento
    var cidade_agendamento = dadosAgendamento.cidade_agendamento
    //var mensagem = dadosAgendamento.mensagem

    //Comando para salvar as variáveis criadas no banco de dados
    this._connection.query(`INSERT INTO agendamento (nome, sexo, cpf, rg, pai, mae, nascimento, uf_naturalidade, municipio_naturalidade, bairro, estado_civil, endereco, numero, cidade, estado, telefone, email, periodo, tipo_agendamento, cidade_agendamento) 
        VALUES ('${nome}', '${sexo}', '${cpf}', '${rg}', '${pai}', '${mae}', '${nascimento}', '${uf_naturalidade}', '${municipio_naturalidade}', '${bairro}', '${estado_civil}', '${endereco}', '${numero}', '${cidade}', '${estado}', '${telefone}', '${email}', '${periodo}', '${tipo_agendamento}', '${cidade_agendamento}')`, 
        dadosAgendamento, callback);
    
   //this._connection.query('insert into agendamento set ? ', dadosAgendamento, callback)

}

module.exports = function(){
    return AgendamentoDAO
}