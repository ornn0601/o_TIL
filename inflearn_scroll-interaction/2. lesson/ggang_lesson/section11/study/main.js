$(function() {

  let svgPath = $('#ggang_svg path');
  let isPlay = false;

  function svgSet() {
    svgPath[0].style.strokeDasharray = svgPath[0].getTotalLength() + ',' + svgPath[0].getTotalLength();
    svgPath[0].style.strokeDashoffset = svgPath[0].getTotalLength();
  }

  function drawSvg() {
    let winScrollTop = $(window).scrollTop();
    let scrollHeight = $(document).height();
    let scrollRealHeight = scrollHeight - $(window).height();
    let parallaxPercent = (winScrollTop / scrollRealHeight * 100) * 1.5;

    let parallaxStartValue = svgPath[0].getTotalLength();
    let parallaxMoveDistance = Math.max(parallaxStartValue - parallaxStartValue, Math.min(parallaxStartValue, parallaxStartValue - (parallaxStartValue * (parallaxPercent/100)))); 

    svgPath[0].style.strokeDashoffset = parallaxMoveDistance;

    if(parallaxPercent >= 100 && !isPlay) {

      isPlay = true;
      $('.video_wrap').css({ opacity: 1 });
      
      setTimeout(function() {
        $('.video_wrap').find('video')[0].play();
        $('.svg_wrap').css({ opacity: 0 });
      }, 500);

    } else if (parallaxPercent < 100 && isPlay) {

      isPlay = false;
      $('.video_wrap').css({ opacity: 0 });
      $('.video_wrap').find('video')[0].pause();
      $('.video_wrap').find('video')[0].currentTime = 0;
      $('.svg_wrap').css({ opacity: 1 });
    }
  }

  function init()  {
    svgSet();
    drawSvg();
  }

  $(window).scroll(function() {
    drawSvg();
  });

  $(window).resize(function() {

  });

  init(); // start

});