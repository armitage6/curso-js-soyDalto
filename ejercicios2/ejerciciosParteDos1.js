
let free = false

let validarcliente = (time) => {

    let edad = prompt('¿Cuál es tu edad?')

    if (edad >= 18) {
        if (time >= 2 && time < 7 && free == false) {
            alert('la entrada es gratuita desde las 2AM')
            !free

        } else {
            alert(`son las ${time}:00Hs y puedes pasar, pero tienes que pagar la entrada`)
        }
    }

    else {
        alert('No puedes pasar eres menor de edad')
    }


}
validarcliente(5)