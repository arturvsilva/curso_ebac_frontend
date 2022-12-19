const form = document.getElementById('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const campoA = document.getElementById('campo-a');
    const campoB = document.getElementById('campo-b');
    const mensagemSucesso = 'Tudo certo! O formulário foi enviado.';
    const mensagemErro = `O valor do <b>campo B</b> não pode ser menor que o valor do <b>campo A</b>.`;
    const mensagemNegativa = document.querySelector(".mensagem-erro");
    const mensagemPositiva = document.querySelector(".mensagem-sucesso");

    if (campoA.value > campoB.value){
        mensagemNegativa.innerHTML = mensagemErro;
        mensagemNegativa.style.display = 'block';

        mensagemPositiva.style.display = '';

    } else {
        mensagemPositiva.innerHTML = mensagemSucesso;
        mensagemPositiva.style.display = 'block';

        campoA.value = '';
        campoB.value = '';
        mensagemNegativa.style.display = '';
        
    }
});