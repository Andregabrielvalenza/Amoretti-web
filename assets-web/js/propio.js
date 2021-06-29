$(document).ready(function() {
	/*funciones de slider */
	var galleryThumbs = new Swiper('.swiper-container.gallery-thumbs',{
		speed: 400,
		spaceBetween: 50,
		slidesPerView: 1,
		autoplay: {
		  delay: 3400,
		  disableOnInteraction: false,
		},
		navigation: {
			clickable: true,
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev',
	        type: 'bullets',
	     },
	     pagination: {
		  clickable: true,
	        el: '.swiper-pagination'
	     },
	     thumbs: {
			swiper: galleryTop
		},
	});  

	var galleryTop = new Swiper('.swiper-container.testimonial', {
		speed: 400,
		spaceBetween: 50,
		slidesPerView: 1,
		autoplay: {
		  delay: 3400,
		  disableOnInteraction: false,
		},
		direction: 'horizontal',
		pagination: {
		  clickable: true,
		  el: '.swiper-pagination',
		  type: 'bullets',
		},
	    thumbs: {
			swiper: galleryThumbs
		},
  	});

	var galleryvinotumbs = new Swiper('.swiper-container.gallery-thumbs-vino',{
		speed: 400,
		spaceBetween: 50,
		autoplay: {
		  delay: 3800,
		  disableOnInteraction: false,
		},
		navigation: {
			clickable: true,
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev',
	        type: 'bullets',
	     },
	     pagination: {
		  clickable: true,
	        el: '.swiper-pagination'
	     },
	     thumbs: {
			swiper: galleryvinotop
		},
	});  

	var galleryvinotop = new Swiper('.swiper-container.testimonial-vino', {
		speed: 400,
		spaceBetween: 50,
		autoplay: {
		  delay: 3800,
		  disableOnInteraction: false,
		},
		direction: 'horizontal',
		pagination: {
		  clickable: true,
		  el: '.swiper-pagination',
		  type: 'bullets',
		},
	    thumbs: {
			swiper: galleryvinotumbs
		},
  	});

	var gallerypiscotumbs = new Swiper('.swiper-container.gallery-thumbs-pisco',{
		speed: 400,
		spaceBetween: 50,
		autoplay: {
		  delay: 5000,
		  disableOnInteraction: false,
		},
		navigation: {
			clickable: true,
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev',
	        type: 'bullets',
	     },
	     pagination: {
		  clickable: true,
	        el: '.swiper-pagination'
	     },
	     thumbs: {
			swiper: gallerypiscotop
		},
	});  

	var gallerypiscotop = new Swiper('.swiper-container.testimonialnone', {
		speed: 400,
		spaceBetween: 50,
		autoplay: {
		  delay: 5000,
		  disableOnInteraction: false,
		},
		direction: 'horizontal',
		pagination: {
		  clickable: true,
		  el: '.swiper-pagination',
		  type: 'bullets',
		},
	    thumbs: {
			swiper: gallerypiscotumbs
		},
  	});

	/* funcion de abajo a rriba*/
	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});

  	/* Funciones de scrolltop */
	if ($(window).width() >= 768 && $(window).width() < 1024) {
		$('#vinoactivo').click(function(){
	        $('body, html').animate({
	            scrollTop: '900px'
	        }, 300);
	    });
	    $('#probar').click(function(){
	        $('body, html').animate({
	            scrollTop: '900px'
	        }, 300);
	    });
	    $('#piscoactivo').click(function(){
	        $('body, html').animate({
	            scrollTop: '1310px'
	        }, 500);
	    });
	    $('#bardactivo').click(function(){
	        $('body, html').animate({
	            scrollTop: '2890px'
	        }, 500);
	    });
	    $('#nosotrosactivo').click(function(){
	        $('body, html').animate({
	            scrollTop: '4100px'
	        }, 500);
	    });
	    $('#contactoactivo').click(function(){
	        $('body, html').animate({
	            scrollTop: '6010px'
	        }, 500);
	    });
	}
	if ($(window).width() >= 1024 && $(window).width() < 1200) {
		$('#vinoactivo').click(function(){
	        $('body, html').animate({
	            scrollTop: '1100px'
	        }, 300);
	    });
	    $('#probar').click(function(){
	        $('body, html').animate({
	            scrollTop: '1100px'
	        }, 300);
	    });
	    $('#piscoactivo').click(function(){
	        $('body, html').animate({
	            scrollTop: '1530px'
	        }, 500);
	    });
	    $('#bardactivo').click(function(){
	        $('body, html').animate({
	            scrollTop: '2890px'
	        }, 500);
	    });
	    $('#nosotrosactivo').click(function(){
	        $('body, html').animate({
	            scrollTop: '3720px'
	        }, 500);
	    });
	    $('#contactoactivo').click(function(){
	        $('body, html').animate({
	            scrollTop: '5600px'
	        }, 500);
	    });
	}
	if ($(window).width() >= 1200 && $(window).width() < 1300) {
		$('#vinoactivo').click(function(){
	        $('body, html').animate({
	            scrollTop: '1070px'
	        }, 300);
	    });
	    $('#probar').click(function(){
	        $('body, html').animate({
	            scrollTop: '1070px'
	        }, 300);
	    });
	    $('#piscoactivo').click(function(){
	        $('body, html').animate({
	            scrollTop: '1470px'
	        }, 500);
	    });
	    $('#bardactivo').click(function(){
	        $('body, html').animate({
	            scrollTop: '2600px'
	        }, 500);
	    });
	    $('#nosotrosactivo').click(function(){
	        $('body, html').animate({
	            scrollTop: '3400px'
	        }, 500);
	    });
	    $('#contactoactivo').click(function(){
	        $('body, html').animate({
	            scrollTop: '5200px'
	        }, 500);
	    });
	}

	if ($(window).width() >= 1300) {
		$('#vinoactivo').click(function(){
	        $('body, html').animate({
	            scrollTop: '1080px'
	        }, 300);
	    });
	    $('#probar').click(function(){
	        $('body, html').animate({
	            scrollTop: '1080px'
	        }, 300);
	    });
	    $('#piscoactivo').click(function(){
	        $('body, html').animate({
	            scrollTop: '1500px'
	        }, 500);
	    });
	    $('#bardactivo').click(function(){
	        $('body, html').animate({
	            scrollTop: '2600px'
	        }, 500);
	    });
	    $('#nosotrosactivo').click(function(){
	        $('body, html').animate({
	            scrollTop: '3400px'
	        }, 500);
	    });
	    $('#contactoactivo').click(function(){
	        $('body, html').animate({
	            scrollTop: '5250px'
	        }, 500);
	    });
	}

	/* funciones del menu para que acompañe toda la pagina */
	 $(window).scroll(function(){
    		if( $(this).scrollTop() > 600 ){
	            $('.secc-navbar').css({'background-color':'#ffffff','position':'fixed','margin-top':'0px','height':'70px','z-index':'999999'});
	            $('.img-nav-logo').css({'display':'block','top':'-5px'});
	            $('.lin-nav').css({'color':'#5A1A22'});
	            $( ".lin-nav" ).addClass( "lin-nav-light" );
             	$( ".lin-nav" ).addClass( "cta" );
	            $( ".secc-navbar" ).addClass( "sombra-menu" );

	        } else {
	            $('.secc-navbar').css({'background-color':'transparent','position':'absolute','margin-top':'30px','height':'auto'});
	            $('.img-nav-logo').css({'display':'none','top':'0'});
	            $('.lin-nav').css({'color':'#ffffff'});
	            $( ".lin-nav" ).removeClass( "cta" );
	            $( ".lin-nav" ).removeClass( "lin-nav-light" );
	            $( ".secc-navbar" ).removeClass( "sombra-menu" );
	        }
    });

    $(window).scroll(function(){
    	if ($(this).width() >= 360 && $(this).width() < 640) {
    		if( $(this).scrollTop() > 800){
          		$('.counter').each(function() {
				  var $this = $(this),
				      countTo = $this.attr('data-count');
				  
				  $({ countNum: $this.text()}).animate({
				    countNum: countTo
				  },

				  {

				    duration: 8000,
				    easing:'linear',
				    step: function() {
				      $this.text(Math.floor(this.countNum));
				    },
				    complete: function() {
				      $this.text(this.countNum);
				      //alert('finished');
				    }

				  });  
				});   
	        } 
    	}
    	if ($(this).width() >= 640 && $(this).width() < 768) {
    		if( $(this).scrollTop() > 800){
          		$('.counter').each(function() {
				  var $this = $(this),
				      countTo = $this.attr('data-count');
				  
				  $({ countNum: $this.text()}).animate({
				    countNum: countTo
				  },

				  {

				    duration: 8000,
				    easing:'linear',
				    step: function() {
				      $this.text(Math.floor(this.countNum));
				    },
				    complete: function() {
				      $this.text(this.countNum);
				      //alert('finished');
				    }

				  });  
				});   
	        } 
    	}
    	if ($(this).width() >= 768 && $(this).width() < 1024) {
    		if( $(this).scrollTop() > 800 && $(this).scrollTop()<1300){
          		$('#vinoactivo').css({'font-weight':'900'});  
	        } else {
	           $('#vinoactivo').css({'font-weight':'100'});  
	        }

	        if( $(this).scrollTop() > 1300 && $(this).scrollTop()<1800){
	          $('#piscoactivo').css({'font-weight':'900'});  
	        } else {
	           $('#piscoactivo').css({'font-weight':'100'});  
	        }

	        if( $(this).scrollTop() > 2600 && $(this).scrollTop()<4000){
	          $('#bardactivo').css({'font-weight':'900'});  
	        } else {
	           $('#bardactivo').css({'font-weight':'100'});  
	        }

	        if( $(this).scrollTop() > 4000 && $(this).scrollTop()<5500){
	          $('#nosotrosactivo').css({'font-weight':'900'}); 
	          $('.counter').each(function() {
				  var $this = $(this),
				      countTo = $this.attr('data-count');
				  
				  $({ countNum: $this.text()}).animate({
				    countNum: countTo
				  },

				  {

				    duration: 8000,
				    easing:'linear',
				    step: function() {
				      $this.text(Math.floor(this.countNum));
				    },
				    complete: function() {
				      $this.text(this.countNum);
				      //alert('finished');
				    }

				  });  
				});  
	        } else {
	           $('#nosotrosactivo').css({'font-weight':'100'});  
	        }

	        if( $(this).scrollTop() > 5500 && $(this).scrollTop()<6800){
	          $('#contactoactivo').css({'font-weight':'900'});  
	        } else {
	           $('#contactoactivo').css({'font-weight':'100'});  
	        }
    	}
    	if ($(this).width() >= 1024 && $(this).width() < 1200) {
    		if( $(this).scrollTop() > 1000 && $(this).scrollTop()<1500){
          		$('#vinoactivo').css({'font-weight':'900'});  
	        } else {
	           $('#vinoactivo').css({'font-weight':'100'});  
	        }

	        if( $(this).scrollTop() > 1500 && $(this).scrollTop()<1900){
	          $('#piscoactivo').css({'font-weight':'900'});  
	        } else {
	           $('#piscoactivo').css({'font-weight':'100'});  
	        }

	        if( $(this).scrollTop() > 2600 && $(this).scrollTop()<3700){
	          $('#bardactivo').css({'font-weight':'900'});  
	        } else {
	           $('#bardactivo').css({'font-weight':'100'});  
	        }

	        if( $(this).scrollTop() > 3700 && $(this).scrollTop()<4990){
	          $('#nosotrosactivo').css({'font-weight':'900'});  
	          $('.counter').each(function() {
				  var $this = $(this),
				      countTo = $this.attr('data-count');
				  
				  $({ countNum: $this.text()}).animate({
				    countNum: countTo
				  },

				  {

				    duration: 8000,
				    easing:'linear',
				    step: function() {
				      $this.text(Math.floor(this.countNum));
				    },
				    complete: function() {
				      $this.text(this.countNum);
				      //alert('finished');
				    }

				  });  
				}); 
	        } else {
	           $('#nosotrosactivo').css({'font-weight':'100'});  
	        }

	        if( $(this).scrollTop() > 4990 && $(this).scrollTop()<6800){
	          $('#contactoactivo').css({'font-weight':'900'});  
	        } else {
	           $('#contactoactivo').css({'font-weight':'100'});  
	        }
    	}
    	if ($(this).width() >= 1200 && $(this).width()<1300) {
    		if( $(this).scrollTop() > 1000 && $(this).scrollTop()<1500){
          		$('#vinoactivo').css({'font-weight':'900'});  
	        } else {
	           $('#vinoactivo').css({'font-weight':'100'});  
	        }

	        if( $(this).scrollTop() > 1500 && $(this).scrollTop()<1950){
	          $('#piscoactivo').css({'font-weight':'900'});  
	        } else {
	           $('#piscoactivo').css({'font-weight':'100'});  
	        }

	        if( $(this).scrollTop() > 2600 && $(this).scrollTop()<3500){
	          $('#bardactivo').css({'font-weight':'900'});  
	        } else {
	           $('#bardactivo').css({'font-weight':'100'});  
	        }

	        if( $(this).scrollTop() > 3500 && $(this).scrollTop()<4700){
	          $('#nosotrosactivo').css({'font-weight':'900'});  
	        } else {
	           $('#nosotrosactivo').css({'font-weight':'100'});  
	        }

	        if( $(this).scrollTop() > 3200){  
	          $('.counter').each(function() {
				  var $this = $(this),
				      countTo = $this.attr('data-count');
				  
				  $({ countNum: $this.text()}).animate({
				    countNum: countTo
				  },

				  {

				    duration: 8000,
				    easing:'linear',
				    step: function() {
				      $this.text(Math.floor(this.countNum));
				    },
				    complete: function() {
				      $this.text(this.countNum);
				      //alert('finished');
				    }

				  });  
				}); 
	        }

	        if( $(this).scrollTop() > 4700 && $(this).scrollTop()<5800){
	          $('#contactoactivo').css({'font-weight':'900'});  
	        } else {
	           $('#contactoactivo').css({'font-weight':'100'});  
	        }
    	}
    	if ($(this).width() >= 1300) {
    		if( $(this).scrollTop() > 1000 && $(this).scrollTop()<1400){
          		$('#vinoactivo').css({'font-weight':'900'});  
	        } else {
	           $('#vinoactivo').css({'font-weight':'100'});  
	        }

	        if( $(this).scrollTop() > 1400 && $(this).scrollTop()<1950){
	          $('#piscoactivo').css({'font-weight':'900'});  
	        } else {
	           $('#piscoactivo').css({'font-weight':'100'});  
	        }

	        if( $(this).scrollTop() > 2400 && $(this).scrollTop()<3400){
	          $('#bardactivo').css({'font-weight':'900'});  
	        } else {
	           $('#bardactivo').css({'font-weight':'100'});  
	        }

	        if( $(this).scrollTop() > 3400 && $(this).scrollTop()<4700){
	          $('#nosotrosactivo').css({'font-weight':'900'}); 
	          $('.counter').each(function() {
				  var $this = $(this),
				      countTo = $this.attr('data-count');
				  
				  $({ countNum: $this.text()}).animate({
				    countNum: countTo
				  },

				  {

				    duration: 8000,
				    easing:'linear',
				    step: function() {
				      $this.text(Math.floor(this.countNum));
				    },
				    complete: function() {
				      $this.text(this.countNum);
				      //alert('finished');
				    }

				  });  
				}); 
	        } else {
	           $('#nosotrosactivo').css({'font-weight':'100'});  
	        }

	        if( $(this).scrollTop() > 5250 && $(this).scrollTop()<6500){
	          $('#contactoactivo').css({'font-weight':'900'});  
	        } else {
	           $('#contactoactivo').css({'font-weight':'100'});  
	        }
    	}
    });

	/* funciones para menu celular */
    $('.btn-menu').click(function(){
     	$('.div-nav').fadeIn();
    });

    $('.btn-close-nav').click(function(){
     	$('.div-nav').fadeOut();
    });

    $('.lin-nav-calular').click(function(){
     	$('.div-nav').fadeOut();
    });

    /* funcion para animacion de presentación*/
	AOS.init();

});