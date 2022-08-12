function adicionar(x, y) {
  return x + y;
};

function subtracao(x, y) {
  return x - y;
};

function multiplicacao(x, y) {
  return x * y;
};

function divisao(x, y) {
  return x / y;
};

console.log("-------------- Calculadora --------------")

console.log(adicionar(2, 10));
console.log(subtracao(12, 8));
console.log(multiplicacao(9, 5));
console.log(divisao(8, 7));

console.log(divisao(1, 0));

// calculo quadrado do número

function quadradoDoNumero(x) {
  return multiplicacao(x, x);
};

console.log(quadradoDoNumero(10));

// calculo média

function MediaDeTresNumeros(x, y, z) {
  return (divisao((adicionar(x, y) + z), 3))
};

console.log(MediaDeTresNumeros(8, 32, 64));

// calculo porcentagem

function calculaPorcentagem(x, y) {
  return multiplicacao(x, divisao(y, 100))
}

console.log(calculaPorcentagem(500, 65))

// gerador de porcentagem

function geradorDePorcentagem(x, y) {
  return multiplicacao(divisao(x, y), 100)
}

console.log(geradorDePorcentagem(75, 500)) 