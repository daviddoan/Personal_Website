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

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
})

//Open video on open
$('#portfolioModal1').on('show.bs.modal', function (e) {
    $('#portfolioModal1 iframe').attr("src", "https://player.vimeo.com/video/98880732?color=ffffff");
})

$('#portfolioModal2').on('show.bs.modal', function (e) {
    $('#portfolioModal2 iframe').attr("src", "https://www.youtube.com/embed/jX8hcrAGZtY");
})

$('#portfolioModal3').on('show.bs.modal', function (e) {
    $('#portfolioModal3 iframe').attr("src", "https://www.youtube.com/embed/-0AhpfKFOEM?vq=hd720");
})

$('#portfolioModal4').on('show.bs.modal', function (e) {
    $('#portfolioModal4 iframe').attr("src", "https://www.youtube.com/embed/KcwBB0xHAfU?vq=hd720");
})

$('#portfolioModal5').on('show.bs.modal', function (e) {
    $('#portfolioModal5 iframe').attr("src", "");
})

$('#portfolioModal6').on('show.bs.modal', function (e) {
    $('#portfolioModal6 iframe').attr("src", "");
})

//Close video on close

$('#portfolioModal1').on('hide.bs.modal', function (e) {
	$('#portfolioModal1 iframe').attr("src", "");
})

$('#portfolioModal2').on('hide.bs.modal', function (e) {
	$('#portfolioModal2 iframe').attr("src", "");
})

$('#portfolioModal3').on('hide.bs.modal', function (e) {
	$('#portfolioModal3 iframe').attr("src", "");
})

$('#portfolioModal4').on('hide.bs.modal', function (e) {
	$('#portfolioModal4 iframe').attr("src", "");
})

$('#portfolioModal5').on('hide.bs.modal', function (e) {
	$('#portfolioModal5 iframe').attr("src", "");
})

$('#portfolioModal6').on('hide.bs.modal', function (e) {
	$('#portfolioModal6 iframe').attr("src", "");
})