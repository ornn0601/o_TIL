# jQuery 이론  

## 기본 구분 만들기  
```js
$('선택자').함수(function() {
  // 실행구문
  $('선택자').메서드();
});

// css 컨트롤
$('선택자').css({'display':'block'});
```  
  
  
## 주요 메서드  
1. 이펙트 : 효과  
  - show()  
  - hide()  
  - slideDown()  
  - slideUp()  
  - fadeIn()  
  - fadeOut()  
  - stop() : 반복제거  
  * 속도 조절 : fadeIn('fast'); fadeOut(500);  
  
2. 클래스 제어  
  - addClass()  
  - removeClass()  
  - toggleClass()  
  
3. 요소 탐색  
  - children()  
    - 선택요소의 바로 아래 단계인 자식요소만 선택    
  - parent() : 부모요소  
  - siblings()  
    - 선택요소의 형제요소 선택  
  - find() : 자손요소   
  - next() : 다음요소     
  - prev() : 이전요소  
  
  
## 