/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/


var navOpen=false;

function myFunction() {
	var x = document.getElementById("nav");
	if (x.className === "topnav") {
	  x.className += " responsive";
	} else {
	  x.className = "topnav";
	}
	
  }


(function ($) {

	var $window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
	breakpoints({
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: [null, '736px']
	});

	// Play initial animations on page load.
	$window.on('load', function () {

		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Scrolly.
	$('#nav a, .scrolly').scrolly({
		speed: 1000,
		offset: function () { return $nav.height(); }
	});

})(jQuery);


function getProject(){
	var prjt = document.getElementById('project').href;

	console.log(prjt.split('#')[1]);
	if (prjt.split('#')[1] == '#vehicle'){
		var form = housePrjt();
		document.getElementById('main-container').innerHTML = form;
	}
}

function housePrjt(){

	var form = '<form> <label for="condition">Condition</label><select id="condition" name="condition"></select>" <button class="submit" onclick="onClickedPredict()" type="button" >Predict</button></form>'

	return form;
}