function mudaImagem(recebe) {
    document.querySelector('.starbucks').src = recebe;
}

function mudaCor(cor) {
    const circle = document.querySelector('.circle');
    circle.style.background = cor;
}

function toggleMenu() {
    var menuToggle = document.querySelector('.toggle');
    var navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}