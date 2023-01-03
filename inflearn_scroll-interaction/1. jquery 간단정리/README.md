# jquery 간단 정리

## 1. 로드 방식
```js
// 돔과 이미지등 모든 요소가 로드 된 후 실행
window.onload = function() {
  console.log('load');
}

// 돔이 로드 된 후 실행 : onload보다 조금 더 빠르게 실행될 수 있다.
$(document).ready(function() {
  console.log('ready');
});

// $(document).ready 축약형, 속도 동일함
$(function() {
  console.log('$ready');
})
```

## 2. 인덱스 번호 넘기기
```js
$('.children_list li').on('click', function() {
  let index = $('.children_list li').index(this);
  console.log(index);
});
```

## 3. addClass, removeClass, hasClass
```js
// 클래스 추가
$('.children_list li').eq(1).addClass('active');

// 클래스 삭제
$('.children_list li').eq(1).removeClass('active');

// 클래스 찾기
console.log($('.children_list li').eq(1).hasClass('active')); // true, false
```

## 4. remove, prepend, append, appendTo, wrap
```js
// 엘리먼트 삭제
$('.children_list li').eq(0).remove();

// 엘리먼트 첫번째 요소에 추기
$('.children_list li').prepend('<li>첫째 추가</li>');

// 엘리먼트 마지막 요소에 추가
$('.children_list li').append('<li>첫째 추가</li>');
$('<li>첫째 추가</li>').appendTo('.children_list li');

// 지정한 엘리먼트를 감싸는 엘리먼트 추가
$('.parent').wrap('<div class="wrap">');
``` 

## 5. css, removeAttr, attr
```js
// css 추가
$('.children_list li').eq(0).css ({
  color: 'red'
});

// 엘리먼트 속성 제거
$('.children_list li').eq(0).removeAttr('style');

// 엘리먼트 속성 추가
$('.children_list li').eq(0).attr('style', 'color:red');

// 속성 가져오기
console.log($('.children_list li').eq(0).attr('style'));
```

## 6. each 
```js
// 여러개의 엘리먼트를 반복할 때 사용
$('.children_list li').each(function(index, list) {
  console.log('test');
});
```

## 7. 넓이, 높이, 위치 찾기
```js
// 넓이
console.log($('.children_list li').width()); // 여백 제외
console.log($('.children_list li').outerWidth()); // 여백 포함

// 높이
console.log($('.children_list li').height()); // 여백 제외
console.log($('.children_list li').outerHeight()); // 여백 포함

// 화면 기준
console.log($('.children_list li').offset()); // top, left 좌표
console.log($('.children_list li').offset().top); // top 좌표

// 부모 기준
console.log($('.children_list li').position()); // top, left 좌표
console.log($('.children_list li').position().top); // top 좌표
```

## 8. text
```js
// 텍스트 내용 변경
$('.children_list li').eq(0).text('텍스트 내용');

// 가져오기
console.log($('.children_list li').eq(0).text());
```

## 9. fadeOut, fadeIn, hide, show, slide
```js
// fadeOut, fadeIn
$('.children_list li').eq(0).fadeOut(500);
$('.children_list li').eq(0).fadeIn(500);

// hide, show
$('.children_list li').eq(0).hide(500);
$('.children_list li').eq(0).show(500);

// slide
$('.children_list li').eq(0).slideUp(500);
$('.children_list li').eq(0).slideDown(500);
```

## 10. animate
```js
$('.children_list li').eq(1).animate({
  height: '300px'
}, 3000, function() {
  console.log('call back');
})
```

## 11. scrollLeft, scrollTop
```js
// 스크롤의 가로 위치
console.log($('html').scrollLeft());

// 스크롤의 세로 위치
console.log($('html').scrollTop());
```