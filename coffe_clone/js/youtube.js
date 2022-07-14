var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: 'Tdwetb0Mvyc',
    playerVars: {
        autoplay: true,
        loop: true,
        playlist: 'Tdwetb0Mvyc'
    },
    events: {
        onReady: function	(event)	{
					event.target.mute()
				}
    }
  });
}

gsap.to('.floating1', 1.5,	{
	delay: 1, // 얼마나 늦게 애니메이션을 시작할 것인지 자연 시간을 설정
	y: 15, // ㅣtransform: translateY(수치);`와 같음, 수직으로 얼마나 움직일지 설정.
	repeat: -1, //몇 번 반복하는지를 설정, `-1은 무한 본복.
	yoyo: true, // 한번 재생된 애니메이션을 다시 뒤로 재생.
	ease: Power1.easeInOut // easing  함수 적용.
});
gsap.to('.floating3', 2.5,	{
	display: 1.5,
	y: 20,
	repeat:-1,
	yoyo:true,
	easE: Power1.easeInOut
});