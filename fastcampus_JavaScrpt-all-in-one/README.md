# JavaScript All in one 
- 채널 : fast campus  
- 강사 : 벨로퍼트(김민준) 
  
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
  
## 배열
- 순서 : 0부터 시작  
- 새로운 항목 추가 : push()  
- 배열의 갯수 : length  
```js
const objects = [
  {name: '멍멍이'},
  {name: '야옹이'},
];
console.log(objects[0]);

objects.push({
  name: '멍뭉이'
});

console.log(objects.length);
```
  
## 반복문 : for  
- 시작 - 조건 - true - 구문실행 - false - 구문취소  

```js
for (let i = 0; i < 10; i++) {}
for (let i = 10; i > 0; i--) {}
```
  
- 배열과 함께 사용하기  
```js
const names = ['멍멍이', '야옹이', '멍뭉이'];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
```
  
## 반복문 : while  
- 조건이 false 조건이 필요하다. 없으면 무한루프  
- 조건이 까다로운 경우 사용, 특정 조건을 비교할때 사용

```js
let i = 0;
let isFun = false;

while (!isFun) {
  console.log(i);
  i++;
  if (i === 30) {
    isFun = true;
  }
}
```
  
## 반복문 : for..of, for...in  
- for..of : 배열 안에 있는 것들을 사용해서 어떠한 작업을 할때 사용  
- for..in : 배열 안에 있는 요소를 key, value로 탐색한다. 

```js
const numbers = [10, 20, 30, 40];

for (let number of numbers) {}
for (let i = 0; i < numbers.length; i++) {}
```
  
- 객체의 정보를 받아오는 방법  
```js
const doggy = {
  name: '멍멍이',
  sound: '멍멍',
  age: 2
};
console.log(Object.keys(doggy)); // ['멍멍이', '멍멍', 2]
console.log(Object.values(doggy)); // ['name', 'sound', 'age']
console.log(Object.entries(doggy)); // ['Array[2]', ''Array[2]', ''Array[2]']

for (let key in doggy) {
  console.log(`${key}: ${doggy[key]}`);
} // name: 멍멍이, sound: 멍멍, age: 2
```
  
## 반복문 : continue와 break  
- continue : 특정 조건이 만족되었을때 다음으로 넘어간다.  
- break : 반복문을 끝낸다.  

```js
for (let i = 0; i < 10; i++) {
  if (i === 2) continue;
  if (i === 5) break;
}
```
  
## 반복문 : forEach  
```js
const superheroes = ['아이언맨', '캡틴 아메리카', '토르']
function print(hero) {
  console.log(hero);
}
superheroes.forEach(print);

superheroes.forEach(function(hero) {
  console.log(hero);
});

superheroes.forEach(hero => {
  console.log(hero);
});
```
  
## 반복문 : map  
- map : 배열 안에 원소를 변환하고 싶을때 사용하는 내장 함수
- indexOf :
  - 배열에 아이템이 몇번째 있는지 알 수 있는 내장 함수
  - 특정 값과 일치하는 것을 찾음
- findIndex : 
  - 특정 조건을 확인하여 그 조건이 일치한다면 그 원소의 순번을 알려주는 내장함수  
- find : 찾은 값 자체를 반환

```js
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 배열의 제곱
// for
const squared = [];
for (let i = 0; i < array.length; i++) {
  squared.push(array[i] * array[i]);
}

// forEach
array.forEach(n => {
  squared.push(n * n);
});

console.log(squared);

// map
const square = n => n * n;
const squared = array.map(square);
const squared = array.map(n => n * n;);

const items = [
  {
    id: 1,
    text: 'hello'
  },
  {
    id : 2,
    text: 'bye'
  }
];
const texts = items.map(item => item.text);

// indexOf
const superheroes = ['아이언맨', '캡틴 아메리카', '토르'];
const index = superheroes.indexOf('토르'); // 2

// findIndex
const todos = [
  {
    id: 1,
    text: '자바스크립트 입문',
    done: true,
  },
  {
    id: 2,
    text: '함수 배우기',
    done: true,
  },
  {
    id: 3,
    text: '객체와 배열 배우기',
    done: true,
  },
  {
    id: 4,
    text: '배열 내장함수 배우기',
    done: false,
  }
];
const index = todos.findIndex(todo => todo.id === 3); // 2
const todo = todos.find(todo => todo.done === false); // 3
```
  
## filter  
- 특정 조건을 만족하는 원소들을 찾아서 새로운 배열을 만드는 함수

```js
const todos = [
  {
    id: 1,
    text: '자바스크립트 입문',
    done: true,
  },
  {
    id: 2,
    text: '함수 배우기',
    done: true,
  },
  {
    id: 3,
    text: '객체와 배열 배우기',
    done: true,
  },
  {
    id: 4,
    text: '배열 내장함수 배우기',
    done: false,
  }
];
const tasksNotDone = todos.fillter(todo => todo.done === false);
const tasksNotDone = todos.fillter(todo => !todo.done);
console.log(tasksNotDone);
```
  
## splice, slice
- splice(스플라이스) : 기존의 배열에서 수정함
- slice(슬라이스) : 기존의 배열을 유지하고 새로운 배열을 만듬

```js
const numbers = [10, 20, 30, 40];

const index = numbers.indexOf(30);
const splice = numbers.splice(index, 2); // (시작, 몇번째)
console.log(splice) // [30, 40]
console.log(numbers) // [10, 20]

const sliced = numbers.slice(0, 2); // (시작, 종료
console.log(splice) // [10, 20]
console.log(numbers) // [10, 20, 30, 40]
```
  
## shift, pop, unshift, push  
- shift : 첫번째 원소를 배열에서 추출, 기존 배열 수정  
- unshift : 첫번째 원소로 추가, 기존 배열 수정
- pop : 마지막 원소를 배열에서 추출, 기존 배열 수정  
- push : 마지막 원소로 추가, 기존 배열 수정  

```js
const numbers = [10, 20, 30, 40];

const value = numbers.shift();
const value = numbers.pop();
const value = numbers.unshift(5);
const value = numbers.push(45);
```

## concat, join  
- concat : 두 배열을 합침, 기존의 배열은 변하지 않음
- join : 배열을 문자열로 합침  

```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const concated = arr1.concat(arr2);
const concated = [...arr1, ...arr2]; // es6

console.log(concated) // [1, 2, 3, 4, 5, 6]
console.log(arr1.join()); // 1,2,3
console.log(arr1.join(' ')); // 1 2 3
console.log(arr1.join(', ')); // 1, 2, 3
```

## reduce  
- 배열이 주어졌을때 모든 값을 사용하여 연산할때 사용
-  

```js
const number = [1, 2, 3, 4, 5];

let sum = 0;
numbers.forEach(n => {
  sum + n;
});
console.log(sum);

// reduce
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum);

// 평균
const avg = numbers.reduce((accumulator, current, index, array) => {
  if (index === array.length - 1) {
    return (accumulator + current) / array.length;
  }
  return accumulator + current;
}, 0);
consloe.log(avg);
```
- 예시2 
```js
const alphabets = ['a', 'a', 'a', 'b', 'c', 'c', 'd', 'e'];

const counts = alphabets.reduce((acc, current) => {
  if (acc[current]) {
    acc[current] += 1;
  } else {
    acc[current] = 1;
  }
  return acc;
}, {});
console.log(counts); // Object {a: 3, b: 1, c: 2, d: 1, e: 1};
```
