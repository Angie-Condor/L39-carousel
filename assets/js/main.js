$(document).ready(function(){
  var images = $("#images");
  var next = $("#next");
  var prev = $("#prev");

  $("#images .img-carousel:last").insertBefore("#images .img-carousel:first");
  images.css("margin-left", "-"+100+"%");

  function carouselDer(){
    images.animate({
		marginLeft:"-"+200+"%"
    } ,700, function(){
    	$("#images .img-carousel:first").insertAfter("#images .img-carousel:last");
    	images.css("margin-left", "-"+100+"%");
    });
  }

  function carouselIzq() {
	images.animate({
		marginLeft:0
  	} ,700, function(){
  		$("#images .img-carousel:last").insertBefore("#images .img-carousel:first");
  		images.css("margin-left", "-"+100+"%");
  	});
  }

  function autoplay() {
	interval = setInterval(function(){
		carouselDer();
	 }, 5000);
  }
  next.on("click",function() {
  	carouselDer();
  	clearInterval(interval);
  	autoplay();
  });

  prev.on("click",function() {
  	carouselIzq();
  	clearInterval(interval);
  	autoplay();
  });

  autoplay();
});
