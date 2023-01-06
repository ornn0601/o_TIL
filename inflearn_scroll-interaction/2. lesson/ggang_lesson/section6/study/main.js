$(function() {

  // ********** ********** **********
  // sec01 : 애니메이션 on
  setTimeout (function() {
    $('.sec01').addClass('active');
  }, 200);

  // ********** ********** **********
  // section_today
  function countDate() {
    let el = $('.date_count');
    let date = new Date();

    // 문자열로 변환 후 진행
    let todayDate = String(date.getFullYear()) + String(date.getMonth() + 1) + String(date.getDate());
    let resultArray = [];
    resultArray = todayDate.split(''); // 날자를 분리하여 담음

    let rolling = 24;
    
    // resultArray.forEach(val, inx) {}
    $.each(resultArray, function(idx, val) {
      let number = Number(val);
      let numberArray = [];
      let countBox = $('<div class="count_box" />');

      // 롤링 될 갯수 만큼 회전 될 요소 생성
      for (let i = 0; i <= rolling; i++) {
        let sum = number + i;
        let num = sum >= 10 ? Number(String(sum).split('')[1]) : sum;
        numberArray[i] = num;
      }
      numberArray.reverse();

      // 생성된 요소를 <span></span>로 만든 후 countBox에 추가
      numberArray.forEach(function(val) {
        let countValue = $('<span>', {
          text: val
        });
        countValue.appendTo(countBox);
      });

      // 최종 엘리먼트에 추가함
      // 딜레이와 큐를 이용해 롤링 타이밍을 처리
      countBox.appendTo(el).delay(idx * 300).queue(function() {
        $(this).addClass('active');
      })
      /*
      setTimeout(function() {
        countBox.classList.add('active');
      }, idx * 300);
      */
    })
  }
  countDate();


  // ********** ********** **********
  // section_product
  setTimeout(function() {
    $('.section_product .prd_mask').addClass('active');
    $('.section_product .text_img').addClass('active');
  }, 200);


  // ********** ********** **********
  // section_textmask 텍스트 오버랩
  setTimeout(function() {
    $('.section_textmask').addClass('active');
  }, 200);


  // ********** ********** **********
  // section_overlap 배경 오버랩
  setTimeout(function() {
    $('.section_overlap').addClass('active');
  }, 200);

});
