function ocultarNav() {
  var navbar = document.querySelector('.navbar-collapse');
  if (navbar.classList.contains('show')) {
    navbar.classList.remove('show');
  }
}

document.getElementById('miFormulario').addEventListener('submit', function (event) {
  event.preventDefault();
  $('#agradecimientoModal').modal('show');
});