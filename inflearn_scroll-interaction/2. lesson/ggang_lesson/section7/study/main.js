$(function() {

  let scrollBody = $('.fix_motion');
  let titText = scrollBody.find('.intro_txt');
  let maskLeft = scrollBody.find('.left_mask');
  let maskRight = scrollBody.find('.right_mask');
  let bgImg = scrollBody.find('.bg_img');
  let endingContent = scrollBody.find('.ending_txt');

  let scrollHeight; // 스크롤 높이
  let scrollRealHeight;
  let sectionOffsetTop;
  let winScrollTop;
  
  let sectionScrollTop;
  let scrollPercent;
  let percent;

  function setProperty() {
    scrollHeight = scrollBody.height(); // 스크롤의 총 높이
    sectionOffsetTop = scrollBody.offset().top;

    scrollRealHeight = scrollHeight - $(window).height();
    winScrollTop = $(window).scrollTop();
    sectionScrollTop = winScrollTop - sectionOffsetTop;

    scrollPercent = sectionScrollTop / scrollRealHeight; // 비율
    percent = scrollPercent * 100; // 백분율

    console.log(scrollHeight);
  }

  function motionRender() {
    let maskStartValue = 50;
    let mastEndValue = 0;
    let maskVal = Math.max(mastEndValue, maskStartValue - (scrollPercent * maskStartValue));
    
    let zoomValue = 2;
    let zoomOutValue = 1;
    let scaleVal = Math.max(zoomOutValue, zoomValue - (scrollPercent * zoomValue));
    
    // mask
    maskLeft.css({
      width: maskVal + '%'
    });
    maskRight.css({
      width: maskVal + '%'
    });

    // bg
    bgImg.css({
      transform: 'scale(' + scaleVal + ')'
    });
    
    // 인트로 퇴장
    if (percent > 0.3) {
      titText.addClass('active');
    } else {
      titText.removeClass('active');
    }

    // 엔딩 등장
    if (percent >= 70) {
      endingContent.addClass('active');
    } else {
      endingContent.removeClass('active');
    }
  }

  function changeOverlap() {
    setProperty();
    motionRender();
  }

  function init() {
    changeOverlap();
    bindEvent();
  }

  function bindEvent() {
    $(window).scroll(function(e) {
      changeOverlap();
    });
  
    $(window).resize(function() {
      changeOverlap();
    });
  }
  
  init(); // start

});