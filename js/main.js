let typed = new Typed('#typed', {
	strings: ['Developer', 'Designer'],
	stringsElement: null,
	typeSpeed: 100,
	startDelay: 3000,
	backSpeed: 50,
	smartBackspace: false,
	shuffle: false,
	backDelay: 2000,
	fadeOut: false,
	fadeOutClass: 'typed-fade-out',
	fadeOutDelay: 500,
	loop: true,
	loopCount: Infinity,
	showCursor: true,
	cursorChar: '|',
	autoInsertCss: true,
	attr: null,
	bindInputFocusEvents: false,
	contentType: 'html',
});

window.addEventListener('scroll', function () {
	let nav = document.querySelector('nav');
	nav.classList.toggle('sticky', window.scrollY > 1);
	let downArrow = document.querySelector('#down-arrow');
	downArrow.classList.toggle('down-arrow-scroll', window.scrollY > 50);
});

// Quote generator
var quoteList = [
	{
		quote: '"Knowledge is power."',
		author: 'Francis Bacon',
	},
	{
		quote: '"First, solve the problem. Then, write the code."',
		author: 'John Johnson',
	},
	{
		quote: '"Code is like humor. When you have to explain it, it’s bad."',
		author: 'Cory House',
	},
	{
		quote: '"Talk is cheap. Show me the code."',
		author: 'Linus Torvalds',
	},
	{
		quote: '"If you don’t love it, you’re going to fail."',
		author: 'Steve Jobs',
	},
	{
		quote: '"Before software can be reusable it first has to be usable."',
		author: 'Ralph Johnson',
	},
];

function randomQuote() {
	let random1 = Math.floor(Math.random() * quoteList.length);
	let random2;
	while (random1 == random2) {
		random1 = Math.floor(Math.random() * quoteList.length);
	}
	let quote = (document.getElementById('quote').innerHTML = quoteList[random1].quote);
	let author = (document.getElementById('author').innerHTML = quoteList[random1].author);
	random1 = random2;
}
randomQuote();
setInterval(randomQuote, 7000);

// active class and scroll

$(function () {
	$(window).on('scroll', function () {
		var WindowTop = $(window).scrollTop();
		$('.page-scroll').each(function (i) {
			if (WindowTop > $(this).offset().top - 500 && WindowTop < $(this).offset().top + $(this).outerHeight(true)) {
				$('.navbar > .wrapper > .nav-links > li > a').removeClass('active');
				$('.navbar li').eq(i).find('a').addClass('active');
			}
		});
	});
	$('a[href*=\\#]:not([href=\\#])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate(
					{
						scrollTop: target.offset().top,
					},
					1000
				);
				return false;
			}
		}
	});
});

// Burger menu
const navSlide = () => {
	const burger = document.querySelector('#burger-menu');
	const navMobile = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');
	burger.addEventListener('click', () => {
		navMobile.classList.toggle('nav-active');
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = '';
			} else {
				link.style.animation = `navFade 0.5s ease forwards ${index / 7 + 0.5}s`;
			}
		});
		burger.classList.toggle('cross');
	});
};

navSlide();

var rellax = new Rellax('.rellax', {
	speed: -2,
	center: false,
	wrapper: null,
	round: true,
	vertical: true,
	horizontal: false,
});
AOS.init();
