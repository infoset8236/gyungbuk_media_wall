$(function () {
	var mySwiper = new Swiper('.notice_slider', {
		slidesPerView: 1,
		direction: 'horizontal',
		reverseDirection: true,
		freeMode: true,
		observe: true,
		observeParent: true,
		speed: 58000,
		pagination: {
			el: '.swiper-pagination',
		},
		keyboard: {
			enabled: true,
			onlyInViewport: false,
		},
		mousewheel: {
			invert: true,
		},
		autoplay: {
			delay: 0,
		},
		loop: true,
	});
});
