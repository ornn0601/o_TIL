# JS 이벤트 다루기  

## 1. script 실행하기  
- 버튼 클릭으로 알아보는 실행 방식  
- load : 모든 요소가 전부 다운로드 후 실행됨, 지역변수    
```js
window.addEventListener('load', function() {

});
```  

- DOMContentLoaded : 해당 돔 구조의 로드가 끝나면 바로 실행됨, 지역변수  
```js
window.addEventListener('DOMContentLoaded', function() {

});
```  

- 즉시 실행 함수 : 전역변수를 지역변수화 하기 
- 클릭 이벤트   
```js
(function() {
  const ilbuni = document.querySelector('.ilbuni.c');

  function clickInbuniHandler() {
    ilbuni.classList.toggle('special');
  }

  ilbuni.addEventListener('click', clickInbuniHandler);
})();

```  

## 2. 이벤트 객체 선택
```js
ilbuni.addEventListener('click', clickInbuniHandler);
```
- console.log(this) : ilbuni 선택됨  
- console.log(e.currentTarget) : ilbuni 선택됨  
- console.log(e.target) : 클릭한 이미지 선택됨  

## 3. 이벤트 위임  
- 기존 코드  
- 성능을 위해 addEventListener 횟수를 줄이는 것이 중요하다.  
```js
for (let i = 0; i < ilbuniGroup.length; i++) {
  ilbuniGroup[i].addEventListener('click', clickHandler);
}
```

- 이벤트 위임  
  - 이벤트 처리를 부모에게 위임하여 처리한다.  
  - 메모리 관리 차원에서 좋음  
  - 데이터가 로드될때 일일이 이벤트를 걸지 않아도 된다.   

```js
function clickHandler(e) {
  if (e.target.classList.contains('ilbuni')) {
    stage.removeChild(e.target);
  }
}

stage.addEventListener('click', clickHandler);
```

