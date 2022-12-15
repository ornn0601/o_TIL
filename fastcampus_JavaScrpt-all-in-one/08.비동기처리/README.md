# 비동기 처리

## 비동기 처리의 이해
- 동기적 처리 : 선행 작업이 완료되어야 다음 작업을 시작한다.
- 비동기적 처리 : 동시에 여러가지 작업을 처리하고, 기다리는 과정에서 다른 함수를 호출 할 수 있다.
- 사용처 : Ajax Web API 요청, 파일 읽기, 암호화/복호화, 작업 예약

```js
function work() {
  const start = Date.now();
  for (let i = 0; i < 1000000000; i++) {

  }
  const end = Data.now();
  console.log(end - start + 'ms');
}

work(); // 512ms
console.log('다음작업'); // 512ms 다음작업
```

### 비동기적 처리
- 실행순서 : 작업시작 - 다음작업 - 526ms

```js
function work() {
  setTimeout(() => {
    const start = Date.now();
    for (let i = 0; i < 1000000000; i++) {

    }
    const end = Data.now();
    console.log(end - start + 'ms');
  }, 0); // 0이지만 실제는 4ms로 적용된다. 브라우저 최소 수치
}

console.log('작업시작');
work();
console.log('다음작업');
```

### callback 함수
- 함수타입의 값을 파라미터로 넘겨줘서 파라미터로 받은 함수를 특정 작업이 끝나고 나서 호출해주는 것을 의미한다.
- 실헹 순서 : 작업시작 - 다음작업 - 518ms - 작업이 끝났어요 - 518ms 걸렸다고 해요

```js
function work(callback) {
  setTimeout(() => {
    const start = Date.now();
    for (let i = 0; i < 1000000000; i++) {

    }
    const end = Data.now();
    console.log(end - start + 'ms');
    callback(end - start);
  }, 0); // 0이지만 실제는 4ms로 적용된다. 브라우저 최소 수치
}

console.log('작업시작');
work((ms) => {
  console.log('작업이 끝났어요');
  console.log(ms + 'ms 걸렸다고 해요');
});
console.log('다음작업');
```
---

## Promise
- 비동기를 좀 더 쉽게 할 수 있도록 도와주는 문법

- 콜백 함수를 많이 사용할 경우 코드가 복잡해지는 예시
```js
function increaseAndPrint(n, callback) {
  setTimeout(() => {
    const increased = n + 1;
    console.log(increased);
    if (callback) {
      callback(increased);
    }
  }, 1000);
}

increaseAndPrint(0, n => {
  increaseAndPrint(n, n => {
    increaseAndPrint(n, n => {
      increaseAndPrint(n, n => {
        console.log('작업 끝'); // 1, 2, 3, 4, 5, 작업 끝 = 콜백지옥
      })
    });
  });
});
```

- Promise 만들기
- then : 프로미스가 끝나고 진행 될 작업을 설정할 수 있다.
- 불편한 점 : 
  - 에러를 잡을 때 어떤 부분에서 에러가 발생한지 파악하기 어렵다
  - 특정 조건에 따라 분기하기 어렵다.
  - 특정 값을 공유해가며 작업하기 어렵다.

```js
// 성공하는 경우
const myPromise = new Promise((resolve, reject) {
  setTimeout(() => {
    resolve('result');
  }, 1000);
});

myPromise.then(result => {
  console.log(result); // result
});

// 실패하는 경우
const myPromise = new Promise((resolve, reject) {
  setTimeout(() => {
    reject(new Error());
  }, 1000);
});

myPromise.then(result => {
  console.log(result); // result
}).catch(e => {
  console.error(e);
})
```

- 
```js
function increaseAndPrint(n) {
  return new Promise((resolve, reject) {
    setTimeout(() => {
      const value = n + 1;
      if (value === 5) {
        const error = new Error();
        error.name = 'ValueIsFiveError';
        reject(error);
        return;
      }
      console.log(value);
      resolve(value);
    }, 1000);
  });
}

increaseAndPrint(0).then(n => {
  return increaseAndPrint(n);
}).then(n => {
  return increaseAndPrint(n);
}).then(n => {
  return increaseAndPrint(n);
}).then(n => {
  return increaseAndPrint(n);
}).then(n => {
  return increaseAndPrint(n);
}).catch(e => {
  console.error(e);
})
// 1, 2, 3, 4, error

increaseAndPrint(0).then(increaseAndPrint)
.then(increaseAndPrint);
.then(increaseAndPrint);
.then(increaseAndPrint);
.then(increaseAndPrint);
.catch(e => {
  console.error(e);
}); // 1, 2, 3, 4, error
```

---

## async / await
- 키워드 async로 시작하여 프로미스 앞에 await를 붙여준다.
- 함수 자체에서 흐름이 다른 함수로 넘어가지 않아 변수 공유 등 로직을 작성하기 편해진다.
- async의 결과물은 프로미스를 반환한다.

```js
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function process() {
  console.log('안녕하세요');
  await sleep(1000);
  console.log('반갑습니다.');
  return true;
}
process().then(value => {
  console.log(value); // true
}); // 안녕하세요, 반갑습니다.
```

- error
```js
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function makeError() {
  await sleep(1000);
  const error = new Error();
  throw error;
}

async function process() {
  try {
    await makeError();
  } catch (e) {
    console.error(e);
  }
}

proess();
```

## Promise all, Promise.race
```js
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const getDog = async () => {
  await sleep(1000);
  return '멍멍이'
}

const getRabbit = async () => {
  await sleep(500);
  return '토끼'
}

const getTurtle = async () => {
  await sleep(3000);
  return '거북이'
}

async function process() {
  const dog = await gotDog();
  console.log(dog);
  const rabbit = await getRabbit();
  console.log(rabbit);
  const turtle = await getTurtle();
  console.log(turtle);
} // 멍멍이, 토끼, 거북이

// 동시에 처리를 하고 싶다면
// - Promise.all : 마지막에 끝나는 요소의 시간에 따라 전체가 실행됨
// - 셋중에 하나라도 전체 로직이 에러가 발생한다.
async function process() {
  const results = await Promise.all([gotDog(), getRabbit(), getTurtle()]);

  // 구조분해
  const [dog, rabbit, turtle] = await Promise.all([gotDog(), getRabbit(), getTurtle()]);

}
process() // [멍멍이, 토끼, 거북이]

// - Promise.race : 가장 빨리 끝나는 요소가 결과물이 된다.
// - 가장 빨리 끝난 것이 error라고 할때만 error를 발생한다.
async function process() {
  try {
    const rabbit = await Promise.race([gotDog(), getRabbit(), getTurtle()]);
  } catch(e) {
    console.log(e); // 토끼
  }
}
```

