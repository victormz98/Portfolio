// Deixar o scroll mais suave ao clicar no link da nav
$(document).ready(function($) { 
	$(".navbar-nav a").addClass("ancora"); //adiciona nos links a classe 'ancora'  
	$(".ancora").click(function(event){        
		event.preventDefault();
		$('html,body').animate(
		{
			scrollTop:$(this.hash).offset().top
		}, 1000); //Tempo em milisegundos
	});

//efeito surgir capa
$(".animated-up").css({
	'top': '20%',
	// 'opacity': 1,
	'transition': 'all 2s'
});

window.setInterval(function(){
$(".animated-up").css({
	'opacity': 1
});
}, 200);

}); /*Document.ready*/