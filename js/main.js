$(document).ready(function(){

	// main-slider
	$('.slider_area').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    autoplayHoverPause: true,
	    dots:false,
	    autoplay: true,
	    navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	})

	// category-slider
	$('.category_slider').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    dots:false,
	    autoplay: true,
	    autoplayHoverPause: true,
	    navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    }
	})

	// special-slider
	$('.special_pro_slider').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    dots:false,
	    autoplay: true,
	    autoplayHoverPause: true,
	    navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:5
	        }
	    }
	})
	
	// trending-slider
	$('.trending_product').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    dots:false,
	    autoplay: true,
	    autoplayHoverPause: true,
	    navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	})


// today's hot sell-slider
	$('.hot_sell').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    dots:false,
	    autoplay: true,
	    autoplayHoverPause: true,
	    navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
	    responsive:{
	        0:{
	            items:1
	        },
	        960:{
	            items:1
	        }
	    }
	})


	//
	$(function(){

	  $("#furniture_detail_img").exzoom({

	    // thumbnail nav options
	    "navWidth": 60,
	    "navHeight": 60,
	    "navItemNum": 5,
	    "navItemMargin": 7,
	    "navBorder": 1,
	    "autoPlay": false,
	    
	  });

	});















	

	// slick nav
	$(function(){
        $('#menu').slicknav({
        	'label' : '',
        });
    });
	

})