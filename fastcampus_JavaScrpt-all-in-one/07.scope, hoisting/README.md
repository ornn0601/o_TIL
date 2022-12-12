# Scope와 Hoisting

## 01. Scope의 이해 
- 스코프란 우리가 변수 또는 함수를 선언하게 될때 해당 변수 또는 함수가 어디부터 어디까지 유효한지에 대한 범위를 의미합니다.
- Global : 전역 범위
- Function : 특정 함수 내부에서만 사용 가능
- Block : if, for 등 {}의 내부에서만 사용 가능
- 자바스크립의 작동원리에 대한 이해
- var : 블록스코프 무시, 의도치 않은 실수가 생길 수 있기때문에 사용 제한
- const, let : 블록스코프 제한

- Global Scope
```js
const value = 'hello!'; // 글로벌 스코프

function myFunction() {
  console.log('myFunction: '); // myFunction:
  console.log(value); // hello!
}

function otherFunction() { // 함수형 스코프
  console.log('otherFunction: '); // otherFunction:
  const value = 'bye!'; // 함수 내부에서만 작동
  console.log(value); // bye!
}

myFunction();
otherFunction();

console.log('global scope: '); // global scope:
console.log(value); // hello!
```

- Function Scope
```js
const value = 'hello!';

function myFunction() {
  const value = 'bye!';
  const anotherValue = 'world';
  function functionInside() {
    console.log('functionInside: '); // functionInside:
    console.log(value); // bye!
    console.log(anotherValue); // world
  }
  functionInside();
}

myFunction();
console.log('global scope: '); // global scope:
console.log(value); // hello!
console.log(anotherValue); // ReferenceError
```

- Block Scope
```js
const value = 'hello!';

function myFunction() {
  const value = 'bye!';
  if (true) {
    const value = 'world';
    console.log('block scope: '); // block scope:
    console.log(value); // world
  }
  console.log('function scope: '); // function scope:
  console.log(value); // bye!
}

myFunction();
console.log('global scope: '); // global scope:
console.log(value); // hello!
```

## 02. Hoisting
- 호이스팅이란 자바스크립트에서 아직 선언되지 않은 함수 또는 변수를 끌어올려서 사용할 수 있는 자바스크립트의 현상 또는 작동 방식
- 작동하지만 유지보수 측면에서 파악하기 어렵기 때문에 피해야한다.
- 피해야 하는 이유
  - 코드가 쉽게 헷갈려지고
  - 유지보수가 어려워지고
  - 의도하지 않은 결과가 나타날 가능성이 높아짐
- 변수 : var는 발생하지만, const와 let는 발생하지 않는다.
- 방지법
  - 함수 선언 후 호출하는 것을 원칙으로 한다.
  - 함수를 변수안에 담아 호출한다. (복잡해지기 때문에 비추천)

```js
myFunction(); // 선언이 되지 않고 실행되었는데 잘 작동한다.

function myFunction() {
  console.log('hello world');
}
```
```js
function fn() {
  console.log(a); // undefined
  var a = 2;
}
fn();
```
```js
const myFunction = function myFunction() {
  console.log('hello world');
}
myFunction(); // Error
```