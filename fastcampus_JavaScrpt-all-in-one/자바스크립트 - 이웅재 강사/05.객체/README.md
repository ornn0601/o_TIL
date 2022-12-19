# 객체
- 함수, 클래스(틀) => 객체, 개체, object
- 생성자함수를 통해 객체를 만들 수 있음

### 생성자 함수

```js
function A() {}

const a = new A();

console.log(a, typeof a); // A{} 'object'
console.log(A()); // A라는 함수 실행 undefined
```

- 생성하면서 데이터 넣기
```js
function B(name, age) {
  console.log(name, age);
}

const b = new B(); // undefined
const c = new B('mark', 37); // mark, 37
console.log(B()); // B 함수 실행 return이 없으므로 undefined
```

- 객체에 속성 추가하기 property
```js
// 값을 속성으로 넣기
function A() {
  this.name = 'mark',
}

const a = new A();
console.log(a); // A{name: mark}

// 함수를 속성으로 넣기
function B() {
  this.hello = function() {
    console.log('hello');
  }
}

new B().hello(); // hello
```

---

### new Object()
- Object로 객체 만들기
- 내장 객체

```js
// new Object
const a = new Object();
console.log(a, typeof a); // {} 'object'

const b = new Object(true);
console.log(b, typeof b); // {Boolean: true} 'object'

const c = new Object(name: 'mark');
console.log(c, typeof c); // {name: 'mark'} 'object'
```

---

### 프로토타입 체인
- .prototype

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  // this.hello = function() {
  //   console.log('hello', this.name, this.age);
  // };
}

Person.prototype.hello = function() {
  console.log('hello', this.name, this.age);
}

const p = new Person('mark', 37);
p.hello(); // 'hello', mark, 37
```

---

### 프로토타입을 이용한 객체 확장
- 프로토타입 상속 

```js
function Person() {}

Person.prototype.hello = function() {
  console.log('hello', this.name, this.age);
}

function Korea(region) {
  this.region = region;
  this.where = function() {
    console.log('where', this.region);
  };
}

Korea.prototype = Person.prototype;

cons k = new Korea('Seoul');

k.hello();
k.where();

console.log(k instanceof Korea); // true
console.log(k instanceof Person); // true
console.log(k instanceof Object); // true
```

---

### 객체 리터널
- 

```js
const a = {};
console.log(a typeof a); // {} object

const b = {
  name: 'mark',
};
console.log(b typeof b); // { name: mark } object

const c = {
  name: 'mark',
  hello1() : {
    console.log('hello1', this.name);
  },
  hello2: function() {
    console.log('hello2', this.name);
  },
  hello3: () => {
    console.log('hello3', this.name);
  }
};
c.hello1(); // hello1, mark
c.hello2(); // hello2, mark
c.hello3(); // hello3, undefined (this가 객체를 가리키지 않음)
```

---

### 표준 내장 객체
```js
// Array
const a = new Array('red', 'black', 'white');
console.log(a) // ['red', 'black', 'white']

const b = ['red', 'black', 'white']; // 리터럴 표현법
console.log(b) // ['red', 'black', 'white']
```