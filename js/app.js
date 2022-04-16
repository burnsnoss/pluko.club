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
	// wavesurfer obj
	var wavesurfer = WaveSurfer.create({
    	container: '#waveform',
    	waveColor: 'white',
    	progressColor: 'yellow',
	scrollParent: true,
	responsive: true,
	normalize: true,
	plugins: [
		Wavesurfer.regions.create({})
	]
	});

	wavesurfer.load('./music/sleep_it_off.mp3');

	wavesurfer.on('ready', function() {
		wavesurfer.play();
	});

	$('#play-btn').html('p l a y');
});


$('#play-btn').click(function() {
    // wavesurfer.playPause();
    if ($('#play-btn').html() == 'p l a y') {
        wavesurfer.play();
        $('#play-btn').html('p a u s e');
    }
    else {
        wavesurfer.pause();
        $('#play-btn').html('p l a y');
    }
});

$('#tour-link').click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#tour-header").offset().top
    }, 800);
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

$('#back-to-the-top').click(function() {
	$('html,body').animate({
		scrollTop: 0
	}, 800);
	return true;
});


