$(function() {

  // 변수
  let scrollBody = $('.motion_area');
  let bgContent = scrollBody.find('.bg');
  let ggangBody = scrollBody.find('.motion_ggang');
  let moonBody = scrollBody.find('.motion_moon');

  let scrollHeight;
  let scrollRealHeight;
  let winScrollTop;
  let percent;
  let parallaxDistance = 210;
  let moveDistance;

  // 스크롤 거리 계산
  function setProperty() {
    scrollHeight = scrollBody.height();
    scrollRealHeight = scrollHeight - $(window).height();
    winScrollTop = $(window).scrollTop();

    let scrollPercent = (winScrollTop / scrollRealHeight);
    percent = scrollPercent * 100;
    console.log(scrollPercent);

    moveDistance = scrollPercent * parallaxDistance;
    console.log(moveDistance);
  }

  // 배경
  function changeBackground() {
    if (percent < 25) {
      setBackground(0);
    } else if (percent <= 25 && percent < 50) {
      setBackground(1);
    } else if (percent <= 50 && percent < 75) {
      setBackground(2);
      moonBody.removeClass('active');
    } else if (percent <= 75 && percent <= 100) {
      setBackground(3);
      moonBody.addClass('active');
    }
  }

  function setBackground(index) {
    bgContent.removeClass('active');
    bgContent.eq(index).addClass('active');
  }

  // 캐릭터 이동
  function parallaxMove() {
    ggangBody.css({
      transform: 'translate(0px,' + moveDistance + 'px)'
    })
  }

  // 함수 모음
  function motionGgang() {
    setProperty();
    changeBackground();
    parallaxMove();
  }

  function init() {
    motionGgang();
  }

  // 스크롤 이벤트 바인딩
  $(window).scroll(function(e) {
    motionGgang();
  });

  // 반응형 : 스크롤 거리가 변경되면 오류 발생, 위치 재조정
  $(window).resize(function() {
    motionGgang();
  });

  // start
  init();

});