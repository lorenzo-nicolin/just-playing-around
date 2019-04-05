jQuery(document).ready(function($){
	$('.toggle-header').click(function(){
		$('.header-bar').toggleClass('open');
	});

	jQuery(document).ready(function($) {
      $('.your-class').slick({
        dots: false,
	        infinite: true,
	        speed: 2000,
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        // autoplay: true,
	        autoplaySpeed: 2000,
	        arrows: true,
	        responsive: [{
	          breakpoint: 600,
	          settings: {
	            slidesToShow: 2,
	            slidesToScroll: 1
	          }
	        },
	        {
	           breakpoint: 400,
	           settings: {
	              arrows: false,
	              slidesToShow: 1,
	              slidesToScroll: 1
	           }
	        }]
	    });
	});
	var height  = $(window).height();

	$('.your-class div').css('height','600px');

});

$(window).on('resize',function(){
	var height  = $(window).height();

	$('.your-class div').css('height','600px');
});



