document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o elemento h2 que contém "Nome Do usuario"
    var h2 = document.querySelector('h2');
    
    // Cria um novo elemento input
    var input = document.createElement('input');
    
    // Configura o novo elemento input
    input.type = 'text';
    input.value = h2.textContent; // Atribui o texto atual do h2 como valor padrão do input
    input.className = 'nome-usuario'; // Adiciona uma classe para estilização, se necessário
    
    // Substitui o h2 pelo novo input no DOM
    h2.parentNode.replaceChild(input, h2);
});