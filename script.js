function exibirMensagem() {
    var mensagem = document.querySelector('#warning-message');
    var larguraJanela = window.innerWidth;

    if (larguraJanela < 380) {
        mensagem.style.display = 'block';
    } else {
        mensagem.style.display = 'none';
    }
}

window.addEventListener('DOMContentLoaded', exibirMensagem);
window.addEventListener('resize', exibirMensagem);