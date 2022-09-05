function mudaImagem(recebe) {
    document.querySelector('.starbucks').src = recebe;
}

function mudaCor(cor) {
    const circle = document.querySelector('.circle');
    circle.style.background = cor;
}