/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
// loading screen

$(document).keyup(function(e) {
     if (e.keyCode == 27) { // escape key maps to keycode `27`
        $('.modal').modal('hide');
    }
});

$(document).ready(function () {
    $('nav').fadeIn(2000);
});

// $(header).ready(function () {
//     $('div.loader').fadeOut(600);
// });

//Hoverover image

$('img#profile').mouseenter(function(){
    $('img#profile').attr("src","img/pie.gif");
})

$('img#profile').mouseleave(function(){
    $('img#profile').attr("src","img/profile.jpg");
})

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
})

//Open video on open
$('#portfolioModalTRA').on('show.bs.modal', function (e) {
    $('#portfolioModalTRA  iframe').attr("src", "https://player.vimeo.com/video/98880732?color=ffffff");
})

$('#portfolioModalWED').on('show.bs.modal', function (e) {
    $('#portfolioModalWED iframe').attr("src", "https://www.youtube.com/embed/jX8hcrAGZtY");
})

$('#portfolioModalINT').on('show.bs.modal', function (e) {
    $('#portfolioModalINT iframe').attr("src", "https://www.youtube.com/embed/-0AhpfKFOEM?vq=hd720");
})

$('#portfolioModalMER').on('show.bs.modal', function (e) {
    $('#portfolioModalMER iframe').attr("src", "https://www.youtube.com/embed/KcwBB0xHAfU?vq=hd720");
})


//Close video on close

$('#portfolioModalTRA').on('hide.bs.modal', function (e) {
	$('#portfolioModalTRA iframe').attr("src", "");
})

$('#portfolioModalWED').on('hide.bs.modal', function (e) {
	$('#portfolioModalWED iframe').attr("src", "");
})

$('#portfolioModalINT').on('hide.bs.modal', function (e) {
	$('#portfolioModalINT iframe').attr("src", "");
})

$('#portfolioModalMER').on('hide.bs.modal', function (e) {
	$('#portfolioModalMER iframe').attr("src", "");
})

//Loadcontent on open

