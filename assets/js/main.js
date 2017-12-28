(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {

        //Sticky JS
        $(".sticker").sticky({
            topSpacing: 0
        });


        // Smooth scrolling using jQuery easing
        $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: (target.offset().top - 54)
                    }, 1000, "easeInOutExpo");
                    return false;
                }
            }
        });

        // Closes responsive menu when a scroll trigger link is clicked
        $('.js-scroll-trigger').on('click', function () {
            $('.navbar-collapse').collapse('hide');
        });


        // Activate scrollspy to add active class to navbar items on scroll
        $('body').scrollspy({
            target: '#mainNav',
            offset: 54
        });

        //WOW JS
        new WOW().init();

        //COUNTER UP
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });

        // init Isotope
        var $grid = $('.grid').isotope({
            // options
        });
        // filter items on button click
        $('.filter-button-group').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            }), $(window).trigger('resize.px.parallax');
        });




        //OWL CAROUSEL
        $('.clients-review').owlCarousel({
            items: 1,
            autoplay: true,
            loop: true,
            nav: false,
            dots: true
        })


        // MAGNIFIC POPUP FOR PORTFOLIO PAGE
        $('.image-popup').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300
            }
        });







    });


    $(window).on('load', function () { // makes sure the whole site is loaded 
        $('#status').fadeOut(); // will first fade out the loading animation 
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    })


}(jQuery));