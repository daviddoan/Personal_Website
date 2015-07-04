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

//Close video on close

$('#portfolioModal1').on('hidden.bs.modal', function (e) {
	$('#portfolioModal1 iframe').attr("src", $("#portfolioModal1 iframe").attr("src"));
})

$('#portfolioModal2').on('hidden.bs.modal', function (e) {
	$('#portfolioModal2 iframe').attr("src", $("#portfolioModal2 iframe").attr("src"));
})

$('#portfolioModal3').on('hidden.bs.modal', function (e) {
	$('#portfolioModal3 iframe').attr("src", $("#portfolioModal3 iframe").attr("src"));
})

$('#portfolioModal4').on('hidden.bs.modal', function (e) {
	$('#portfolioModal4 iframe').attr("src", $("#portfolioModal4 iframe").attr("src"));
})

$('#portfolioModal5').on('hidden.bs.modal', function (e) {
	$('#portfolioModal5 iframe').attr("src", $("#portfolioModal5 iframe").attr("src"));
})

$('#portfolioModal6').on('hidden.bs.modal', function (e) {
	$('#portfolioModal6 iframe').attr("src", $("#portfolioModal6 iframe").attr("src"));
})