document.addEventListener('DOMContentLoaded', function() {
    foi_clicado = 0;
    let bolaverdemenor = document.querySelector(".bolaverdemenor");

    bolaverdemenor.addEventListener("click", function(event) {
        if (foi_clicado == 0) {
            bolaverdemenor.style.borderColor = '#cc0000';
            foi_clicado = 1;
        } else {
            bolaverdemenor.style.borderColor = '#99cc00';
            foi_clicado = 0;
        }
    });
});