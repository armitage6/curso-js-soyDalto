// Paradigma es una de las tantas formas de crear soluciones
// La clase es como una fabrica de objeto, le decimos que cree este objeto y las cosas que pueden hacer.
// las clases crean objetos y los objetos son los resultado de las clases
//el atributo son las caracteristicas del objeto
//el metodo es lo que puede hacer nuestro objeto
//El constructor, es una particularidad de las clases que hacen que construyamos la propiedad de los objetos
// cuando esta lista decimos que esta instanciada 

class animal {
    constructor(especie, edad, color) {
        this.especie = especie; //this es el objeto quie voy a crear, el atributo es especie
        this.edad = edad;
        this.color = color;
        this.informacion = `soy ${this.especie}, tengo ${this.edad} y soy de olor ${this.color}`
    }
    //Los metodo sson las acciones que podemos hacer, los metodos se crean dentro de la clase
    verInfo = () => {
        console.log(this.info)

    }

}





const perro = new animal('perro', 5, 'rojo'); //El new dice que vamos a intanciar(crear ) una clase
// Aca decir this es como decir perro, y luego se puede leer como perro.color = rojo


perro.verInfo()
