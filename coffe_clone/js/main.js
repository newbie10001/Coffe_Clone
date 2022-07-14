
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click',function()	{
    searchInputEl.focus();
});

// 검색창 요소 내부 실제 input 요소에 포커스 되면 실행.
searchInputEl.addEventListener('focus', function ()	{
	searchEl.classList.add('focused');
	searchInputEl.setAttribute('placeholder', '통합검색');
});
//검색창 요소 내부 실제 input 요소에서 포커스가 해제 되면 실행.
searchInputEl.addEventListener('blur', function ()	{
    searchEl.classList.remove('focused');
		searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector("#to-top");

window.addEventListener('scroll', function()	{
	console.log(window.scrollY);
	if (window.scrollY > 500)	{
		gsap.to(badgeEl, .6,	{
			opacity:0,
			dispaly:"none"
		});
		gsap.to(toTopEl, .6,	{
			opacity:1,
			x:0
		});
	}
	else	{
		gsap.to(badgeEl, .6,	{
			opacity:1,
			display:"block"
		});
		gsap.to(toTopEl, .6,	{
			opacity:0,
			x: 100
		});
	}
});

toTopEl.addEventListener('click', function()	{
	gsap.to(window, .6,	{
		scrollTo: 0
	});
});




const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function(fadeEl, index)	{
		gsap.to(fadeEl, 1,	{
			delay: (index+1) * .7,
			opacity:1
		});
});

new Swiper('.notice .swiper',	{
	direction: 'vertical',
	autoplay: true,
	loop: true
});

new Swiper('.promotion .swiper',	{
	// direction: 'horizontal, // 수평 슬라이드
	autoplay: true, // 자동 재생 여부
	loop: true, // 반복 재생 여부
	slidesPerView: 3, // 한 번에 보여줄 슬라이듣 개수
	spaceBetween: 10, // 슬라이드 사이 여백
	centeredSlides: true, // 1번 슬라이드 가운데 보이기 
	pagination:	{ // 페이지 번호 사용 
		el: '.promotion .swiper-pagination', // 페이지 번호 요소
		clickable: true, // 사용자의 페이지 번호 제어 여부
	navigation:{
		prevEl: '.promotion .swiper-button-prev', // 이전 버튼 요소
		nextEL: '.promotion .swiper-button-next' // 다음 버튼 요소
	}
	}
	
});

const promotionEl = document.querySelector('section.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');

promotionToggleBtn.addEventListener('click', function()	{
	if (promotionEl.classList.contains('hide'))	{
		promotionEl.classList.remove('hide');
	} else	{
		promotionEl.classList.add('hide');
	}
	}
);

const spyEls = document.querySelectorAll("section.scroll-spy");

spyEls.forEach(function	(spyEl)	{
	new ScrollMagic
	.Scene({ //감시할 장면(scene)을 추가
		triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
		triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
	}) 
	.setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
	.addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당(필수!)
});


new Swiper('.awards .swiper',	{
	autoplay:true,
	loop: true,
	spaceBetween: 30,
	slidesPerView: 5,
	navigation:	{
		prevEl: '.awards .swiper-button-prev',
		nextEL: '.awards .swiper-button-next'
	}
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();

