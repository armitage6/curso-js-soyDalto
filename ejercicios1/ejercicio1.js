let dineroCofla = prompt('Cuanto dinero tienes Cofla?');
let dineroRoberto = prompt('¿Cuanto dinero tienes Roberto?')
let dineroPedro = prompt('¿Cuanto dinero tienes Pedro?')

dineroCofla = parseInt(dineroCofla);


if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert('comprate el helado de agua Cofla');
    alert('y te sobran ' + (dineroCofla - 0.6));
}
else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert('Comprate el helado de crema Cofla');
    alert('y te sobran ' + (dineroCofla - 1));
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert('Comprate el helado de heladix Cofla');
    alert('y te sobran ' + (dineroCofla - 1.7));
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert('Comprate el helado de heladovich Cofla');
    alert('y te sobran ' + (dineroCofla - 1.7));
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert('Comprate el helado de helardo Cofla');
    alert('y te sobran ' + (dineroCofla - 1.8));
}
else if (dineroCofla >= 2.9) {
    alert('Comprate el helado con confites o pote Cofla');
    alert('y te sobran ' + (dineroCofla - 2.9));
} else {
    alert('No te alcanza Roberto');
}

if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert('comprate el helado de agua Roberto')
}
else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert('Comprate el helado de crema Roberto')
}
else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
    alert('Comprate el helado de heladix Roberto')
}
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
    alert('Comprate el helado de heladovich Roberto')
}
else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
    alert('Comprate el helado de helardo Roberto')
}
else if (dineroRoberto >= 2.9) {
    alert('Comprate el helado con confites o pote Roberto')
} else {
    alert('No te alcanza Roberto')
}


if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert('comprate el helado de agua Pedro')
}
else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    alert('Comprate el helado de crema Pedro')
}
else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
    alert('Comprate el helado de heladix Pedro')
}
else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
    alert('Comprate el helado de heladovich Pedro')
}
else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
    alert('Comprate el helado de helardo Pedro')
}
else if (dineroPedro >= 2.9) {
    alert('Comprate el helado con confites o pote Pedro')
} else {
    alert('No te alcanza Pedro')
}

