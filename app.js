'use strict'

const switcher = document.querySelector('.botao');

switcher.addEventListener('click', function(){
    document.body.classList.toggle('tema-escuro');
    document.body.classList.toggle('tema-claro');

    let nomeDaClasse = document.body.className;
    if(nomeDaClasse.includes("tema-claro")) {
        this.textContent = "Escuro";
    } else {
        this.textContent = "Claro";
    }
});