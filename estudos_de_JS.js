// OPERADORES

// + soma
// - subtração
// * multiplicação
// / divisão
//  % módulo
// ++ incremento
// -- decremento

const valor1 = 10;
const valor2 = 2;
console.log("Soma", valor1 + valor2);
console.log("Subtração", valor1 - valor2);
console.log("Multiplicação", valor1 * valor2);
console.log("Divisaão", valor1 / valor2);

console.log("======================");
//CONDICIONAIS

// if // else
const idade = 25;
if (idade > 18) {
	console.log("Maior que 18");
} else {
	console.lg("Menor que 18");
}
console.log("======================");
// switch
const nota = 9;

switch (nota) {
	case nota < 5:
		console.log("Abaixo da média");
		break;

	case nota > 5:
		console.log("Na média");
		break;

	default:
		console.log("Acima da média");
}
console.log("======================");
// ternario

const nota2 = 6;

nota > 5 ? console.log("aprovado") : console.log("reprovado"); // ? = if
//: = else
console.log("======================");

// OPERADORES LÓGICOS

// && AND
// || OR
// == === IGUAL
// != ou !=== DIFERENTE
// > Maior que
// < Menor que

//  DECLARAÇÃO  DE VARIÁVEIS

// let (que pode ser alterada)
// const (não pode ser alterada)

// TIPOS DE VARIÁVEIS

// boolean = true ou false
// null = nulo
// undefined = não definido
// number = 59 ou 6.666
// string = 'Vasco'

// LAÇOS DE REPETIÇÕES (loops)

//for  while
for (let i = 1; i <= 10; i++) {
	if (i % 2 === 0) {
		console.log(`${i} x 5 = ${i * 5}`);
	}
}

let x = 1;
while (x < 10) {
	console.log(`${x} x 5 = ${x * 5}`);
	x++;
}

console.log("======================");
// forEach
// const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//  valores.forEach((value) => {
//  	console.log(`${value} x 5 = ${value * 5}`);
//  });

console.log("======================");
//ARROW FUNCTIONS
const subtrair = (num1, num2) => num1 - num2;
const resultadoSub = subtrair(10, 5);
console.log(resultadoSub);

const somar = (num1, num2) => num1 + num2;
const resultadoSoma = somar(10, 5);
console.log(resultadoSoma);

console.log("======================");
// ARRAYS

//array de string
const armas = ["glock", "ak-47", "fal", "tec-9"];

//array objeto
const gunStore = [
	{ name: "glock-18", brand: "glock", type: 'pistol', price: 100 }, //indice 0
	{ name: "ak-47", brand: "kalashinikov", type: 'rifle', price: 500 }, //indice 1
	{ name: "HK-g3", brand: "Heclker & Koch", type: 'pistol', price: 90 }, //indice 2
	{ name: "P365", brand: "Sig Sauer", type: 'rifle', price: 200 }, //indice 3
];

//metodo push
gunStore.push({
	name: "fal", brand: "FN", type: 'rifle', price: 700 // indice 4
});
console.log(gunStore[1].name); // mostra apenas o indice especificado

console.log("======================");
//metodo filter
const priceFilter = gunStore.filter(priceGun => priceGun.price >= 90)
console.table(priceFilter); // filtrou todos os preços maiores que 90

console.log("======================");
//find
const fuzisFiltrado = gunStore.find(typeGun => typeGun.type === 'rifle');
console.table(fuzisFiltrado); // achou todos os que são do tipo rifle

console.log("======================");
//findIndex
const fuzisFiltradoIndex = gunStore.findIndex(typeGun => typeGun.type === 'rifle');
console.table(fuzisFiltradoIndex); // achou todos os indices dos  que são do tipo rifle

console.log("======================");
//map
const valores2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultado = valores2.map((value) => {
	return value * 5;
});
console.log(resultado);

console.log("======================");
//reduce
const gunPrice = gunStore.reduce((acc, prices) => {
	return acc + prices.price;
}, 0); // calculou todos os preços

console.log(gunPrice)
