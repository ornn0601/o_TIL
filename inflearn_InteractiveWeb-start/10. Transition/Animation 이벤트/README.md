# Transition/Animation 이벤트  

## 1. Transition  
```js
window.addEventListener('click', function(e) {
  ballElem.style.transform = 'translate(' + (e.clientX 15) + 'px, ' + (e.clientY - 15) + 'px)';
});

ballElem.addEventListener('transitionend', function(e) {
  ballElem.classList.add('end');
});
ballElem.addEventListener('transitionstart', function(e) {
  ballElem.classList.add('end');
});
```

## 2. Animation  
```js
ballElem.addEventListener('click', function() {
  ballElem.style.animation = 'ball-ani 1s 3 alternate forwards';
});

// 시작과 함께 적용
ballElem.addEventListener('animationstart', function() {
  ballElem.classList.add('end');
});

// 끝난 후 적용
ballElem.addEventListener('animationend', function() {
  ballElem.classList.add('end');
});

// 반복 실행되는 시점의 이벤트를 잡아낼 수 있다
ballElem.addEventListener('animationiteration', function() {
  console.log('반복');
});
```