$(document).ready(function () {
	function toggleOpacity() {
		$('.moon').animate({ opacity: 0.5 }, 1000).animate({ opacity: 1 }, 1000, toggleOpacity);
	}

	toggleOpacity();
});

function init() {
	var style = ['style1', 'style2', 'style3', 'style4'];
	var tam = ['tam1', 'tam1', 'tam1', 'tam2', 'tam3'];
	var opacity = ['opacity1', 'opacity1', 'opacity1', 'opacity2', 'opacity2', 'opacity3'];

	function getRandomArbitrary(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}

	var estrela = '';
	var qtdeEstrelas = 250;
	var noite = document.querySelector('.constelacao');
	var widthWindow = window.innerWidth;
	var heightWindow = window.innerHeight;

	for (var i = 0; i < qtdeEstrelas; i++) {
		estrela +=
			"<span class='estrela " +
			style[getRandomArbitrary(0, 4)] +
			' ' +
			opacity[getRandomArbitrary(0, 6)] +
			' ' +
			tam[getRandomArbitrary(0, 5)] +
			"' style='animation-delay: ." +
			getRandomArbitrary(0, 9) +
			's; left: ' +
			getRandomArbitrary(0, widthWindow) +
			'px; top: ' +
			getRandomArbitrary(0, heightWindow) +
			"px;'></span>";
	}

	noite.innerHTML = estrela;
}

window.onload = init;
