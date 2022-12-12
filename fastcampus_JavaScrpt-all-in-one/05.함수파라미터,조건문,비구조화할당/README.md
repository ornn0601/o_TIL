# 05.함수파라미터, 조건문, 비구조화할당

## 1. 함수의 기본 파라미터
- 넣어야하는 값을 넣지 않았을때 기본값으로 사용할 값을 지정하는 것

```js
function calculateCircleArea(r) {
  return Math.PI * r * r;
}

const area = calculateCircleArea(4);
console.log(area); // 50.2...

const area = calculateCircleArea();
console.log(area); // NaN
```
```js
// r이 주어지지 않았을때 기본값 1 사용
function calculateCircleArea(r) {
  const radius = r || 1;
  return Math.PI * radius * radius;
}

// es6 기본 파라미터 문법
function calculateCircleArea(r = 1) {
  return Math.PI * r * r;
}

// => 함수
const calculateCircleArea = (r = 1) => Math.PI * r * r;
```

## 2. 조건문 더 스마트하게 쓰기
- 여러가지 상황에 맞춰서 값을 찾아야 하는 경우
- 조건에 따라 해야하는 작업이 달라진다면 객체를 활용하면 더 보기 좋은 코드를 만들 수 있음
```js
// 샘플
function isAnimal(text) {
  return (
    text === '고양이' || text === '개' || text === '거북이'
  );
}
console.log(isAnimal('개')); // true
console.log(isAnimal('노트북')); // false
```
```js
// 개선
function isAnimal(text) {
  const animals = ['고양이', '개', '거북이']
  return animals.includes(text);
}
console.log(isAnimal('개')); // true
console.log(isAnimal('노트북')); // false

// es6
const isAnimal = (text) => ['고양이', '개', '거북이'].includes(text);
```

- 
```js
// 샘플
function getSound(animal) {
  if (animal === '개') return '멍멍';
  if (animal === '고양이') return '야옹';
  if (animal === '참새') return '짹짹';
  return '...?';
}

// 개선
function getSound(animal) {
  const sounds = {
    개 : '멍멍',
    고양이 : '야옹',
    참새 : '짹짹' 
  };
  return sounds[animal] || '...?';
}

console.log(getSound('개'));

// 개선 2
function makeSound(animal) {
  const tasks = {
    개: () => {
      console.log('멍멍');
    },
    고양이() {
      console.log('양옹');
    },
  }
  const task = tasks[animal];
  if (!task) {
    console.log('...?');
    return;
  }
  tasks();
}

makeSound('개');
```

## 3. 비구조화 할당 (구조 분해)

```js
const object = { a: 1, b: 2 };

const { a, b } = object;
console.log(a); // 1
console.log(b); // 2

function print({ a, b }) {
  console.log(a);
  console.log(b);
}
print(object);

// 값이 없을때 기본값 사용하기
const object = { a: 1 };
const { a: 1, b = 2 } = object;
console.log(a); // 1
console.log(b); // 2

function print({ a, b = 2 }) {
  console.log(a);
  console.log(b);
}
print(object);
```

- 비구조 할당 이름 바꾸기
- 기존 이름은 그대로 유지된다.
```js
const animal = {
  name: '멍멍이',
  type: '개'
};

const nickname = animal.name;

const { name: nickname } = animal;
console.log(nickname); // '멍멍이'
```

- 배열 비구조 할당
```js
const array = [1, 2];

const [one, two] = array;

console.log(one); // 1
console.log(two); // 2
```

- 객체의 깊숙한 곳에 있는 값을 꺼내는 방법
```js
const deepObject = {
  state: {
    information: {
      name: 'name',
      languages: ['korea', 'english', 'chinese']
    }
  },
  value: 5
}

// 1. 비구조 할당 문법을 두번 사용하기 (선호)
const { 
  name,
  languages: [first, second]
} = deepObject.state.information;
const { value } = deepObject;

// 2. 한번에 여러 값을 가져오기
const {
  state: {
    information: {
      name, languages: [first, second]
    }
  },
  value
} = deepObject;

// const extracted = {
//   name,
//   languages,
//   value
// }
const extracted = {
  name,
  first,
  second,
  value
}
console.log(extracted); // name: 'name', languages[...], value: 5
```