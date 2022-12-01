const passwSelect = () => {
    let firstSelect = document.querySelector('#select-1').value;
    let secondSelect = document.querySelector('#select-2').value;
    let thirdSelect = document.querySelector('#select-3').value;
    let text = document.querySelector('#text'); //sin esta linea funciona igual el codigo
    text.innerHTML = 'Validando...'
    setTimeout(() => {
        if (firstSelect == 9 && secondSelect == 1 && thirdSelect == 1) {
            text.innerHTML = 'Password 1 Correcto';
        } else if (firstSelect == 7 && secondSelect == 1 && thirdSelect == 4) {
            text.innerHTML = 'Password 2 Correcto';
        }else {
        text.innerHTML = 'Password Incorrecto';
        }
    }, 2000);
}