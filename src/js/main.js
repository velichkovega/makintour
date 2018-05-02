/*
 * Third party
 */
//= ../../bower_components/jquery/dist/jquery.js

//= ../../node_modules/slick-carousel/slick/slick.js

//= ../../node_modules/owl.carousel/dist/owl.carousel.min.js

var screenwidth = screen.width;

$('.slick-container').slick({
    infinite: false,
    dots: false,
    arrows: false
});

$(document).on('click','.close__hide-menu',function() {
    $('.hide-menu').animate({
        left: '-185px'
    }, 200);
});

$(document).on('click','.burger',function() {
    $('.hide-menu').animate({
        left: '0'
    }, 200);
});