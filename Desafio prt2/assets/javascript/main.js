const verification = () => {
    let num1 = document.querySelector('#input-1').value;
    let num2 = document.querySelector('#input-2').value;
    let num3 = document.querySelector('#input-3').value;
    let text = document.querySelector('#text');// Si no declaro esta variable igual funciona innerHTML
    let result = parseInt(num1) + parseInt(num2) + parseInt(num3);
    if(result > 0 && result <= 10) {
        text.innerHTML = `Llevas ${result} stickers`
    }
    else if(result > 10) {
        text.innerHTML = `Ups llevas ${result} stickers, recuerda que es un máximo 10`
    }else {
        alert('Toma cualquier sticker, puedes llevar un máximo de 10')
    }
}