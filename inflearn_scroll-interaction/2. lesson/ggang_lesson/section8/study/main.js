$(function() {
  
  let scrollBody = $('.fix_motion .fix_wrap');
  let scrollHeight;
  let scrollRealHeight;
  let winScrollTop;
  let sectionOffsetTop;
  let sectionScrollTop;
  let scrollPercent;
  let percent;

  let isMobile;

  function setProperty() {
    scrollHeight = scrollBody.height();
    scrollRealHeight = scrollHeight - $(window).height();
    winScrollTop = $(window).scrollTop();
    sectionOffsetTop = scrollBody.offset().top;
    sectionScrollTop = winScrollTop - sectionOffsetTop;
    scrollPercent = sectionScrollTop / scrollRealHeight;
    percent = scrollPercent * 100;

    // 반응형 확인
    isMobile = $(window).width() <= 1024 ? true : false;
  }

  function contentIn() {

    let deviceImg = $('.device_fix .slide_wrap figure');
    let imgWidth = deviceImg.width();

    if (percent >= 10 && percent < 35) {
      imageChange(imgWidth * 0);
      $('.fix_motion .text_box .txt01').addClass('active');
    }

    if (percent >= 35 && percent < 60) {
      imageChange(imgWidth * 1);
      $('.fix_motion .text_box .txt02').addClass('active');
    }

    if (percent >= 60 && percent < 85) {
      imageChange(imgWidth * 2);
      $('.fix_motion .text_box .txt03').addClass('active');
    }

    if (percent >= 85) {
      imageChange(imgWidth * 3);
      $('.fix_motion .text_box .txt04').addClass('active');
    }

    if (percent < 12) {
      $('.fix_motion .text_box .txt01').removeClass('active');
      $('.fix_motion .text_box .txt02').removeClass('active');
      $('.fix_motion .text_box .txt03').removeClass('active');
      $('.fix_motion .text_box .txt04').removeClass('active');
    }
  }

  function imageChange(moveX) {
    let img = $('.device_fix .slide_wrap .slide');
    img.css ({
      transform: 'translateX(' + -moveX + 'px)'
    });
  }

  function contentMobile() {

    let deviceImg = $('.device_fix .slide_wrap figure');
    let imgWidth = deviceImg.width();

    if (percent >= 5 && percent < 25) {
      imageChange(imgWidth * 0);
      $('.fix_motion .text_box p').removeClass('active');
      $('.fix_motion .text_box .txt01').addClass('active');
    }

    if (percent >= 25 && percent < 45) {
      imageChange(imgWidth * 1);
      $('.fix_motion .text_box p').removeClass('active');
      $('.fix_motion .text_box .txt02').addClass('active');
    }

    if (percent >= 45 && percent < 65) {
      imageChange(imgWidth * 2);
      $('.fix_motion .text_box p').removeClass('active');
      $('.fix_motion .text_box .txt03').addClass('active');
    }

    if (percent >= 65 && percent <= 85) {
      imageChange(imgWidth * 3);
      $('.fix_motion .text_box p').removeClass('active');
      $('.fix_motion .text_box .txt04').addClass('active');
    }

    if (percent > 85) {
      $('.fix_motion .text_box p').removeClass('active');
    }

  }

  function scrollFunc() {
    setProperty();

    if(isMobile) {
      contentMobile();
    } else {
      contentIn();
    }
  }


  function init() {
    scrollFunc();
  }

  $(window).scroll(function(e) {
    scrollFunc();
  });
  
  $(window).resize(function() {
    scrollFunc();
  });
  
  init(); // start

});