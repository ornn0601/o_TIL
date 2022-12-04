# 02. 스크롤 값을 활용한 인터렉티브  

## 1.페럴랙스는 어떻게 구현되는가?  
- parallax : 시차(관측 위치에 따른 물체의 위치나 방향의 차이)  

## 2.스크롤 높이값 구하기  

```js
let scrollTop = 0;

window.addEventListener('scroll', function() {

  scrollTop = document.documentElement.scrollTop;
  console.log(scrollTop);

}, false);
```  

## 3. 가로 진행바 제작  

```html
<h1>스크롤</h1>
<div class="progress">
  <span class="bar"></span>
</div>
```

```css
body {
  height: 1000vh;
  background: linear-gradient(150deg, red, orange, yellow, green,indigo, purple, black);
}
h1 {
  color: #fff;
}
.progress {
  position: fixed;
  width: 100%;
  height: 10px;
  top: 0;
  left: 0;
  background-color: black;
  z-index: 10;
}
.bar {
  width: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 10px;
  background-color: yellow;
  z-index: 11;
}
```

```js
let scrollTop = 0;
let bar;

window.onload = function() {
  bar = document.querySelector('.bar');
}

window.addEventListener('scroll', function() {

  scrollTop = document.documentElement.scrollTop;
  // console.log(scrollTop);
  let per = Math.ceil(scrollTop / (document.body.scrollHeight - window.outerHeight) * 100);
  // console.log(per);
  bar.style.width = per + '%';

}, false);
```