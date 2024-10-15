var clock;
// Instantiate a coutdown FlipClock 172800 = 48hrs
clock = $('.clock').FlipClock(5, {
	clockFace: 'HourlyCounter',
	countdown: true,
	showSeconds: true,
	callbacks: {
		start: function () {
			$('.message').html('The clock has started!');
		},
		stop: function () {
			$('.message').html('The clock has stopped!');
		},
	},
});
