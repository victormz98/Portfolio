// Deixar o scroll mais suave ao clicar no link da nav
$(document).ready(function($) { 
	$("header a").addClass("ancora"); //adiciona nos links a classe 'ancora'  
	$(".ancora").click(function(event){        
		event.preventDefault();
		$('html,body').animate(
		{
			scrollTop:$(this.hash).offset().top
		}, 1000); //Tempo em milisegundos
	});

//PARALLAX
// $("#capa").mousemove(function(e){
// 	var amountMovedX = (e.pageX * -0.2 / 6);
// 	var amountMovedY = (e.pageY * -0.2 / 6);

// 	$(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');

// });

//Modal
$(".img_modal").click(function(){
	$(this).css({
		"transform": "scale(1.4)",
		"transition": "all 1s"
	});

	$("#mascara").fadeIn(1000);

	$("header").fadeOut(1000);

$(this).mouseover(function(event) {
	$(this).css({
		"opacity": 1
	})
});

});

$(".fechar_modal").click(function(){
	$(".img_modal").css({
		"transform": "none"
	});

	$("#mascara").fadeOut(1000);

	$("header").fadeIn(1000);
});


// efeito btn
$(".btn").mouseover(function(event) {
	$(this).css({
		'background': 'rgba(255,255,255,.1)'
	});

	$("#img-arrow").css({
		"transform": "scale(1.2)"
	});
});

$(".btn").mouseout(function(event) {
	$(this).css({
		'background': 'none'
	});

	$("#img-arrow").css({
		"transform": "scale(1.0)"
	});

});

/*Navbar*/
$(document).scroll(function () { // oscultador de scroll
    var posicaoScroll = $(document).scrollTop(); // obtem a quantidade de scroll no momento
    if (posicaoScroll == 0) {
    	$("header").css({
    		"background": "none"
    	});

    }else{
    	$("header").css({
    		"background": "rgba(0, 0, 0, 0.5)"
    	});
    }
});

function addClass(el) {
    menu.removeClass('active');
    $(el).addClass('active');
};

var menu = $('header ul li');
var sectionPositions = $('section').map(function(){
    return $(this).position().top;
});
var sections = $('section');
$(document).on('scroll', function () {
    var scroll = $(document).scrollTop();
    var currentElement;
    $(sectionPositions).each(function (i) {
        if (scroll > this - 50) currentElement = menu[i];
    });
    currentElement && addClass(currentElement);
});
menu.on('click', function () {
    addClass(this);
});

//efeito surgir capa
$(".animated-up").css({
	'top': '18%',
	// 'opacity': 1,
	'transition': 'all 2s'
});

window.setInterval(function(){
$(".animated-up").css({
	'opacity': 1
});
}, 200);

}); /*Document.ready*/