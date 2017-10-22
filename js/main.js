$(document).ready(function() {

  $(".se-pre-con").fadeOut("slow");
	//Scroll

	jQuery.scrollSpeed(100, 800);


	//Animate

	new WOW().init();


	//Parallax

	// var parLogo = document.getElementById('parLogo');
	// var parallax = new Parallax(parLogo);


	// Owl Carousel

	$(".owl-1").owlCarousel({
		margin: 20,
		loop: true,
		center: true,
		dots: true,
		autoplay: true,
		autoplayTimeout: 3000,
		smartSpeed: 800,
		video:true,
		videoWidth: 300, 
		videoHeight: 250,
    responsive: {
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
	});

  $(".owl-2").owlCarousel({
    margin: 0,
    loop: true,
    center: true,
    dots: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 800,
    items: 1
  });



	//Popover

    $('[data-toggle="popover"]').popover();   


    // Team Section

    $('.raja-div').hide();
    $('.zaw-div').hide();
    $('.hire-div').hide();
    $('.will-div-2').hide();
    $('.will-div-3').hide();
    $('#willPic').css({
      "background": "#3EFF00",
      "-webkit-clip-path": "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
      "clip-path": "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
      "transition": "all .25s ease"
    });

    $('.will').click(function(){ 
      $('.will-div').fadeIn("slow").show();
      $('.zaw-div').hide();
      $('.hire-div').hide();
      $('.raja-div').hide();
      $('.will-div-2').hide();
      $('.will-div-3').hide();
      $('#willPic').css({
        "background": "#3EFF00",
        "-webkit-clip-path": "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
        "clip-path": "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
        "transition": "all .25s ease"
      });
      $('#rajaPic').css({
        "background": "none",
        "transition": "all .25s ease",
        "border": "none"
      });
      $('#zawPic').css({
        "background": "none",
        "transition": "all .25s ease",
        "border": "none"
      });
      $('#hirePic').css({
        "background": "none",
        "transition": "all .25s ease",
        "border": "none"
      });
      $('#willPic2').css({
        "background": "none",
        "transition": "all .25s ease",
        "border": "none"
      });
      $('#willPic3').css({
        "background": "none",
        "transition": "all .25s ease",
        "border": "none"
      });
  	});

	$('.raja').click(function(){ 
      $('.will-div').hide();
      $('.zaw-div').hide();
      $('.hire-div').hide();
      $('.raja-div').fadeIn("slow").show();
      $('.will-div-2').hide();
      $('.will-div-3').hide();
      $('#rajaPic').css({
        "background": "#3EFF00",
        "-webkit-clip-path": "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
        "clip-path": "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
        "transition": "all .25s ease"
      });
      $('#willPic').css({
        "background": "none",
        "transition": "all .25s ease",
        "border": "none"
      });
      $('#zawPic').css({
        "background": "none",
        "transition": "all .25s ease",
        "border": "none"
      });
      $('#hirePic').css({
        "background": "none",
        "transition": "all .25s ease",
        "border": "none"
      });
      $('#willPic2').css({
        "background": "none",
        "transition": "all .25s ease",
        "border": "none"
      });
      $('#willPic3').css({
        "background": "none",
        "transition": "all .25s ease",
        "border": "none"
      });
  	});

  	$('.zaw').click(function(){ 
      $('.will-div').hide();
      $('.zaw-div').fadeIn("slow").show();
      $('.hire-div').hide();
      $('.raja-div').hide();
      $('.will-div-2').hide();
      $('.will-div-3').hide();
      $('#zawPic').css({
        "background": "#3EFF00",
        "-webkit-clip-path": "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
        "clip-path": "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
        "transition": "all .25s ease"
      });
      $('#willPic').css({
        "background": "none",
        "transition": "all .25s ease",
        "border": "none"
      });
      $('#rajaPic').css({
        "background": "none",
        "transition": "all .25s ease",
        "border": "none"
      });
      $('#hirePic').css({
        "background": "none",
        "transition": "all .25s ease",
        "border": "none"
      });
      $('#willPic2').css({
        "background": "none",
        "transition": "all .25s ease",
        "border": "none"
      });
      $('#willPic3').css({
        "background": "none",
        "transition": "all .25s ease",
        "border": "none"
      });
  	});

  	$('.hire').click(function(){ 
      $('.will-div').hide();
      $('.zaw-div').hide();
      $('.hire-div').fadeIn("slow").show();
      $('.raja-div').hide();
      $('.will-div-2').hide();
      $('.will-div-3').hide();
      $('#hirePic').css({
        "background": "#3EFF00",
        "-webkit-clip-path": "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
        "clip-path": "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
        "transition": "all .25s ease"
      });
      $('#willPic').css({
        "background": "none",
        "transition": "all .25s ease",
        "border": "none"
      });
      $('#zawPic').css({
        "background": "none",
        "transition": "all .25s ease",
        "border": "none"
      });
      $('#rajaPic').css({
        "background": "none",
        "transition": "all .25s ease",
        "border": "none"
      });
      $('#willPic2').css({
        "background": "none",
        "transition": "all .25s ease",
        "border": "none"
      });
      $('#willPic3').css({
        "background": "none",
        "transition": "all .25s ease",
        "border": "none"
      });

  	});

    $('.will-2').click(function(){ 
      $('.will-div').hide();
      $('.zaw-div').hide();
      $('.hire-div').hide();
      $('.raja-div').hide();
      $('.will-div-2').fadeIn("slow").show();
      $('.will-div-3').hide();
      $('#willPic2').css({
        "background": "#3EFF00",
        "-webkit-clip-path": "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
        "clip-path": "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
        "transition": "all .25s ease"
      });
      $('#willPic').css({
        "background": "none",
        "transition": "all .25s ease",
        "border": "none"
      });
      $('#zawPic').css({
        "background": "none",
        "transition": "all .25s ease",
        "border": "none"
      });
      $('#rajaPic').css({
        "background": "none",
        "transition": "all .25s ease",
        "border": "none"
      });
      $('#hirePic').css({
        "background": "none",
        "transition": "all .25s ease",
        "border": "none"
      });
      $('#willPic3').css({
        "background": "none",
        "transition": "all .25s ease",
        "border": "none"
      });

    });

    $('.will-3').click(function(){ 
      $('.will-div').hide();
      $('.zaw-div').hide();
      $('.hire-div').hide();
      $('.raja-div').hide();
      $('.will-div-2').hide();
      $('.will-div-3').fadeIn("slow").show();
      $('#willPic3').css({
        "background": "#3EFF00",
        "-webkit-clip-path": "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
        "clip-path": "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
        "transition": "all .25s ease"
      });
      $('#willPic').css({
        "background": "none",
        "transition": "all .25s ease",
        "border": "none"
      });
      $('#zawPic').css({
        "background": "none",
        "transition": "all .25s ease",
        "border": "none"
      });
      $('#rajaPic').css({
        "background": "none",
        "transition": "all .25s ease",
        "border": "none"
      });
      $('#hirePic').css({
        "background": "none",
        "transition": "all .25s ease",
        "border": "none"
      });
      $('#willPic2').css({
        "background": "none",
        "transition": "all .25s ease",
        "border": "none"
      });
    });


    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });

    $(".test-badge").click(function(){
      $(".timeline-badge").css({
        "-webkit-box-shadow": "0px 0px 10px 6px rgba(62,255,0,0.30)",
        "-moz-box-shadow": "0px 0px 10px 6px rgba(62,255,0,0.30);",
        "box-shadow": "0px 0px 10px 6px rgba(62,255,0,0.30)",
        "transition": "all .25s ease",
        "border": "3px solid white"
      });
    });

    $('#endCarousel').carousel();

});