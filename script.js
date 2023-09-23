function ocultarNav() {
            var navbar = document.querySelector('.navbar-collapse');
            if (navbar.classList.contains('show')) {
                navbar.classList.remove('show');
            }
        }

document.getElementById('miFormulario').addEventListener('submit', function (event) {
        // Prevenir el envío real del formulario
        event.preventDefault();
        
        // Mostrar el modal de agradecimiento
        $('#agradecimientoModal').modal('show');
    });