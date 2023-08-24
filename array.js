// Los array son objetos

//Sirve para agrupar datos

let frutas = ['banana', 'manzana', 'pera', 5, 9, 'pedro'];
// Se puede acceder a la posicion con frutas[n] y nos dara el valor que tiene el array en esa posicion 



// Array asociativo 

let pc = {
    nombre: 'DaltoPC',
    procesador: 'Intel Core I7',
    ram: '16GB',
    spacio: '1TB'
}

let pc2 = ['DaltoPC', 'Intel core I7', '16GB', '1TB']

// En pc se accede atraves de pc['nombre'] para que muestre el valor 

let nombre = pc['nombre']


////////////////////////////////////////////////

//Bucles e Iteracion 

let numeroParaSumar = 0

//if pregunta solo 1 vez 
if (numeroParaSumar < 10) {
    numeroParaSumar++
}

// while pregunta siempre si la condicion se cumple
while (numeroParaSumar < 10) {
    numeroParaSumar++
}

// do  dice lo que debe hacer y luego se ejecuta la condicion while

// El do por lo menos ejecuta el codigo 1 vez 
do {
    numeroParaSumar++;
}
while (numeroParaSumar < 8)


// El break detiene la ejecucion 

while (numeroParaSumar < 100) {
    numeroParaSumar++
    if (numeroParaSumar == 10) {
        break;
    }
}



///////////////////////////////////////////////

// el while y el do while son bucles no determinados porque se ejecutan siempre que se cumpla la funcion el for es un bucle determinador porque determinamos las veces que se repite el bucle

// for es un bucle 
//partes del for declaracion e inicializacion, condicion, aumento - decremento 
// continue salta la iteracion y salta a la siguiente
for (let i = 0; i < 6; i++) {

    if (i == 3) {
        continue;
    }
    //console.log(i)
}


// for in devuelve la posicion del array 
// se usa para recorrer objeto reconocer sus posiciones y operar con esos objetos
let animales = ['gato', 'perro', 'rex']

for (let animal in animales) {
    //console.log(animal, 'en in ')
    // para mostrar los elementos puede hacer con animales[animal]
}


//for of nos muestra el valor directamente 
for (let animal of animales) {
    //console.log(animal, 'en of')
}

//
let array1 = ['maria', 'josefa', 'roberta'];
let array2 = ['pedro', 'marcelo', array1, 'josefina'];

forRancio:
for (let array in array2) {
    if (array == 2) {
        for (let array of array1) {

            console.log(array)
            break forRancio;
        }
    } else {
        console.log(array2[array])
    }
}