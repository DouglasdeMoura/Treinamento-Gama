function Pessoa(nome, idade, cpf) {
  this.nome = nome;
  this.idade = idade;
  this.cpf = cpf;
}

function Professor(nome, idade, cpf, instituicao, materia, periodo) {
  Pessoa.call(this, nome, idade, cpf);
  this.instituicao = instituicao;
  this.materia = materia;
  this.periodo = periodo;
}

diego = new Professor('Diego', 26, '000.000.000-00', 'Gama', 'JavaScript', 'noturno');
console.log(diego);
