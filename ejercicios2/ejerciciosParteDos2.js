let cantidad = prompt('¿Cuantos alumnos son?')

let alumnosTotales = []


for (let i = 0; i < cantidad; i++) {
    alumnosTotales[i] = [prompt('Nombre del alumno' + (i + 1)), 0]
    console.log(alumnosTotales)
}

const tomarAsistencia = (nombre, p) => {
    let presencia = prompt(nombre);
    if (presencia == 'p' || presencia == 'P') {
        alumnosTotales[p][1]++
    }
}


for (let i = 0; i < 30; i++) {
    for (let alumno in alumnosTotales) {
        tomarAsistencia(alumnosTotales[alumno][0], alumno)
    }
}


for (let alumno in alumnosTotales) {
    let resultado = `${alumnosTotales[alumno][0]}: <br>
    _________Presentes: ${alumnosTotales[alumno][1]} <br>
    _________Ausencias: ${3 - alumnosTotales[alumno][1]}
    `
    if (30 - alumnosTotales[alumno][1] > 18) {
        resultado += 'REPROBADO POR INASISTENCIA'
    } else {
        resultado += '<br>'
    }
}


// matriz = array
// matriz bidimensional = array dentro de otro array