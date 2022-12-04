# 타이밍 제어  

## 1. setTimeout  
```js
let timeId;

function sample() {
  console.log('sample');
}

// 타임아웃 실행
timeId = setTimeout(sample, 3000);

// 타임아웃 삭제
clearTimeout(timeId);

// 클릭을 통해 이벤트 삭제
btn.addEventListener('click', function() {
  clearTimeout(timeId);
});
```

## 2. setInterval  
- 설정된 시간마다 반복  
- 단점 : 반복실행이기때문에 기기의 사양이 좋지 않으면 프레임드랍, 과도한 밧데리 사용 등 문제가 발생한다.  
```js

timeId = setInterval(sample, 1000);

// 클릭을 통해 이벤트 삭제
btn.addEventListener('click', function() {
  clearInterval(timeId);
});

```  

## 3. requestAnimationFrame  
- setInterval의 단점을 보안한 것  
- ie10부터 지원  
- 샘플을 호출하면, 내부의 requestAnimationFrame이 다시 호출한다.  
- 60분의 1초  
- 캔버스에서 자주 사용 됨  
- 조건을 걸어서 사용 됨  

```js
let timeId;
let n = 0;
const btn = document.querySelector('.btn')
function sample() {
  n++;
  console.log(n);
  if (n > 200) {
    return;
  }
  
  // 반복시킬 요소 안에 작성
  timeId = requestAnimationFrame(sample);
}
sample();

// 클릭을 통해 이벤트 삭제
btn.addEventListener('click', function() {
  clearAnimationFrame(timeId);
});

```