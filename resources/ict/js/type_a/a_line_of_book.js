function animate() {
	$container = $('.li_book_tit');
	const text = $container.text();
	const $elements = text.split('').map(s => $(`<span>${s}</span>`));

	$container.html($elements);
	$container.show();

	$elements.forEach(function ($el, i) {
		$el
			.css({
				top: -100,
				opacity: 0,
			})
			.delay(100 * i)
			.animate(
				{
					top: 0,
					opacity: 1,
				},
				8000,
				'easeOutExpo'
			);
	});
}
