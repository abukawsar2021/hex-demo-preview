(function($) {
    "use strict";


    /*-----------------SITE-PRELOADER-----------------*/
	
		$(document).ready(function() {
			  
			 $(document).ready(function() {

			  setTimeout(function() {
				$('body').addClass('loaded');
			}, 3500); 
			  

			  
			});
		
			  
		});

	
	
	    /*------------------SECTION-SCROLL-------------------------*/
		$(function() {
			$('a.section-scroll').bind('click', function(event) {
				var $anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $($anchor.attr('href')).offset().top
				}, 1500, 'easeInOutExpo');
				event.preventDefault();
			});
		});



   /*-------------------------------------SCROLL-TOP-------------------------------------*/

    $.scrolltop({
        template: '<span class="glyphicon glyphicon-chevron-up"></span>',
        class: 'scrolltop'
    });		
		
		
		
		
	  /*-------------------------------  PARALLAX  ---------------------------*/
      
	  var parallaxActivate = $("[data-paroller-factor]");
	  
	   parallaxActivate.paroller();

		
		
		
		
		
		
		
		
		
		
		
		
		

}(jQuery));