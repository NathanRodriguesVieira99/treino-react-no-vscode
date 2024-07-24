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
console.log("======================");
let x = 1;
while (x < 10) {
	console.log(`${x} x 5 = ${x * 5}`);
	x++;
}
console.log("======================");
// forEach
const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
// valores.forEach((value) => {
// 	console.log(`${value} x 5 = ${value * 5}`);
// });
console.log("======================");
//map
const valores2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultado = valores2.map((value) => {
	return value * 5;
});

console.log(resultado);
