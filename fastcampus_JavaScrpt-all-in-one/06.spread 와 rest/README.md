#06.spread 와 rest

## 1. spread
- 펼치다, 퍼트리다
- 객체 혹은 배열을 퍼트릴 수 있다.
- 기존 객체를 참고해서 새로운 객체를 만들때 사용
- spread 연산자: ...이름
- 위치에 따라 같은 이름은 덮어쓰기 된다.

```js
const slime = {
  name: '슬라임'
};

const cuteSlime = {
  name: '슬라임',
  attribute: 'cute'
};

const purpleCuteSlime = {
  name: '슬라임',
  attribute: 'cute',
  color: 'purple'
};

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);
```

- spread 사용
```js
const slime = {
  name: '슬라임'
};

const cuteSlime = {
  ...slime,
  attribute: 'cute'
};

const purpleCuteSlime = {
  ...cuteSlime,
  color: 'purple'
};

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);
```

- 배열
```js
const animals = ['개', '고양이', '참새'];
const anotherAnimal = [...animals, '비둘기']

console.log(animals) // ['개', '고양이', '참새']
console.log(anotherAnimal) // ['개', '고양이', '참새', '비둘기']

// 여러번 사용할 수 있다
const numbers = [1, 2, 3, 4, 5];
const spreadNumbers = [...numbers, 1000, ...numbers];

console.log(spreadNumbers) // [1, 2, 3, 4, 5, 1000, 1, 2, 3, 4, 5]
```

## 2. rest
- ...
- 객체, 배열, 함수 파라미터에서 사용
- 퍼져있는 것들을 다시 모아오는 역할을 한다.
- 나머지가 전부 모아져서 담긴다.

```js
const purpleCuteSlime = {
  name: '슬라임',
  attribute: 'cute',
  color: 'purple'
};

const { color, ...rest } = purpleCuteSlime;

console.log(color); // purple
console.log(rest); // Object { name, attribute }

// ...rest는 이름을 변경할 수 있다.
```

- 배열
  - 배열에서의 rest는 가장 마지막에 위치해야한다.
```js
const numbers = [1, 2, 3, 4, 5];

const [ one, ...rest ] = numbers;

console.log(one); // 0
console.log(rest); // [1, 2, 3, 4, 5]
```

- 함수 파라미터
```js
// 모든 값들을 합해주는 함수
function sum(a, b, c, d, e, f, g) {
  return a + b + c + d + e + f + g;
}

function sum(a, b, c, d, e, f, g) {
  let result = 0;
  if (a) result += a;
  if (b) result += b;
  if (c) result += c;
  if (d) result += d;
  ...
  return result
}
console.log(sum[1, 2, 3, 4, 5, 6 ,7 ,8]);

// rest 사용
function sum(...rest) {
  return rest.reduce((acc, current) => acc + current, 0);
}
console.log(sum[1, 2, 3, 4, 5, 6 ,7 ,8]); // 36
```

- 함수 인자
  - 파라미터는 함수에서 받아오는 값
  - 인자는 함수를 사용할때 넣어주는 값
```js
  function subtract(x, y) {
    return x - y;
  }

  const numbers = [ 1, 2 ];
  const result = subtract(...numbers);
  console.log(result) // -1

  const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
   console.log(sum(...numbers)) // 36
```

## Q1. 함수에 n개의 숫자들이 파라미터로 주어졌을 때, 그 중 가장 큰 값을 알아내세요
```js
function max() {
  return 0;
}

const result = max( 1, 2, 3, 4, 10, 5, 6, 7);
console.log(result)
```