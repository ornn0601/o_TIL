$(function() {

  let winScrollTop;

  let section = $('.ggang_section');
  let offsetTop = [];
  let offsetBottom = [];

  function setValue() {
    winScrollTop = $(window).scrollTop();

    section.each(function(index, obj) {
      offsetTop[index] = $(obj).offset().top;
      offsetBottom[index] = $(obj).offset().top + $(obj).height();
    });
  }

  function checkInSection() {
    if(winScrollTop >= offsetTop[0] && offsetBottom[0] > winScrollTop) {
      sectionActive(0);
    } else if(winScrollTop >= offsetTop[1] && offsetBottom[1] > winScrollTop) {
      sectionActive(1)
    } else if(winScrollTop >= offsetTop[2] && offsetBottom[2] > winScrollTop) {
      sectionActive(2)
    } else if(winScrollTop >= offsetTop[3] && offsetBottom[3] > winScrollTop) {
      sectionActive(3)
    }
    // } else if(winScrollTop >= offsetTop[4] && offsetBottom[4] > winScrollTop) {
    //   sectionActive(4)
    // } else if(winScrollTop >= offsetTop[5] && offsetBottom[5] > winScrollTop) {
    //   sectionActive(5)
    // } else if(winScrollTop >= offsetTop[6] && offsetBottom[6] > winScrollTop) {
    //   sectionActive(6)
    // } else if(winScrollTop >= offsetTop[7] && offsetBottom[7] > winScrollTop) {
    //   sectionActive(7)
    // }
  }

  function sectionActive(index) {
    listActive(index);
    changeText(index);
    changeColor(index);
    parallax();
    rotateDevice(index);
  }

  function rotateDevice(index) {
    if(index === 1) {
      $('.cube_box').removeClass('side upper_side back');
      $('.cube_box').addClass('side');
    } else if (index === 2) {
      $('.cube_box').removeClass('side upper_side back');
      $('.cube_box').addClass('upper_side');
    } else if (index === 3) {
      $('.cube_box').removeClass('side upper_side back');
      $('.cube_box').addClass('back');
    } else {
      $('.cube_box').removeClass('side upper_side back');
    }
  }

  function listActive(index) {
    let list = $('.nav_list li a');

    list.removeClass('active');
    list.eq(index).addClass('active');
  }

  function changeText(index) {
    let targetText = $('.fix_tit strong');
    let list = $('.nav_list li a span');
    let getText = list.eq(index).text();

    targetText.text(getText);
  }

  function changeColor(index) {
    let targetText = $('.fix_tit');

    if(index === 1 || index === 2) {
      targetText.addClass('black');
    } else {
      targetText.removeClass('black');
    }
  }

  // cube
  function parallax() {
    let scrollHeight = $('#a').height();
    let scrollRealHeight = scrollHeight - $(window).height();
    let scrollPercent = winScrollTop / scrollRealHeight;
    let percent = scrollPercent * 100;
    let parallaxDistance = 1100; // 회전값
    let moveDistance = parallaxDistance * scrollPercent; // 이동할 값

    let opacityValue = Math.min(1, 1 * scrollPercent);
    
    $('.ggang_section .dim').css({
      opacity: opacityValue
    })

    // $('.cube_box').css({
    //   transform : 'rotateY('+ moveDistance +'deg) rotateX('+ moveDistance +'deg) translateZ(-200px)'
		// });

    // $('.fix_tit').css({
    //   transform : 'rotateY('+ moveDistance +'deg) rotateX('+ moveDistance +'deg) translate3D(-50%, -50%, -200px)'
		// });
  } 


  $('.nav_list li a').click(function() {
    if ($(this.hash).offset()) {
      $('html').animate({
        scrollTop: $(this.hash).offset().top
      }, 500);
    }
  });

  function init()  {
    setValue();
    checkInSection();
  }

  $(window).scroll(function() {
    winScrollTop = $(window).scrollTop();
    checkInSection();
  });

  $(window).resize(function() {
    setValue();
    checkInSection();
  });

  init(); // start

});