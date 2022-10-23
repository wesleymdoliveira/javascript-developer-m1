/**
 * 2) Crie uma classe para representar pessoas.
 * Para cada pessoa teremos os atributos nome, peso e altura.
 * As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
 * Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para
 * dizer o valor do seu IMC;
 */
class Pessoa {
   nome;
   peso;
   altura;

   constructor(nome, peso, altura) {
      this.nome = nome;
      this.peso = peso;
      this.altura = altura;
   }

   calcularIMC() {
      return this.peso / (this.altura * this.altura);
   }

   avaliarIMC() {
      const indiceMC = this.calcularIMC(); 
      if (indiceMC < 18.5) {
         return ("* Abaixo do peso *");
      } else if (indiceMC < 25.0) {
         return ("* Peso normal *");
      } else if (indiceMC < 30.0) {
         return ("* Acima do peso *");
      } else if (indiceMC < 40.0) {
         return ("* Obeso *");
      } else if (indiceMC < 40.0) {
         return ("* Obesidade Grave *");
      }
   }
}

const joao = new Pessoa('João',88,1.75);
console.log('IMC do João = '+ joao.calcularIMC().toFixed(1) + ' Avaliação: ' + joao.avaliarIMC());

const jose = new Pessoa('José',120, 1.85);
console.log('IMC do José = '+ jose.calcularIMC().toFixed(1) + ' Avaliação: ' + jose.avaliarIMC());

const magro = new Pessoa('Magro',50, 1.70);
console.log('IMC do Magro = '+ magro.calcularIMC().toFixed(1) + ' Avaliação: ' + magro.avaliarIMC());

const maria = new Pessoa('Maria',60, 1.70);
console.log('IMC da Maria = '+ maria.calcularIMC().toFixed(1) + ' Avaliação: ' + maria.avaliarIMC());
