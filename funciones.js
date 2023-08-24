// la funcion 


function saludar() {
    alert('hola')
    return 3;
}

//saludar() // si saludar no tiene un return cuando se llama solo tendra un bloque que ejecuta algo, si quieremos que sea algo string, numero, etc hacer un return que retorne algo 



// Le pasamos parametros que pueden ser cualquier valor que nosotros necesitemos dependiendo de lo que queramos que haga nuestra funcion
function suma(n1, n2) {
    let res = n1 + n2
    return res
}

console.log(suma(2, 6))
console.log(suma(2, 50))
console.log(suma(6, 70))