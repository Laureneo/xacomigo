function MeiDAO(connection) {
    this._connection = connection
}

MeiDAO.prototype.getMei = function (callback) {
    this._connection.query('select * from mei', callback)//Seleciona a tabela mei
}

MeiDAO.prototype.getConsultaMei = function (cpf, callback) {
    this._connection.query('select * from mei where id = 1', cpf.cpf, callback);//Consulta por CPF na tabela mei
}

MeiDAO.prototype.salvarMei = function (dadosMei, callback) {

    console.log(dadosMei)

    //Recupera os dados do formulario e insere nas respectivas variáveis
    var nome = dadosMei.nome
    var cpf = dadosMei.cpf
    var cnpj = dadosMei.cnpj
    var telefone = dadosMei.telefone
    var email = dadosMei.email
    var tipo_mei = dadosMei.tipo_mei

    //Comando para salvar as variáveis criadas no banco de dados
    this._connection.query(`INSERT INTO mei (nome, cpf, cnpj, telefone, email, tipo_mei) 
        VALUES ('${nome}', '${cpf}', '${cnpj}', '${telefone}', '${email}', '${tipo_mei}')`,
        dadosMei, callback);

}

module.exports = function () {
    return MeiDAO
}