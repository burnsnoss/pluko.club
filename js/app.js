function getRandomInRange(range) {
	return Math.floor(Math.random(range[1] - range[0])) + range[0]; 
};

function generateFadeTimes() {

	var album_range    = [1000, 2000];
	var title_range    = [1500, 2500];
	var preorder_range = [2000, 3000];

	var album_time        = getRandomInRange(album_range);
	var title_time        = getRandomInRange(title_range);
	var preorder_time     = getRandomInRange(preorder_range);

	var times = {
		album: album_time,
		title: title_time,
		preorder: preorder_time
	};

	return times;
};

function fadeInElements() {
	var times = generateFadeTimes();
	$('#album-img').fadeIn(times.album);
	$('#album-title').fadeIn(times.title);
	$('#preorder-button').fadeIn(times.preorder);
	return;
};

$('document').ready(function() {
	// fadeInElements();
	// listen();
});

$('#music-link').click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#music-header").offset().top
    }, 800);
});

$('#contact-link').click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#contact-header").offset().top
    }, 800);
});

