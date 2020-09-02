function CertidaoDAO(connection){
    this._connection = connection
}

CertidaoDAO.prototype.getCertidao = function(callback){
    this._connection.query('select * from certidoes', callback)//Seleciona a tabela certidoes
}

CertidaoDAO.prototype.getConsultaCertidao = function(cpf, callback){
    this._connection.query('select * from certidoes where id = 1', cpf.cpf, callback);//Consulta por CPF na tabela certidao
}

CertidaoDAO.prototype.salvarCertidao = function(dadosCertidao, callback){

    console.log(dadosCertidao)
  
    //Recupera os dados do formulario e insere nas respectivas variáveis
    var nome = dadosCertidao.nome
    var sexo = dadosCertidao.sexo
    var cpf = dadosCertidao.cpf
    var rg = dadosCertidao.rg
    var pai = dadosCertidao.pai
    var mae = dadosCertidao.mae
    var nascimento = dadosCertidao.nascimento
    var endereco = dadosCertidao.endereco
    var numero = dadosCertidao.numero
    var cidade = dadosCertidao.cidade
    var estado = dadosCertidao.estado
    var telefone = dadosCertidao.telefone
    var email = dadosCertidao.email
    //var periodo = dadosCertidao.periodo
    var tipo_certidao = dadosCertidao.tipo_certidao
    //var mensagem = dadosCertidao.mensagem

    //Comando para salvar as variáveis criadas no banco de dados
    this._connection.query(`INSERT INTO certidoes (nome, sexo, cpf, rg, pai, mae, nascimento, endereco, numero, cidade, estado, telefone, email,  tipo_certidao) 
        VALUES ('${nome}', '${sexo}', '${cpf}', '${rg}', '${pai}', '${mae}', '${nascimento}', '${endereco}', '${numero}', '${cidade}', '${estado}', '${telefone}', '${email}', '${tipo_certidao}')`, 
        dadosCertidao, callback);
    
   //this._connection.query('insert into certidoes set ? ', dadosCertidao, callback)

}

module.exports = function(){
    return CertidaoDAO
}