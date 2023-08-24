


class Juegos {
    constructor(cantidadDescargas, puntuacion, peso) {
        this.cantidadDescargas = cantidadDescargas
        this.puntuacion = puntuacion
        this.peso = peso
        this.iniciada = false
        this.instalado = false
    }
    instalar() {
        if (this.instalado == false) {
            this.instalado = true
            alert(`Instalar el juego con un peso de ${this.peso} `)

        } else {
            alert(`Desinstalar juego`)
            this.instalado = false
        }
    }
    abrir() {
        if (this.iniciada = false && this.instalado) {
            this.iniciada = true
            alert(`Abrir el juego`)

        }
    }
    cerrar() {
        if (this.iniciada && this.instalado) {
            this.iniciada = false
            alert(`Cerrar el juego`)
        }
    }
    juegoInfo() {
        return `
        Descargas: ${this.cantidadDescargas}
        Puntuacion: ${this.puntuacion}
        Peso: ${this.peso}
        `
    }
}


const juego1 = new Juegos('20', '5', '20MB');

juego1.instalar()
juego1.abrir()
juego1.cerrar()
juego1.instalar()

console.log(juego1.juegoInfo())