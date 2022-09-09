function mudaImagem(recebe) {
    document.querySelector('.starbucks').src = recebe;
}

function mudaCor(cor) {
    const circle = document.querySelector('.circle');
    circle.style.background = cor;
}

function toggleMenu() {
    var toggle = document.querySelector('.toggle');
    toggle.classList.toggle('active');
}