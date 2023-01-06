$(function() {

  let winScrollTop;
  let sectionMainVisual = $('.sec_mainvis');
  let header = $('.header_wrap');
  let sectionOverlap = $('.sec_list_overlap');
  let sectionMainTop;
  let sectionMainBottom;
  let sectionIsMoving = false;

  let parallaxBody = $('.sec_list_overlap');
  let parallaxList = $('.sec_parallax .img_box');

  let parallaxOffsetTop;
  let parallaxThisTop;
  let parallaxSpeed = 1200;
  let parallaxPercent;
  let parallaxStartValue = 200;
  let parallaxMoveDistance;

  // let isMac = navigator.platform.indexOf('Mac') >= 0;
  // console.log(navigator.platform, isMac);

  // 스크롤할때 계속 호출되어야 하는 함수
  // Math.max(A,B) : 두 값 중 큰 값을 반환, 상대 값이 - 가 들어가면 0이 반환 됨
  function setProperty() {
    winScrollTop = $(window).scrollTop();
    sectionMainTop = sectionMainVisual.offset().top; // el의 y좌표값을 가져옴
    sectionMainBottom = sectionMainTop + sectionMainVisual.height();

    parallaxOffsetTop = parallaxBody.offset().top;
    parallaxThisTop = winScrollTop - parallaxOffsetTop; // 패럴렉스 섹션에 도착 0
    parallaxPercent = (parallaxThisTop / parallaxSpeed) * 100; // (0 / 1200) * 100
    parallaxMoveDistance = Math.max(0, Math.min(parallaxStartValue, parallaxStartValue - (parallaxStartValue * (parallaxPercent / 100)))); // parallaxStartValue - parallaxStartValue = 0
  }

  // 다중 패럴렉스
  function motionParallax() {
    if (parallaxPercent > 20) {
			$('.sec_parallax').addClass('active');
		} else {
			$('.sec_parallax').removeClass('active');
		}

    /*action*/
		parallaxList.eq(0).css({ // 계산된 값을 각각의 엘리먼에 css를 이용해 적용합니다
			transform : 'translate(0px,'+ parallaxMoveDistance +'px)'
		});

		parallaxList.eq(1).css({ // 계산된 값을 css를 이용해 적용합니다
			transform : 'translate(0px,'+ parallaxMoveDistance * 2.1 +'px)'
		});

		parallaxList.eq(2).css({ // 계산된 값을 css를 이용해 적용합니다
			transform : 'translate(0px,'+ parallaxMoveDistance * 2.5 +'px)'
		});

		parallaxList.eq(3).css({ // 계산된 값을 css를 이용해 적용합니다
			transform : 'translate(0px,'+ parallaxMoveDistance * 3.5 +'px)'
		});

		parallaxList.eq(4).css({ // 계산된 값을 css를 이용해 적용합니다
			transform : 'translate(0px,'+ parallaxMoveDistance * 4.2 +'px)'
		});

		parallaxList.eq(5).css({ // 계산된 값을 css를 이용해 적용합니다
			transform : 'translate(0px,'+ parallaxMoveDistance * 4.8 +'px)'
		});

		parallaxList.eq(6).css({ // 계산된 값을 css를 이용해 적용합니다
			transform : 'translate(0px,'+ parallaxMoveDistance * 5.3 +'px)'
		});

		parallaxList.eq(7).css({ // 계산된 값을 css를 이용해 적용합니다
			transform : 'translate(0px,'+ parallaxMoveDistance * 2.7 +'px)'
		});

		$('.sec_parallax .bg_line').css({ // 계산된 값을 css를 이용해 적용합니다
			transform : 'translate(0px,'+ -parallaxMoveDistance * 3 +'px)'
		});
  }

  // stop() : 대기중인 애니메이션 삭제
  function moveStartRender() {
    if (!header.hasClass('active')) {

      header.addClass('active');
      sectionMainVisual.addClass('active');
      sectionOverlap.addClass('active');

      $('html').stop(true).animate({
        scrollTop: sectionMainBottom + 1 // ie 무한반복 버그 수정
      }, 500, function() {
        sectionIsMoving = false; // 애니메이션 다시 시작
      })

    } else {

      header.removeClass('active');
      sectionMainVisual.removeClass('active');
      sectionOverlap.removeClass('active');

      $('html').stop(true).animate({
        scrollTop: sectionMainTop
      }, 500, function() {
        sectionIsMoving = false; // 애니메이션 다시 시작
      })
    }
  }

  function activeCheck() {
    header.addClass('active');
    sectionMainVisual.addClass('active');
    sectionOverlap.addClass('active');
  }

  // 섹션 이동
  function moveSection() {
    motionParallax();
    setProperty();

    if (winScrollTop > sectionMainTop && winScrollTop < sectionMainBottom) {
      if (!sectionIsMoving) {
        sectionIsMoving = true;
        moveStartRender();
      } 
    }

    // 메인 아래 스크롤
    if (winScrollTop >= sectionMainBottom) {
      activeCheck(); // 새로고침
    }
  }


  function init() {
    moveSection(); // 초기화
  }

  $(window).scroll(function(e) {
    moveSection(); // 초기화
  });
  
  init();
});