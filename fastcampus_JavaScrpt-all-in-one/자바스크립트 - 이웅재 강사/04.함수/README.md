# 함수

### function hello() {}
- 선언적 function
- 함수의 매개변수 : 함수를 호출할 때 값을 지정
- 함수의 리턴 : 함수를 실행하면 얻어지는 값

```js
function hello1() {
  consol.log('hello1');
}

function hello2(name) {
  consol.log('hello2', name);
}

function hello3(name) {
  return `hello3 ${name}`;
}
console.log(hello3('Mark'));
```

### const hello = function() {}
- 익명 함수를 만들어 변수에 할당하는 방식
- 

```js
const hello1 = function() {
  consol.log('hello1');
}
consol.log(hello1);

const hello2 = function(name) {
  consol.log('hello2', name);
}

const hello3 = function(name) {
  return `hello3 ${name}`;
}
console.log(hello3('Mark'));
```

---

### 선언적 function과 익명 함수를 만들어 변수에 할당의 차이점
- 선언적 방식 : js 특성 상 함수를 먼저 메모리에 올리기 때문에 함수 선언에 위치가 어디에 있든지 먼저 실행된다.
- 익명함수 변수 할당 : 변수의 호이스팅 문제가 발생하여 선언 위치보다 먼저 실행할 경우 오류가 발생한다.

```js
hello1() {} // hello1
hello2() {} // not a function
hello3() {} // not defined

function hello1() {}
var hello2 = function() {}
const hello3 = function() {}
```

---

### const hello = new Function();
- 생성자 함수로 함수를 만드는 방법
- 객체를 만드는 방법 중 하나

```js
const sum = new Function('a', 'b', 'c', 'return a + b + c');
console.log(sum(1, 2, 3)); // 6
```

- function과 new Function의 차이점
  - new function의 매개변수는 전역 
  - function는 매개변수는 상위

---

### ()=>
- 익명함수로 사용해야한다. 선언적 방식은 사용할 수 없다.
- 매개변수가 하나 일때 생략 가능하다.
- 간략하고 보기 쉬운 형태로 사용 가능하다.

```js
const hello1 = () => { console.log('hello1') };
const hello2 = name => { console.log('hello1', name) };
const hello3 = (name, age) => { console.log('hello1', name, age) };

const hello4 = name => { return `hellow4 ${name}` };
const hello4 = name => `hellow4 ${name}`;
```

---

### new 함수()
- 생성자 함수
- ()=>{} 은 this가 생성되지 않기떄문 사용할 수 없음
- 모두 function 키워드 함수

```js
function Person(name, age) {
  console.log(this); // 객체로 만들어졌을때 그 객체를 가리키는 용도로 사용
  this.name = name;
  this.age = age;
}

const p = new Person('Mark', 37);
console.log(p, p.name, p.age);

const a = new Person('Anna', 26);
console.log(a, a.name, a.age);

// 함수 안에서 함수를 만들어 리턴
function plus(base) {
  return function(num) {
    return base + num;
  }
}
const plus5 = plus(5); // return 5 + num;
console.log(plus5(10)); // return 5 + 10 = 15
```

---

### 함수 안에서 함수를 만들어 리턴
```js
// 함수 안에서 함수를 만들어 리턴
function plus(base) {
  return function(num) {
    return base + num;
  }
}
const plus5 = plus(5); // return 5 + num;
console.log(plus5(10)); // return 5 + 10 = 15
```

---

### 함수를 호출할때, 인자로 함수를 사용
- 함수를 인자로 하여 함수를 호출
- callback

```js
function hello(c) {
  console.log('hello');
  c();
}

hello(function() {
  console.log('콜백') // hello → '콜백'
});
```