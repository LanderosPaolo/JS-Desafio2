const changeColor = () => {
    let image = document.querySelector('#image').style.border;
    if(image === ''){
        document.querySelector('#image').style.border = '2px solid red';
    }else if(image === '2px solid red'){
        document.querySelector('#image').style.border = '';
    }else {
        alert('Algo salió mal');
    }
}