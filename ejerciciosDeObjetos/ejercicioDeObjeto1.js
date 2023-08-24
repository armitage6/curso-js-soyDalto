class Celular {
    constructor(color, peso, resolucion, camara, ram) {
        this.color = color
        this.peso = peso
        this.resolucionDePantalla = resolucion
        this.resolucionDeCamara = camara
        this.memoriaRam = ram
        this.encendido = false;
    }
    presionarBotonEncendido() {
        if (this.encendido == false) {
            alert(`celular ${this.color} prendido`)
            this.encendido = true
        } else {
            alert('celular apagado ')
            this.encendido - false
        }
    }
    reiniciar() {
        if (this.encendido == true) {
            alert('reiniciando celular');
        } else {
            alert('el celular está pagado')
        }
    }
    tomarFotos() {
        alert(`Foto tomada en una resolucion de: ${this.resolucionDeCamara}`)
    }
    grabarVideo() {
        alert(`Grabando video en ${this.resolucionDeCamara}`)
    }
    mostrarInfo() {
        return `
        Color: ${this.color}
        Peso: ${this.peso}
        Tamaño: ${this.resolucionDePantalla}
        Resolución de Cámara: ${this.resolucionDeCamara}
        Resolución de Video: ${this.resolucionDeCamara}
        Memoria Ram: ${this.memoriaRam}
        `
    }
}


class CelularAlt extends Celular {
    constructor(color, peso, resolucion, camara, ram, camaraExtra) {
        super(color, peso, resolucion, camara, ram)
        this.camaraExtra = camaraExtra;

    }
    camaraSuperLenta() {
        if (this.encendido) {
            alert('Estaba grabando en camara lenta')
        } else {
            alert('Esta apagado')
        }
    }
    reonocimientoFacial() {
        if (this.encendido) {
            alert('Vamos a iniciar un reconocimiento facial')
        } else {
            alert('Esta apagado')
        }
    }
    infoAltaGama() {
        return this.mostrarInfo() + `Resoluciona de camara extra: ${this.camaraExtra}`
    }

}






const celular1 = new Celular('rojo', '150g', '5', 'full hd', '2GB');
const celular2 = new Celular('negro', '120g', '7', ' hd', '4GB');
const celular3 = new Celular('amarillo', '130g', '10', 'full hd', '8GB');

const celular4 = new CelularAlt('naranjo', '160g', '10', 'full hd', '8GB', 'hd');
const celular5 = new CelularAlt('purpura', '110g', '10', 'full hd', '64GB', 'full hd');


// celular1.presionarBotonEncendido();
// celular1.grabarVideo();
// celular1.tomarFotos();
// celular1.reiniciar();
// celular1.presionarBotonEncendido();

celular4.presionarBotonEncendido()
celular4.camaraSuperLenta();
celular4.reonocimientoFacial();
console.log(celular4.infoAltaGama())

celular1.mostrarInfo();
celular2.mostrarInfo();
celular3.mostrarInfo();