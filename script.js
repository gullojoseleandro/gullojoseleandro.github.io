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

// header scrolling effect
$(window).on('scroll', function(){
	if($(window).scrollTop()){
      $('header').addClass('nav-show');
		  
	} 
	else{
		$('header').removeClass('nav-show');
	}
	   
})