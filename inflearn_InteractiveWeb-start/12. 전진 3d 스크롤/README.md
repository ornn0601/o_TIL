# 전진! 3D 스크롤  

## resize  
```js
  const houseElem = document.querySelector('.house');
  let maxScrollValue = 0;

  function resizeHandler() {
    maxScrollValue = document.body.offsetHeight - window.innerHeight;
  }

  window.addEventListener('scroll', function() {
    const zMove = pageYOffset / maxScrollValue * 980 - 490;
    houseElem.style.transform = 'translateZ(' + zMove + 'vw)';

  });

  window.addEventListener('resize', resizeHandler);
  resizeHandler();
```  
  
## 스크롤 가로 바  
```js
 const barElem = document.querySelector('.progress-bar');

window.addEventListener('scroll', function() {
  const scrollPer = pageYOffset / maxScrollValue;
  barElem.style.width = scrollPer * 100 + '%';
});
```
  
## 마우스 좌표  
- 마우스 (e.clientX, e.clientY)  
- 숫자형태(원형)는 사용하지 않는다 : 가운데 값이 0이 아니기때문에 회전각을 계산하기 어렵다.  

```js
  window.addEventListener('mousemove', function(e) {
    mousePos.x = -1 + (e.clientX / window.innerWidth) * 2;
    mousePos.y = 1 - (e.clientY / window.innerHeight) * 2;
    stageElem.style.transform = 'rotateX(' + (mousePos.y * 5) + 'deg) rotateY(' + (mousePos.x * 5) + 'deg)';
  });
``` 

