//TP 1.8
//Crie uma função chamada calcularTotalItens que receba um array de objetos representando itens de um carrinho de compras, onde cada objeto tem uma propriedade quantidade e precoUnitario. A função deve retornar o valor total dos itens no carrinho.

function calcularTotalItens(itens) {
  var total = 0;
  for (var i = 0; i < itens.length; i++) {
      var item = itens[i];
      total += item.quantidade * item.precoUnitario;
  }
  return total;
}


var itens = [ 
  { nome: "Laptop", quantidade: 1, precoUnitario: 1000 }, 
  { nome: "Tablet", quantidade: 2, precoUnitario: 400 }, 
  { nome: "Smartphone", quantidade: 1, precoUnitario: 1500 } 
];

console.log(calcularTotalItens(itens));

