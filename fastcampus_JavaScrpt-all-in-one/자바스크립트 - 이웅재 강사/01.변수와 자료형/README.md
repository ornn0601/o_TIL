# 변수와 자료형

## 호이스팅
- 아래 있는 선언을(만) 끌어올려지는 현상
- let, const는 발생하지 않음

```js
console.log(name); // undefined
name = 'mark';
console.log(name); // mark

var name;
```

---

## 자료형
- Data Types
- JS는 변수가 가지는 고정 타입이 없다.
- 값에 따라서 변수의 타입이 달라진다. 동적타입
- 기본타입 (Primitive values)
  - Boolean (true, false)
  - Null
  - Undefined
  - Number
  - String
  - Symbol (ECMAScript6)
- 객체 (Objects)

```js
const b = Boolean(false);
console.log(b, typeof b); // false, boolean
```

## symbol
- 함수를 호출하는 형태로 사용
- 고유한 값을 만들때 사용

```js
const a = Symbol();
const b = Symbol(36);
const c = Symbol('mark');
const d = Symbol('mark');

console.log(a, typeof a); // symbol
console.log(c === d); // false

new Symbol(); // error
```