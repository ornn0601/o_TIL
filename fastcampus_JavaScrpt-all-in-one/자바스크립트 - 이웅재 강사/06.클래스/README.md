# Class

### 사용 방법
- es6에 적용된 방식으로 호이스팅이 발생하지 않는다.

```js
// 선언적 방식
class A {}

console.log(new A());

// class 표현식을 변수에 할당
const B = class {};
console.log(new B());
```

---

### constructor
- 

```js
class A {} 
console.log(new A()); // A {}

class B {
  constructor() {
    console.log('constructor') // 객체가 생성될때 
  }
}
console.log(new B()); // B

class c {
  constructor(name, age) {
    console.log('constructor', name, age);
  }
}

console.log(new c('mark', 37)); // constructor', mark, 37
// 빠진 요소는 undefined

```

---

### 멤버 변수
- 객체의 프로퍼티

```js
class a {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
console.log(new A('mark', 37)); // A {name: mark, age: 37};

class B {
  name; // this.name
  age; // this.age
}
console.log(new B()); // 크롬 , 노드 12버전 이상에서만 작동함

class c {
  //초기값
  name = 'no name';
  age = 0;

  constructor(naem, age) {
    this.name = name;
    this.age = age;
  }
}
console.log(new C('mark', 37)); // C {name: mark, age: 37};
```

- 멤버함수
```js
class A {
  hello1 {
    console.log('hello1');
  }

  hello2 = () => {
    console.log('hello2');
  }
}
new A.hello1(); // hello1 A {function: hello2}
new A.hello2(); // hello2 A {function: hello2}

class B {
  name = 'mark';
  hello() {
    console.log('hello', this.name);
  }
}
new B.hello(); // hello, mark
```

---

### get, set
- _ : 내부에서 작동하는 요소
- get, set : 외부에서 접근할 수 있는 방법

```js
class A {
  _name = 'no name';

  get name() {
    return this._name + '@@@';
  }

  set name(val) {
    this._name = value + '!!!';
  }
}
const a = new A();
console.log(a) // A {_name: 'no_name'};

a.name = 'mark'; // set 함수 작동
console.log(a) // A {_name: 'mark!!!'};

a.name // get 함수 작동
console.log(a.name) // A {mark!!!@@@}
console.log(a._name) // A {mark!!!}
```

---

### static 변수, 함수
- 객체가 아니라, 클래스의 변수와 함수

```js
class A {
  static age = 37;
  static hello() {
    console.log(A.age); // 접근할때는 class 이름으로 접근
  }
}
console.log(A, A.age); // [function: A] {age: 37} 
A.hello(); // 37
```

---

### 상속 기본
-

```js
class Parent {
  name = 'Lee';

  hello() {
    console.log('hello', this.name);
  }
}

class Child extends Parent {}

const p = new Parent();
const c = new Child();
console.log(p, c); //Parent {name: 'Lee'} Child {name: 'Lee'};

c.hello(); // hello, lee
c.name = 'anna';
c.hello(); // hello, anna
```

- override
- 클래스의 상속 멤버 변수 및 함수 오버라이딩, 추가
- 부모가 가지고 있는 요소와 동일한 이름으로 자식에게 할당하면 내용을 덮어씌운다.
```js
// 변수, 함수 추가 및 오버라이딩

class Parent {
  name = 'Lee'

  hello() {
    console.log('hello', this.name);
  }
}

class Child extends Parent {
  age = 37;

  hello() {
    console.log('hello', this.age);
  }
}

const p = new Parent();
const c = new Child();
console.log(p, c); // Parent {name: 'Lee'} Child {name: 'Lee', age: 37}
```

- super
```js
class Parent {
  name;

  constructor(name) {
    this.name = name;
  }

  hello() {
    console.log('hello', this.name);
  }
}

class Child extends Parent {
  age;

  constructor(name, age) {
    super(name); // 부모의 컨스트럭터를 먼저 실행하게 한다.
    this.age = age;
  }

  hello() { // 덮어씌우기 (오버라이딩)
    console.log('hello', this.name, this.age);
  }
}

const p = new Parent('mark'); // Parent {name: mark}
const c = new Child('mark', 37); // child {name: mark, age: 37}
```