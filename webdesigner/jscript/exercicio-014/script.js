//Sistema Webdesign
//Armazenar a lista de alunos do curso de webdesign e mostrar na tela.

//Quais os dados?
//Alunos: Nome e Idade;

let alunos = []

//Quais são as ações/funções/métodos/etapas/passos

//1. Pegar os dados do usuário;
//2. Salvar os dados do usuário;
//3. Exibir os dados na tela;

function pegarDados() {
    let nome = prompt('Escreva o nome')
    let idade = prompt('Digite a idade')
    //Criar um objeto novoAluno com nome e idade
    let novoAluno = {
        nome: nome,
        age: idade
    }
//Adicionar o objeto novoAluno no array alunos (lista principal)
    alunos.push(novoAluno)

//imprimir na tela do console a lista de alunos
console.log(alunos);

}
  

