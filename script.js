let index = 0;
const imagens = document.querySelectorAll('.imagem');

function mostrarFoto() {
    imagens.forEach((imagem, i) => {
        if (i === index) {
            imagem.style.transform = 'translateX(0)';
        } else {
            imagem.style.transform = 'translateX(-100%)';
        }
    });
}

function mudarFoto(direction) {
    index += direction;
    if (index < 0) {
        index = imagens.length - 1;
    } else if (index >= imagens.length) {
        index = 0;
    }
    mostrarFoto();
}

mostrarFoto();
