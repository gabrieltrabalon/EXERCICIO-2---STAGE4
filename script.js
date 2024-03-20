/*

Nesse desafio você irá criar uma lista de estudantes e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- Crie uma função que irá calcular a média das notas de cada aluno;
- Supondo que a média, para esse concurso é 7, verifique se cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

let students = [
  {
    name: "Gabriel",
    n1:9.5,
    n2:8.3  
  },
  {
    name: "Varcileu",
    n1:8.5,
    n2:8.7  
  },
  {
    name: "Janeth",
    n1:6.5,
    n2:4.3  
  },
  {
    name: "Camila",
    n1:7.5,
    n2:9.5 
  },
  {
    name: "Tiago",
    n1:5.5,
    n2:3.2  
  }
]

function calculateMedia(n1,n2) {
  return ((n1 + n2) / 2).toFixed(1)
}

for(let position of students) {

  if(calculateMedia(position.n1,position.n2) >= 7) {

      alert(`A média do(a) aluno(a) ${position.name} é: ${calculateMedia(position.n1,position.n2)} \n
      Parabéns, ${position.name}! Você foi aprovado(a)!`)
      
  } else {
      alert(`A média do(a) aluno(a) ${position.name} é: ${calculateMedia(position.n1,position.n2)} \n
      Não foi dessa vez, ${position.name}! Tente novamente!`)
  }
}