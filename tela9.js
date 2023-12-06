document.addEventListener('DOMContentLoaded', function() {
    var plusSign = document.querySelector('.previsao .plus-sign');

    if (!plusSign) {
        console.error('Elemento + não encontrado');
        return;
    }

    // Cria um input e o configura
    var input = document.createElement('input');
    input.type = 'number';
    input.placeholder = 'Digite o número de dias';
    input.className = 'numero-dias-input'; // Classe para estilização, se necessário

    // Substitui o sinal de + pelo input ao clicar
    plusSign.addEventListener('click', function() {
        var h2 = this.parentNode;
        h2.replaceChild(input, this);
        input.focus(); // Coloca o foco no input
    });

    // Atualiza o h2 quando o valor do input muda e substitui o input pelo texto atualizado
    input.addEventListener('change', function() {
        var newContent = document.createTextNode(input.value);
        var h2 = input.parentNode;
        h2.replaceChild(newContent, input);
    });
});