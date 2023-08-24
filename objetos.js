//////////////////////////////Conceptos basicos de POO

// Paradigma es una de las tantas formas de crear soluciones
// La clase es como una fabrica de objeto, le decimos que cree este objeto y las cosas que pueden hacer.
// las clases crean objetos y los objetos son los resultado de las clases
//el atributo son las caracteristicas del objeto
//el metodo es lo que puede hacer nuestro objeto
//El constructor, es una particularidad de las clases que hacen que construyamos la propiedad de los objetos
// cuando esta lista decimos que esta instanciada 

class Animal {
    constructor(especie, edad, color) {
        this.especie = especie; //this es el objeto quie voy a crear, el atributo es especie
        this.edad = edad;
        this.color = color;
        this.informacion = `soy ${this.especie}, tengo ${this.edad} y soy de olor ${this.color}`
    }
    //Los metodo sson las acciones que podemos hacer, los metodos se crean dentro de la clase
    verInfo = () => {
        console.log(this.informacion)

    }


}



// Herencia, es una clase que va a tomar todo lo que puede hacer la otra clase y agregar cosas nuevas 
// esto es polimorfimos que es la capacidad de un objeto de comportarse distinto [por sus propiedades

class Perro extends Animal {
    constructor(especie, edad, color, raza) {
        super(especie, edad, color); // no es necesario poner this ya que hereda las propiedades de la clase anterior
        this.raza = null;
    }
    //Metodo estatico es un metodo que no necesita que la clase se defina para ser creado(intanzar el objeto con las atributos del constructor)
    static ladrar() {
        alert('WaW')
    }
    // metodos getters y setters el primero es para optener un valor y el segundo es para modificarlo
    set modificarRaza(newRaza) {
        this.raza = newRaza
    }

    get getRaza() {
        return this.raza
    }
}



const perro = new Perro('perro', 5, 'rojo', 'doberman'); //El new dice que vamos a intanciar(crear ) una clase
// Aca decir this es como decir perro, y luego se puede leer como perro.color = rojo
const gato = new Animal('gato', 2, 'negro',);
const pajaro = new Animal('pajaro', 1, 'verde',);

perro.verInfo()
perro.modificarRaza = 'Pedro' // Si la propiedad se modifca tambien se modifca la raza


///////////////////////// Caracteristicas de la POO

//abstracción, es reducir lo que mas podamos el objeto, ejemplo si tenemos un perro mostramos todas sus calacteristicas ej: color,ladrido, tamaño, edad, fuerza, etc. lo resumimo para optener lo mas importante del objeto

//Modularidad, es la capacidad de resolver un problema grande separandolo por partes pequeña.
// Encapsulamiento, consiste en que toda la data esten privados para que no se puedan acceder a estos datos de forma sencilla.

//polimorfismo, es la capacidad de un objeto para comportarse distinto por sus propiedades. un perro camina distinto a un gato. un objeto se comportanta distino antte un metodo por a causa de sus propiedades


/////////////////////// otros conceptos del POO


// Herencia, es una clase que va a tomar todo lo que puede hacer la otra clase y agregar cosas nuevas

//Metodo estatico es un metodo que no necesita que la clase se defina para ser creado