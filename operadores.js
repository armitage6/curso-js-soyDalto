// Operadores Aritmeticos

// Los operadores Aritmeticos toman valores numericos (ya sean literaleso variables ) como sus operandos y retornan un valor numerico unico.


let numero1 = 10;

let numero2 = 5;

let resultado = numero1 + numero2;
resultado = numero1 / numero2;
resultado = numero1 * numero2;
resultado = numero1 ** 5;
resultado = numero1 & numero2;
resultado = -numero1;


//Operadores De Asignacion

//Un operador de asignacion asigna un valor operando de la izquierda  basado en el valor del operando de la derecha

let numero = 10;

numero += 5;
numero -= 5;
numero *= 5;
numero /= 5;
//numero %= 5;
numero **= 5;


//Operadores de comparacion

// Los operadores de comparacion comparan dos expresiones y devuelven un valor Boolean que representa la relacion de sus valores

let ejercicio = 23;
let ejercicio2 = 13;
let text = 'texto 1'
let texto2 = 'texto 2'

let resultadoEjercicio = ejercicio == ejercicio2;
resultadoEjercicio = ejercicio != ejercicio2;
resultadoEjercicio = ejercicio === text;
resultadoEjercicio = ejercicio !== text;
resultadoEjercicio = ejercicio > ejercicio2;


// Operadores Lógicos

// Los operadores logicos nos devuelven un resultado a partir de que se cumpla (o no) una condicion, su resultado es booleano, y sus operandos son valores logicos o asimilables a ellos.


let valor = true;
let valor2 = true;

let resultadoValor = valor && valor2; // si las dos son true devuelve true si cualquiera de las dos en false devuelve false
resultadoValor = valor || valor2; //Si cualquiera de las dos es verdadera entonces true, si las dos son false es false
resultadoValor = !valor; //Regresa lo contrario de lo que se devuelve


let num1 = 12;
let num2 = 24;
let num3 = 25;
let num5 = 91;

let afirmacion1 = num1 > num2;
let afirmacion2 = num1 != num2;


let op = (num1 < num2 || num2 < num3) && (!(num1 != num2) && num5 != num3)


//alert(afirmacion1 && afirmacion2)
//alert(afirmacion1 || afirmacion2)
//alert(!afirmacion1)

alert(op)