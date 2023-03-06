const buttons = document.querySelectorAll('.tecla');

function tocaSom (idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio);
    
    if (elemento !== null && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('Elemento não encontrado!');
    }

}

// let i = 0;

// while (i < buttons.length) {
//     const instrumento = buttons[i].classList[1];
//     const idAudio = `#som_${instrumento}`;

//     buttons[i].onclick = () => {
//         tocaSom(idAudio);
//     };

//     i++;
// }

for (let i = 0; i < buttons.length; i++) {
    const tecla = buttons[i];
    const instrumento = buttons[i].classList[1];
    const idAudio = `#som_${instrumento}`;

    buttons[i].onclick = () => {
        tocaSom(idAudio);
    };

    tecla.onkeydown = (e) => {
        if (e.code === 'Enter' || e.code === 'Space') {
            tecla.classList.add('ativa');
        }
    };

    tecla.onkeyup = (e) => {
        if (e.code === 'Enter' || e.code === 'Space')
        tecla.classList.remove('ativa');
    };
}