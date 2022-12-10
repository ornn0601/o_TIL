# 객체, 함수

## Template Literal  
```js
function hello(name) {
  return `Hello ${name}!`;
}
const result = hello('velopert');
console.log(result);
```

## 함수 만들기
- 함수 선언 : function()
```js
function getGrade(score) {
  if (score === 100) {
    return 'A+';
  } else if (score >= 90) {
    return 'A';
  } else if (score === 89) {
    return 'B+';
  } else if (score >= 80) {
    return 'B';
  } else if (score === 79) {
    return 'C+';
  } else if (score >= 70) {
    return 'C';
  } else if (score === 69) {
    return 'D+';
  } else if (score >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

const grade = getGrade(99);
console.log(grade);
```  
  
- 함수 선언 : () =>
```js
const add = (a, b) => {
  return a + b;
}

const add2 = (a, b) => a + b;

const sum = add(1, 2);
console.log(sum);

const hello = (name) => {
  console.log(`Hello, ${name}!`);
}
hello('velopert');
```
  
## 객체  
- 값을 선언할때 하나의 이름에 여러종류의 값을 넣을 수 있게한다.  
```js
const dog = {
  (key: value),
  name: '멍멍이',
  age: 2,
  sample: {
    a: 1,
    b: 2,
  },
  'key with space' : 'abcd',
};
console.log(dog);
console.log(dog.name);
console.log(dog.age);
```  
  
```js
const ironMan = {
  name: '토니 스타크',
  actor: '로버트 다우니 주니어',
  alias: '아이언맨',
};
const captainAmerica = {
  name: '스티븐 로저스',
  actor: '크리스 에반스',
  alias: '캡틴 아메리카',
};

function print(hero) {
  const text = `${hero.alias}(${hero.name})역할을 맡은 배우는 ${hero.actor}입니다.`;
  console.log(text);
}
print(ironMan);
```  
  
## 객체 비구조화
- es6 비구조할당(객체 구조분해)    
```js
function print(hero) {
  const { alias, name, actor } = hero;
  const text = `${alias}(${name})역할을 맡은 배우는 ${actor}입니다.`;
  console.log(text);
}

function print( { alias, name, actor } ) {
  const text = `${alias}(${name})역할을 맡은 배우는 ${actor}입니다.`;
  console.log(text);
}
print(ironMan);

const { name } = ironMan;
console.log(name);

```

## 객체 안에 함수 넣기  
- 객체안의 this는 자기가 속해있는 곳을 가리킨다. 
- =>의 this는 자기가 속해있는 곳을 가리키지 않는다.
```js
const dog = {
  name: '멍멍이',
  sound: '멍멍!',
  say: function() {
    console.log(this.sound);
  }
};
dog.say();

```
  
## Getter와 Setter 함수
- Getter 함수는 특정코드를 조회할려고할때 특정코드를 실행시키고, 여기서 연산된 값을 받아서 사용하는 것  
- Setter 함수는 특정값을 설정할때마다 특정코드를 실행시키고, 여기서 연산된 값을 받아서 사용하는 것  
```js
const numbers = {
  a: 1,
  b: 2,
  get sum() {
    console.log('sum 함수가 실행됩니다.');
    return this.a + this.b;
  }
};

number.a = 5;
console.log(numbers);

console.log(numbers.sum);
```

```js
const dog = {
  _name: '멍멍이',
  set name(value) {
    console.log('이름이 바뀝니다...' + value);
    this._name: value;
  }
};

console.log(dog._name);
dog.name = '뭉뭉이';
console.log(dog._name);
```
  
```js
const numbers = {
  _a: 1,
  _b: 2,
  sum: 3,
  calculate() {
    console.log('calculate');
    this.sum = this._a + this._b;
  },
  get a() {
    return this._a;
  },
  get b() {
    return this._b;
  },
  set a(value) {
    this._a = value;
    this.calculate();
  },
  set b(value) {
    this._b  = value;
    this.calculate();
  }
};

console.log(number.sum); // 3
number.a = 5;
console.log(number.sum); // 7
number.b = 7;
number.b = 9;
console.log(number.sum); // 16
console.log(number.sum); // 값이 변하면 작동하기때문에 기존 값을 재사용하게 된다.
```