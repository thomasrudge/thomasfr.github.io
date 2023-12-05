document.addEventListener('DOMContentLoaded', function() {
    var h2 = document.querySelector('h2');
    
    // Verifica se já existe um nome de usuário salvo e define como valor padrão, se houver
    var savedUsername = localStorage.getItem('savedUsername') || h2.textContent;
    
    // Cria um novo elemento input
    var input = document.createElement('input');
    
    // Configura o novo elemento input
    input.type = 'text';
    input.value = savedUsername; // Atribui o nome do usuário salvo ou o texto atual do h2 como valor padrão do input
    input.className = 'nome-usuario'; // Adiciona uma classe para estilização, se necessário
    
    // Substitui o h2 pelo novo input no DOM
    h2.parentNode.replaceChild(input, h2);
    
    // Adiciona um ouvinte de eventos para salvar o valor do input no localStorage sempre que for alterado
    input.addEventListener('change', function() {
        localStorage.setItem('savedUsername', input.value);
    });
    var fotoArea = document.querySelector('.foto');
    var img = fotoArea.querySelector('img');
    var fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.style.display = 'none'; // O input de arquivo é ocultado visualmente.

    // Verifique se já existe uma imagem salva e atualize a exibição conforme necessário.
    var savedImage = localStorage.getItem('savedImage');
    if (savedImage) {
        img.src = savedImage;
    }

    // Quando a imagem é clicada, o input de arquivo oculto é acionado.
    img.addEventListener('click', function() {
        fileInput.click();
    });

    // Quando um novo arquivo é selecionado, atualize a imagem e salve no localStorage.
    fileInput.addEventListener('change', function(event) {
        var file = event.target.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function(e) {
                img.src = e.target.result;
                localStorage.setItem('savedImage', e.target.result); // Salve a imagem no localStorage.
            };
            reader.readAsDataURL(file); // Converta o arquivo de imagem para Data URL.
        }
    });

    // Adicione o input de arquivo oculto ao DOM para que possa ser acionado.
    fotoArea.appendChild(fileInput);

    var fotoArea = document.querySelector('.foto');
    var img = fotoArea.querySelector('img'); // Isto assume que há uma imagem diretamente dentro de .foto
    if (!img) {
        console.error('A imagem não foi encontrada dentro de .foto');
        return;
    }

    var fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.style.display = 'none'; // O input de arquivo é ocultado visualmente.

    // Quando a imagem é clicada, o input de arquivo oculto é acionado.
    img.addEventListener('click', function() {
        fileInput.click();
    });

    // Quando um novo arquivo é selecionado, atualize a imagem e salve no localStorage.
    fileInput.addEventListener('change', function(event) {
        var file = event.target.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function(e) {
                img.src = e.target.result;
                localStorage.setItem('savedImage', e.target.result); // Salve a imagem no localStorage.
            };
            reader.readAsDataURL(file); // Converta o arquivo de imagem para Data URL.
        }
    });

    // Adicione o input de arquivo oculto ao DOM para que possa ser acionado.
    fotoArea.appendChild(fileInput);

    // Verifique se já existe uma imagem salva e atualize a exibição conforme necessário.
    var savedImage = localStorage.getItem('savedImage');
    if (savedImage) {
        img.src = savedImage;
    }
});