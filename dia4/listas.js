let alunos = [
  {nome: 'Felipe M.', sexo: 'M', idade: 13},
  {nome: 'Luiza A.', sexo: 'F', idade: 14},
  {nome: 'Marcos T.', sexo: 'M', idade: 14},
  {nome: 'Bianca B.', sexo: 'F', idade: 13},
  {nome: 'Rogério R.', sexo: 'M', idade: 15},
];

// Listar todos os nomes
alunos.forEach((aluno) => {
  return aluno.nome;
});

// dobrar a idade
alunos.map((aluno) => { // O método map() altera o array
  aluno.idade = aluno.idade * 2;
  return alunos;
});

// Filtrar somente para o sexo F
alunos.filter((aluno) => {
  if ('F' === aluno.sexo) {
    return aluno;
  }
});

// Encontrar um registro (Bianca B.)
alunos.find((aluno) => {
  if ('Bianca B.' === aluno.nome) {
    return aluno;
  }
});

// Verificar se TODOS atendem critério (idade > 14)
alunos.every((aluno) => {
  return aluno.idade > 14;
});

// Verificar se ALGUM atende critério (idade > 18)
alunos.some((aluno) => {
  return aluno.idade > 18;
});
