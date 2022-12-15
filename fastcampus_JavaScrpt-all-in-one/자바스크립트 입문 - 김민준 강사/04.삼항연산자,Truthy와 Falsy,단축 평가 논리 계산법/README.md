# 04.삼항연산자, Truthy와 Falsy, 단축 평가 논리 계산법

## 1. 삼항연산자
- condition ? true : false
  
```js
const array = [];

let text = '';
if (array.length === 0) {
  text = '배열이 비어있습니다.';
} else {
  text = '배열이 비어있지 않습니다.';
}

// 한줄
let text = array.length === 0 ? '배열이 비어있습니다.' : '배열이 비어있지 않습니다.';

// 줄내림
let text = array.length === 0 
  ? '배열이 비어있습니다.' 
  : '배열이 비어있지 않습니다.';

console.log(text);

// 중첩 사용은 가능하나 if문 사용을 권장한다.
const condition1 = false;
const condition2 = false;

const value = condition1
  ? '와우!'
  : condition2
    ? 'blabla'
    : 'foo'

console.log(value) // 'foo'
```

## 2. Truthy와 Falsy
- Truthy : true 같은거
  - falsy한 값을 제외한 모든 값
- Falsy : false 같은거
  - undefined, null, 0, '공백', NaN, false

```js
function print(person) {
  if (person === undefined || person === null) {
    return;
  }

  // 위에 값을 !를 사용하여 대응할 수 있음
  if (!person) {
    return;
  }
}

const value = 'abcd';
if (value) {
  console.log('true'); // true
}

const truthy = value ? true : false;
console.log(truthy); // true

const truthy = !!value;
console.log(truthy); // true
```

## 3. 단축 평가 논리 계산법
- 논리 연산자를 사용하여 코드를 짧게 사용하는 방법
- && : 앞에 요소가 true면 뒤에 요소가 실행된다.
```js
true && true // true
true && false // false
true || true // true
false || true // true
```

- &&
  - 앞에 요소가 truthy한 값이면 뒤에 요소가 실행된다.
  - 앞에 요소가 falsy한 값이면 앞에 요소가 실행된다.
  - 특정 값이 유효할때 어떤값을 조회해야하는 상황에 사용됨

```js
console.log(true && 'hello'); // 'hello'
console.log(false && 'hello'); // false
console.log('hello' && 'bye'); // 'bye'

// 사용 예시
const object = null;
const name = object && object.name; // null
```

- ||
  - 어떤 값이 falsy하다면 대체로 사용할 값을 지정해줄때 사용
  - 앞에 값이 falsy하다면 뒤에 값이 실행된다.
  - 앞에 truthy한 값이면 앞에 값이 실행된다.
  - 어떠한 값이 없을때 그거 대신에 이거 사용할래 라는 상황에서 사용하면 유용함
```js
// 예시
const namelessDog = {
  name: '',
};

function getName(animal) {
  const name = animal && animal.name;
  if (!name) {
    return '이름이 없는 동물입니다.';
  }
  return name;
}
const name = getName(namelessDog);
console.log(name); // '이름이 없는 동물입니다.'

// 줄여사용하면
function getName(animal) {
  const name = animal && animal.name;
  return name || '이름이 없는 동물입니다.';
}
```
```js
console.log(false || 'hello'); // 'hello'
console.log('' || 'hello'); // 'hello'

console.log(true || 'hello'); // true
console.log(1 || 'hello'); // 1
```