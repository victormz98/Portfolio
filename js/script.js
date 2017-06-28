// Deixar o scroll mais suave ao clicar no link da nav
$(document).ready(function ($) {
	$(".navbar-nav a").addClass("ancora"); //adiciona nos links a classe 'ancora'  
	$(".ancora").click(function (event) {
		event.preventDefault();
		$('html,body').animate(
			{
				scrollTop: $(this.hash).offset().top
			}, 1000); //Tempo em milisegundos
	});

	//efeito surgir capa
	$(".animated-up").css({
		'top': '30%',
		// 'opacity': 1,
		'transition': 'all 2s'
	});

	window.setInterval(function () {
		$(".animated-up").css({
			'opacity': 1
		});
	}, 200);

	//Eventos de Scroll 
	// var posicaoElemento = $('#sobre').position().top;
	$(document).scroll(function () {
		var posicaoScroll = $(document).scrollTop(); //Obtem valor scroll no momento
		if (posicaoScroll > 1700) {
			$(".progress-bar-content .progress-right .progress-bar").css({
				"animation": "padrao 1.8s linear forwards"
			});
			$(".progress-bar-content .progress-right-half .progress-bar").css({
				"animation": "javascript 1s linear forwards"
			});
			$(".progress-bar-content.blue .progress-left .progress-bar").css({
				"animation": "html 1.5s linear forwards 1.8s"
			});
			$(".progress-bar-content.yellow .progress-left .progress-bar").css({
				"animation": "jquery 1s linear forwards 1.8s"
			});
			$(".progress-bar-content.pink .progress-left .progress-bar").css({
				"animation": "photoshop 0.4s linear forwards 1.8s"
			});
		} else if (posicaoScroll >= 700) {
			$(".toptop").css({
				"opacity": 1
			})
		} else if (posicaoScroll < 700) {
			$(".toptop").css({
				"opacity": 0
			})
		}
	})

	//resposnsividade das progress bars
	var larguraTela = $(window).width();
	if (larguraTela < 425) {
		$("#sobre>.container>.row>.col-sm-3").removeClass("col-xs-6");
		$("#sobre>.container>.row>.col-sm-3").addClass("col-xs-12");
	}

}); /*Document.ready*/