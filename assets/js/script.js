$(document).ready(function() {




//clickable more jsdelivr

  $('.more-button').click(function() {
		window.open($(this).attr("data-href"), '_blank');
		return false;
	})

// typing stuff
	var typed = new Typed("#animated-text", {
		strings: ["SOFTWARE ENGINEER", "WEB DEVELOPER", "HIP-HOP CONNOISSEUR", "SKATEBOARDER", "A BIG DORK"],
		backSpeed: 80,
		typeSpeed: 200,
		loop: true,
		loopCount: Infinity
	});

// who dis guy appearance
	var $whoDisGuy = $('.who-dis-guy');

	$whoDisGuy.waypoint(function() {
		console.log('whodisguy waypoint!!');
	  $whoDisGuy.addClass('appear-animation');
	}, { offset: '90%'});


//portfolio text appearance

	var $portfolio = $('.portfolio-text');

	$portfolio.waypoint(function() {
		console.log('hehe');
		$portfolio.addClass('port-text-ani');

	}, {offset: '90%'});

	//line3 text appearance

		var $line3 = $('.line3');

		$line3.waypoint(function() {
			$line3.addClass('line3Ani');

		}, {offset: '95%'});

// line2 appearance
	var $line2 = $('.line2');

  $line2.waypoint(function() {
		console.log('line2 waypoint!');
		$line2.addClass('line-appear-animation');
	}, { offset: '95%'});


//description apperance
	var $whoHeBe = $('.who-he-be');

  $whoHeBe.waypoint(function() {
		$whoHeBe.addClass('who-he-be-animation');
	}, { offset: '85%'});


//fb button roll-in
  var $buttons = $('.more-buttons');
	$buttons.waypoint(function() {
		$buttons.addClass('more-buttons-animate');
	}, { offset: '95%'});


// more button appear

	var $morebutton = $('.more-button');
	$morebutton.waypoint(function() {
		$morebutton.addClass('more-button-animate');
	}, { offset: '105%'});






	$("#about-button").click(function() {
		var secondPage = document.getElementById("second-page-container");
		secondPage.scrollIntoView(false);
	})

	$("#home-button").click(function() {
		var secondPage = document.getElementById("first-page-container");
		secondPage.scrollIntoView(false);
	})
	$("#portfolio-button").click(function() {
		var secondPage = document.getElementById("third-page-container");
		secondPage.scrollIntoView(false);
	})


});
