$(function() {

  let el = document.querySelector('.canvas_wrap');
  let canvas = document.createElement('canvas');
  let ctx = canvas.getContext('2d');
  
  let imgLength = 116;
  let imgSrc = '../images/seq/';
  let imgFormat = '.jpg';
  let imgArray = [];
  let imageIterator = 0;

  let imgWidth;
  let imgHeight;
  
  let windowWidth = $(window).width();
  let mobileSize = 1024;
  let isMobile;
  
  let pcImgSize = [1920, 1080];
  let moImgSize = [640, 360];
  
  let scrollBody = $('.fix_motion');
  let scrollHeight;
  let scrollRealHeight;
  let winScrollTop;
  let sectionOffsetTop;
  let sectionScrollTop;
  let scrollPercent;
  let percent;
  

  function setProperty() {
    scrollHeight = scrollBody.height();
    scrollRealHeight = scrollHeight - $(window).height();
    winScrollTop = $(window).scrollTop();
    sectionOffsetTop = scrollBody.offset().top;
    sectionScrollTop = winScrollTop - sectionOffsetTop;
    scrollPercent = sectionScrollTop / scrollRealHeight;
    percent = scrollPercent * 100;

    windowWidth = $(window).width();
    isMobile = windowWidth > mobileSize ? false : true;

    imgWidth = !isMobile ? pcImgSize[0] : moImgSize[0];
    imgHeight = !isMobile ? pcImgSize[1] : moImgSize[1];
  }

  function setCanvas() {
    canvas.width = imgWidth;
    canvas.height = imgHeight;
  }

  function scrollFunc() {
		// let sequence = Math.max(imgLength-imgLength, Math.min(Number((imgLength-imgLength - (imgLength - imgLength - imgLength * scrollPercent)).toFixed(0)), imgLength)); //이미지 시퀀스 번호 구합니다.
		let sequence = Math.min(imgLength, Math.max(0, Number((imgLength * scrollPercent).toFixed(0)))); //이미지 시퀀스 번호 구합니다.

		renderCanvas(sequence);
		contentIn();
	};

	function renderCanvas(sequence) {
		ctx.clearRect(0, 0, imgWidth, imgHeight);
		ctx.drawImage(imgArray[sequence], 0, 0, imgWidth, imgHeight);
	};

  function contentIn() {
    if(percent >= 39 && percent < 45) {
      $('.fix_motion .txt.pos1').addClass('active');
    }
    if(percent >= 45 && percent < 51) {
      $('.fix_motion .txt.pos2').addClass('active');
    }
    if(percent >= 51) {
      $('.fix_motion .txt.pos3').addClass('active');
    }

    if(percent > 62 || percent < 38) {
      $('.fix_motion .txt.pos1').removeClass('active');
      $('.fix_motion .txt.pos2').removeClass('active');
      $('.fix_motion .txt.pos3').removeClass('active');
    }
  }
  
  // 이벤트를 편하게 관리하기 위한 함수
  function bindEvent() {
    $(window).scroll(function() {
      setProperty();
      scrollFunc();

      $(window).resize(function() {
        setProperty();
        setCanvas();
        scrollFunc();
      });
    });
  }

  function init() {
    el.appendChild(canvas);

    for(let i = 0; i <= imgLength; i++) {
      let img = new Image();
      let path = imgSrc + i + imgFormat;

      img.src = path;

      // 이미지가 모두 로드 된 후 실행
      img.onload = function() {
        imageIterator += 1;

        if(imageIterator === imgLength) {
          setProperty();
          setCanvas();
          bindEvent();
          scrollFunc();
        }
      }

      imgArray.push(img);
    }
  }

  init(); // start

});