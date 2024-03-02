/* =========================================
                Preloader
============================================ */
$(window).on('load', function () { // makes sure that whole site is loaded
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/*====================================================
                    Protfolio
======================================================*/
$(window).on('load', function () {

    // Initialize Isotope
    $("#isotope-container").isotope({});

    // filter items on button click
    $("#isotope-filters").on('click', 'button', function () {

        // get filter value
        var filterValue = $(this).attr('data-filter');

        // filter portfolio
        $("#isotope-container").isotope({
            filter: filterValue
        });

        // active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});

/* =========================================
               Magnifier
============================================ */
$(function () {
    $("#isotope-container").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/* =========================================
              Project
============================================ */
$(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });
});

/* =========================================
              Clients
============================================ */
$(function () {
    $("#clients-list").owlCarousel({
        items: 5,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 2
            },
            // breakpoint from 480 up
            481: {
                items: 3
            },
            // breakpoint from 768 up
            768: {
                items: 4
            },
            // breakpoint from 992 up
            992: {
                items: 5
            },
        }
    });
});

/*====================================================
                        NAVIGATION
====================================================*/
// Show/Hide transparent black navigation
$(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() < 50) {
            // hide nav
            $("nav").removeClass("site-top-nav");
            $("#back-to-top").delay(10).fadeOut();

        } else {
            // show nav
            $("nav").addClass("site-top-nav");
            $("#back-to-top").delay(10).fadeIn();
        }
    });
});

// Smooth scrolling
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        var section = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(section).offset().top - 60
        }, 1250);
    });
});

// Close mobile menu on click
$(function(){
    
    $(".navbar-collapse ul li a").on("click touch", function(){
       
        $(".navbar-toggle").click();
    });
});

/*====================================================
                        Wow
====================================================*/
$(function(){
    new WOW().init();
});

