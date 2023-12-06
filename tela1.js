document.addEventListener('DOMContentLoaded', function() {
    var h1 = document.querySelector('h1');
    h1.addEventListener('click', function() {
        localStorage.clear();
        alert('LocalStorage limpo com sucesso!');
    });

    var h2 = document.querySelector('h2');
    var savedUsername = localStorage.getItem('savedUsername') || h2.textContent;
    var input = document.createElement('input');
    input.type = 'text';
    input.value = savedUsername;
    input.className = 'nome-usuario';
    h2.parentNode.replaceChild(input, h2);
    input.addEventListener('change', function() {
        localStorage.setItem('savedUsername', input.value);
    });

    var fotoArea = document.querySelector('.foto');
    var img = fotoArea.querySelector('img');
    var fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.style.display = 'none';

    var savedImage = localStorage.getItem('savedImage');
    if (savedImage) {
        img.src = savedImage;
    }

    img.addEventListener('click', function() {
        fileInput.click();
    });

    fileInput.addEventListener('change', function(event) {
        var file = event.target.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function(e) {
                img.src = e.target.result;
                localStorage.setItem('savedImage', e.target.result);
            };
            reader.readAsDataURL(file);
        }
    });

    fotoArea.appendChild(fileInput);
});