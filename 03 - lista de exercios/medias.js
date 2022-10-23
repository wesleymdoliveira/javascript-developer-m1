/* 
    1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da 
    faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

    Média = (nota 1 + nota 2 + nota 3) / 3;

    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;
*/
let nota1 = 5;
let nota2 = 6;
let nota3 = 4;

//Cálculos
let somaNotas = nota1 + nota2 + nota3;
let media = somaNotas / 3;

//Verifica classificação
console.log('Nota 1: ' + nota1);
console.log('Nota 2: ' + nota2);
console.log('Nota 3: ' + nota3);
console.log('Media : ' + media.toFixed(1));
console.log('Situação final: ')
if (media>=7.0) {
    console.log('>    Aprovado  >');
} else if (media >= 5.0) {
    console.log('!  Recuperação !');
} else {
    console.log('X   Reprovado  X');
}