let dineroVagabundo = prompt('¿Cuánto dinero tienes vagabundo?')

dineroVagabundo = parseInt(dineroVagabundo)

if (dineroVagabundo >= 1 && dineroVagabundo < 2) {
    alert('Solo te alcanza para un boleto')
}
else if (dineroVagabundo >= 2 && dineroVagabundo < 3) {
    alert('Te alcanza para dos boletos')
}
else if (dineroVagabundo >= 3) {
    alert('Te alcanza para 3 boletos')
    alert('Regalas lo que te sobra ' + (dineroVagabundo - 3))
}
else {
    alert('No tienes dinero suficiente')
}