/**
 * 1) Crie uma classe para representar carros.
 * Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
 * Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor
 * gasto em reais para realizar este percurso.
 *
 */
class Carro {
   marca;
   cor;
   gastoMedioCombustivelPorKm;

   constructor(marca, cor, gastoMedioCombustivelPorKm) {
      this.marca = marca;
      this.cor = cor;
      this.gastoMedioCombustivelPorKm = gastoMedioCombustivelPorKm;
   }

   calculaGastoViagem(distanciaKm, valorCombustivel) {
      return distanciaKm * this.gastoMedioCombustivelPorKm * valorCombustivel;
   }
}

const sandero = new Carro("Renault", "Branco", 1 / 15);
console.log(
   "Gasto da viagem com o Sandero: R$ " + sandero.calculaGastoViagem(400, 4.9)
);

const cruze = new Carro("Chevrolet", "Branco", 1 / 8);
console.log(
   "Gasto da viagem com o Cruze  : R$ " + cruze.calculaGastoViagem(400, 4.9)
);
