let myImageSlider = new Swiper('.image-slider', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',

	},
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true
	},
	simulateTouch: true,
	touchRatio: 1,
	touchAngle: 45,
	grabCursor: true,
	slideToClickedSlide: false,
	hashNavigation: {
		watchState: true,
	},
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},
	mousewheel: {
		sensitivity: 1,
	},
	autoHeight: false,
	slidesPerView: 3,
	watchOverflow: true,
	spaceBetween: 25,
	slidesPerGroup: 1,
	centeredSlides: false,
	initialSlide: 0,
	slidesPerColumn: 1,
	loop: false,
	loopedSlides: 0,
	freeMode: true,
	speed: 800,
	direction: 'horizontal',
	effect: 'slide',
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 10
		},
		480: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		}
	},
	preloadImages: false,
	lazy: {
		loadOnTransitionStart: false,
		loadPrevNext: false,
	},
	watchSlidesProgress: true,
	watchSlidesVisibility: true,
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
});

