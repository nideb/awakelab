

function validarFormulario(event) {
    event.preventDefault();

    var username = document.getElementById('username');
    if (username.value.length < 3) {
        alert('El campo [Nombre] debe contener al menos 3 letras.');
        username.focus();
        return;
    }
}

