# 반복문
- 특정 코드 블럭을 반복적으로 실행할 때 사용

### for
- for (초기화; 반복 조건; 반복이 된 후 실행되는 코드) { 반복이 되는 코드 블럭 }
- 

```js
for (let i = 0; i < 5; i++) {
  console.log('안녕하세요'); // 0~4 5번 실행
}

for (let i = 0, j = 2; i < 5; i++, j = j * j) {
  console.log('안녕하세요', i, j); // 안녕하세요. 1 제곱(2, 4, 16, 256..)
}
```

- break;
- 반복문을 즉시 종료하고 싶을 때는 반복되는 블럭 안에서 break;를 실행하면 가능
```js
for (let i = 0; i < 5; i++) {
  console.log(i);
  if ( i > 2 ) {
    break;
  } 
  console.log('안녕하세요', i);
} // 0 안녕하세요 0, 1 안녕하세요 1, 2 안녕하세요 2, 3
```

- continue;
- 반복되는 블럭 안에서 continue; 를 만나면 바로 해당 블럭은 종료합니다.
- 다음 반복이 있으면 다음 반복으로 넘어갑니다.
```js
for (let i = 0; i < 5; i++) {
  console.log(i);
  if ( i > 2 ) {
    continue;
  } 
  console.log('안녕하세요', i);
} // 0 안녕하세요 0, 1 안녕하세요 1, 2 안녕하세요 2, 3, 4
```

- for 무한루프
```js
for (;;) {
  console.log('안녕하세요');
  if (Math.random() * 100 > 90) {
    break;
  }
}
```

---

### while (조건)
- 조건이 거짓이 될 때까지 반복 실행
- 조건을 먼저 판단해서 조건이 거짓이면 실행이 안됨

- while 무한루프
```js
while (true) {
  console.log('안녕하세요');
  if (Math.random() * 100 > 90) {
    break;
  }
}; // 90번 미만으로 랜덤하게 실행
```

- do { 조건이 거짓이 될 때까지 반복 실행 } while (조건);
- 먼저 실행하고 나중에 조건을 판단함, 무조건 한번은 실행

```js
do {
  console.log('안녕하세요');
} while (Math.random() * 100 <= 90);
```

---

### for of / for in
- for of : iterable한 객체에 모두 사용 가능 (예: 배열 등)
- for in : 모든 프로퍼티에 사용 가능

```js
// for of
for (const i of [1, 2, 3]) {
  console.log(i); //1, 2, 3 
}

// for in
object.prototype.test = function() {};

for (const i in {a: 1, b: 2, c: 3}) {
  console.log(i);
}
```