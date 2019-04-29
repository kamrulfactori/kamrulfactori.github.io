(function ($) {
	"use strict";

    jQuery(document).ready(function($){

//        owl-carousel js start
        $(".homepage-slides").owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            navText: ["<i class='fa fa-angle-left'</i>","<i class='fa fa-angle-right'</i>"],
            dots: false,
            autoplay: true,
            smartSpeed:2000,
            mouseDrag: true,
            touchDrag: false,
        });

        $(".homepage-slides").on("translate.owl.carousel", function(){
            $(".single-slider-item h2").removeClass("animated bounceInDown").css("opacity", "0");
            $(".single-slider-item p").removeClass("animated bounceInRight").css("opacity", "0");
            $(".slider-btn").removeClass("animated bounceInUp").css("opacity", "0");
        });
            
        $(".homepage-slides").on("translated.owl.carousel", function(){
            $(".single-slider-item h2").addClass("animated bounceInDown").css("opacity", "1");
            $(".single-slider-item p").addClass("animated bounceInRight").css("opacity", "1");
            $(".slider-btn").addClass("animated bounceInUp").css("opacity", "1");
        });
       
//        owl-carousel js end
        
//        magnificPopup js start
			$('.light-box').magnificPopup({
				type:'image', 
				gallery:{
                enabled: true,
				}
			});
//        magnificPopup js end  
        
//        slicknav js start
			$("ul#navigation").slicknav({
				prependTo: ".responsive-menu-wrap"
			});
//        slicknav js end        
        
//        wow js start
			new WOW().init();
//        wow js end    
        
//        contact form js start
        
//        contact form js end
        
        
    });


    jQuery(window).load(function(){
        jQuery(".factorian-site-preloader-wrap").fadeOut(500);
        
    });


}(jQuery));	