# 01. 마우스를 활용한 인터렉티브  

## 참고  
- 브라우저 내에서 마우스 위치값을 브라우저 왼쪽 상단이 아닌 브라우저 가운데가 중심이 되게 바꿔주는 게 핵심입니다.  
예를들어 브라우저 width가 900일 경우 마우스 위치값이 0부터 900 까지 찍힐텐데, 거기서 브라우저 width / 2 를 해서 빼주는 것.  

```
x = e.clientX (마우스x) - window.innerWidth / 2 (화면 사이즈 /2)
```

이렇게 되면 0~900 이 아닌 -450 ~ 450 까지 찍히게 됩니다.
translate() 외에도 scale(), rotate() 등 다양하게 테스트 해보세요.

```
transform = "rotate(" + 변하는 값 + "deg)"
```  
 
## 1. mouse move 값 활용  
- 마우스 위치에 따라 오브젝트 제어  
- e.clientX, e.clientY  

```js
window.onload = function() {
  let h1 = document.getElementsByTagName('h1')[0];
  let cursor_item = document.getElementsByClassNa('cursor_item')[0];

  window.addEventListener('mousemove', mouseFuncfalse);

  function mouseFunc(e) {
    h1.innerHTML = "x: " + e.clientX + " y: " + clientY;
    cursor_item.style.transform = "translate(" + clientX +"px," + e.clientY + "px)";
    // console.log(e.clientX, e.clientY);
  }
}
```

<hr>

## 2. requestAnimationFrame (loop, 자연스러운 움직임)  

```js
function loop() {
  window.requestAnimationFrame(loop);
}
```

<hr>

## 3. tranform, translate 값 변경  
```js
function loop() {
  mx += (x - mx) * speed;
  my += (y - my) * speed;

  h1.innerHTML = "x: " + x + " mx: " + mx;
  cursor_item.style.transform = "translate(" + mx +"px" +my + "px)";

  window.requestAnimationFrame(loop);
}
```

<hr>

## 4. transition, easing(가속도)  
- 검색 : css3 easeing  

```css
.cursor_item {
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: red;
  top: 0;
  left: 0;
  margin: -50px 0 0 -50px;
  transition: all 1s ease-in-out;
}
```

```js
window.onload = function() {
  cursor_item = document.getElementsByClassNa('cursor_item')[0];

  window.addEventListener('click', mouseFunc, false);
  function mouseFunc(e) {
    x = e.clientX;
    y = e.clientY;
    cursor_item.style.transform = "translate(" + x +"px"+ y + "px)";
  }
}

```

