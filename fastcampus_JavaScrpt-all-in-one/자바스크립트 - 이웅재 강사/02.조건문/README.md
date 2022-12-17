# 조건문

- 표현식이 참으로 평가될 때, 실행되는 블럭
- Falsy : 표현식이 거짓으로 평가될 때
- Truethy : Falsy를 제외한 값

```js
if (true) {
  console.log('항상 실행'); // 항상 실행
}
if (true) console.log('항상 실행'); // 항상 실행

if (false) {
  console.log('항상 실행되지 않음'); // 항상 실행되지 않음
}
if (false) console.log('항상 실행되지 않음'); // 항상 실행되지 않음
```

- else : if에 해당하지 않을때

```js
if (n > 0) {
  console.log('n이 0보다 큰 경우');
} else {
  console.log('n이 0보다 작은 경우');
}

if (n > 0) console.log('n이 0보다 큰 경우');
else console.log('n이 0보다 작은 경우');
```

### 논리 연산자를 이용한 조건문

- 표현식 && 표현식
```js
if (true && true) // 참
if (true && false) // 거짓
if (false && false) // 거짓
```

- 표현식 || 표현식
```js
if (true && true) // 참
if (true && false) // 참
if (false && true) // 참
if (false && false) // 거짓
```

- !표현식
```js
if (!true) // 거짓
if (!false) // 참
```

---

### 논리 연산자를 이용한 조건부 실행

- &&
  - 둘다 참 일때만 참
  - 표현식은 앞을 먼저 평가하고, 뒤를 평가한다. 

```js
let n = 5;
n % 5 === 0 && console.log('5로 나누어 떨어질때만 실행');
// 5로 나누어 떨어지면 console 실행

let  = 6;
// 앞이 거짓이기 때문에 코드 전체가 실행되지 않는다.
```

- ||
  - 둘 중에 하나만 참이면 참이다.
  - 앞 표현식을 평가해서 참이면 뒤를 평가할 필요가 없다.
  - 앞 표현식이 거짓일때만 뒤를 평가한다.

```js
let n % 5 === 0 || console.log('5로 나누어 떨어질때 실행되지 않음');
// 앞자리가 참이므로 앞 표현식만 실행된다.

let n = 6
// 앞이 거짓이기 때문에 console이 실행됨
```

---

### 삼항연산자
- 조건 ? 조건이 참이면 실행 : 조건이 거짓이면 실행
- {}를 사용할 수 없는 문법이기 때문에 하나의 표현식만 가능

```js
let n = 5;
console.log(n % 5 === 0 ? '5의 배수 입니다' : '5의 배수가 아닙니다')

const message = n % 5 === 0 ? '5의 배수 입니다' : '5의 배수가 아닙니다';
console.log(message);
```

---

### switch
- 괄호 안에 있는 값이 무엇인지 중괄호 안에 있는 코드들을 비교해서 실행

```js
let n = 5;

switch(n % 5) {
  case 0 : {
    console.log('5의 배수 입니다.');
    break;
  }
  case 1 :
  case 2 :
  case 3 :
  case 4 :
    console.log('5의 배수가 아닙니다.');
  default :
    console.log(n);
}
```