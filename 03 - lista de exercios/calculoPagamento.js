/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o 
preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida 
e efetuar o cálculo adequado.

Código Condição de pagamento:
1 - À vista Débito, recebe 10% de desconto;               'aVistaDebito'
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;   'aVistaDinheiro' | 'aVistaPIX'
3 - Em duas vezes, preço normal de etiqueta sem juros;    'duasVezes'
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;  'parcelado'
*/

let taxaJuros = 0.0;
let taxaDesconto = 0.0;
let precoEtiqueta = 100.0;
let condicaoPagamento = 4;
let txtCondicaoPagamento = "";
//CALCULOS

// Inicializações
let vlrJurosAPagar = 0.0;
let vlrDesconto = 0.0;
let valorFinalAPagar = 0.0;

if ((condicaoPagamento == 1)) {
   taxaDesconto = 0.1;
   txtCondicaoPagamento = "À vista Débito 10% de desconto";
} else if ((condicaoPagamento == 2)) {
   taxaDesconto = 0.15;
   txtCondicaoPagamento = "À vista no Dinheiro ou PIX 15% de desconto";
} else if ((condicaoPagamento == 3)) {
   txtCondicaoPagamento = "2x sem Juros";
} else if ((condicaoPagamento == 4)) {
   taxaJuros = 0.1;
   txtCondicaoPagamento = "Parcelado c/ Juros 10%";
}

vlrJurosAPagar = precoEtiqueta * taxaJuros;
vlrDesconto = precoEtiqueta * taxaDesconto;

valorFinalAPagar = precoEtiqueta + vlrJurosAPagar - vlrDesconto;

//Imprimir resultado
console.log("Preco etiqueta        = " + precoEtiqueta.toFixed(2));
console.log("Condição de Pagamento = " + txtCondicaoPagamento);
if (condicaoPagamento == 1 || condicaoPagamento == 2) {
   console.log("Taxa de Desconto  %   = " + (taxaDesconto*100).toFixed(2));
   console.log("Valor do Desconto R$  = " + vlrDesconto.toFixed(2));
} else if ((condicaoPagamento == 4)) {
   console.log("Taxa de Juros    %    = " + (taxaJuros*100).toFixed(2));
   console.log("Valor de Juros   R$   = " + vlrJurosAPagar.toFixed(2));
}
console.log("Valor a pagar      R$ = " + valorFinalAPagar.toFixed(2));
