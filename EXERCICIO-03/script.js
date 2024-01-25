// 3. Crie um cadastro de pessoas onde o usuário informe o nome, idade
// e se está trabalhando ou não, se a pessoa estiver trabalhando
// pergunte para ele o salário que está ganhando. Para cada pessoa

// cadastrada, pergunte ao usuário se ele deseja continuar
// cadastrando ou não. No final, mostre as pessoas que estão
// desempregadas, as pessoas que estão empregadas separadas
// pelas que ganham mais que 2500 e menos que 2500.

// Exemplo de resultado:
// Pessoas desempregadas:
// Nome: Alessandro, Idade: 28
// Nome: Alessandro, Idade: 28

// Pessoas empregadas com salários menores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 1500
// Nome: Alessandro, Idade: 28, Salário: 2400

// Pessoas empregadas com salários maiores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 2700
// Nome: Alessandro, Idade: 28, Salário: 3000

let cadastroPessoa = [];

do {
    let nome = prompt("Digite o nome:");
    let idade = Number(prompt("Digite a idade:"));
    let trabalho = confirm ("Trabalha atualmente?");

    if (trabalho) {
        let salario = Number(prompt("Digite o salário:"));
        cadastroPessoa.push({nome, idade, trabalho, salario:Number(salario)});

    } else {
        cadastroPessoa.push({nome, idade, trabalho});
    }
    
    prosseguir = confirm("Desenja continuar cadastrando?");
} while (prosseguir)

let semTrabalho = cadastroPessoa.filter(pessoa => !pessoa.trabalho);

let trabalhoMaiorSalario = cadastroPessoa.filter(pessoa => pessoa.trabalho && pessoa.salario >= 2500);
let trabalhoMenorSalario = cadastroPessoa.filter(pessoa => pessoa.trabalho && pessoa.salario < 2500);

console.log("Pessoas desempregadas:");
semTrabalho.forEach(pessoa => {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade},`);
});

console.log("Pessoas empregadas com salários menores que 2500:");
trabalhoMenorSalario.forEach(pessoa => {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salário: ${pessoa.salario}`);
});

console.log("Pessoas empregadas com salários maiores que 2500:");
trabalhoMaiorSalario.forEach(pessoa => {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salário: ${pessoa.salario}`);
});