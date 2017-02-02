//var wow = new WOW();
//wow.init();
var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();

 
// scroll to links
$('a').on('click', jump);
$('#first-link').css('background-color', 'white');

function jump() { 
	event.preventDefault(); 

	$('.side-nav-fill a').css('background-color', 'transparent')

	// get the link we clicked on
	var $currentTarget = $(event.currentTarget);

	$currentTarget.css('background-color', 'white');

	// get the name of the ID specific
	var targetId = $currentTarget.attr('href');

	//
	var offsetTop = $(targetId).offset().top;

	$('html, body').animate({
		scrollTop: offsetTop
	}, 1000);
}

// make container height = window height
var windowHeight = $(window).height();
$('section').css('height',$(window).height());


// slick slider
$('.slick-3, .slick-9').slick({
  dots: true,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true
});