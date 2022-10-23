/*
    2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar 
    uma indicação sobre a condição de peso de uma pessoa adulta. 

    Formula do IMC:
    IMC = peso / (altura * altura)

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo 
    com a tabela abaixo.

    IMC em adultos Condição:
    - Abaixo de 18.5 Abaixo do peso;
    - Entre 18.5 e 25 Peso normal;
    - Entre 25 e 30 Acima do peso;
    - Entre 30 e 40 Obeso;
    - Acima de 40 Obsesidade Grave;
*/

let pesoKg = 100;
let altura = 1.85;

//Calculo
let indiceMC = pesoKg / (altura * altura);

//Avaliar condição
console.log('Peso (kg)   = '+pesoKg.toFixed(2));
console.log('Altura (m)  = '+altura.toFixed(2));
console.log('IMC         = '+indiceMC.toFixed(1));

console.log('Avaliação IMC');
if (indiceMC < 18.5) {
   console.log('* Abaixo do peso *');
} else if (indiceMC < 25.0) {
    console.log('* Peso normal *');
} else if (indiceMC < 30.0) {
    console.log('* Acima do peso *');
} else if (indiceMC < 40.0) {
    console.log('* Obeso *');
} else if (indiceMC < 40.0) {
    console.log('* Obesidade Grave *');
}
