function getRandomInRange(range) {
	return Math.floor(Math.random(range[1] - range[0])) + range[0]; 
};

function generateFadeTimes() {
	// Fade rates:
	//  album cover  3000-4000 ms
	//  title        1200-2500 ms
	//  nav links    1500-3500 ms
	//  preorder     4000-5000 ms

	var album_range    = [8000, 10000];
	var title_range    = [5200, 7000];
	// var nav_range      = [5500, 7500];
	var preorder_range = [7500, 8500];

	var album_time        = getRandomInRange(album_range);
	var title_time        = getRandomInRange(title_range);
	// var nav_preorder_time = getRandomInRange(nav_range);
	// var nav_listen_time   = getRandomInRange(nav_range);
	var preorder_time     = getRandomInRange(preorder_range);

	var times = {
		album: album_time,
		title: title_time,
		// nav_preorder: nav_preorder_time,
		// nav_listen: nav_listen_time,
		preorder: preorder_time
	};

	return times;
};

function fadeInElements() {
	var times = generateFadeTimes();
	$('#album-img').fadeIn(times.album);
	$('#navbar-header').fadeIn(times.title);
	// $('#preorder-nav').fadeIn(times.nav_preorder);
	// $('#listen-nav').fadeIn(times.nav_listen);
	$('#preorder-container').fadeIn(times.preorder);
};

$('document').ready(function() {
	fadeInElements();
});


