# Async / Await
- Promise 객체를 리턴하는 함수

```js
function p(ms) {
  return new Promise((resolve, reject) {
    setTimeout(() => {
      resolve(ms);
    }, ms)
  })
}

// Promise 객체를 이용해서 비동기 로직을 수행할 때
p(1000).then(ms => {
  console.log(`${ms} ms 후에 실행된다.`);
});

// Promise 객체를 리턴하는 함수를 await 로 호출하는 방법
// 실제로는 비동기 처리를 보냈지만 비동기 처리가 끝날때까지 다음줄로 넘어가지 않고 기다렸다가 resolve가 되면 그때 인자값을 리턴하여 이어지게 된다.

const ms = await p(1000);
console.log(`${ms} ms 후에 실행된다.`);

// await 를 사용하는 경우, 항상 async 함수 안에서 사용되어야 한다.

async function main() {
  const ms = await p(1000);
  console.log(`${ms} ms 후에 실행된다.`);
}

// 즉시 실행
(async function main() {
  const ms = await p(1000);
  console.log(`${ms} ms 후에 실행된다.`);
})();

// 어떤 비동기 처리가 밑으로 흘러가기 로직을 만들 수 있다는 것이 장점이다.

```

## try catch
- Promise 객체가 rejected 된 경우의 처리를 위해
- try catch 를 이용한다.

```js
// resolve
function p(ms) {
  return new Promise((resolve, reject) {
    setTimeout(() => {
      resolve(ms);
      // reject(new Error('reason'));
    }, ms)
  });
}

(async function main() {
  try {
    const ms = await p(1000);
    console.log(`${ms} ms 후에 실행된다.`);
  } catch (error) {
    console.log(error);
  }
})();
```
  
- async function 에서 return 되는 값은
- Promise.resolve 함수로 감싸서 리턴된다.

```js
function p(ms) {
  return new Promise((resolve, reject) {
    setTimeout(() => {
      resolve(ms);
      // reject(new Error('reason'));
    }, ms)
  });
}

async function asyncP() {
  const ms = await p(1000);
  return 'mark'; // ms가 완료될때까지 기다렸다가 실행된다.
}

(async function main() {
  try {
    const ms = await asyncP();
    console.log(name); // 'mark'
  } catch (error) {
    console.log(error);
  }
})();
```
```js
// reject
function p(ms) {
  return new Promise((resolve, reject) {
    setTimeout(() => {
      // resolve(ms);
      reject(new Error('reason'));
    }, ms)
  });
}

async function asyncP() {
  const ms = await p(1000);
  return 'mark'; // ms가 완료될때까지 기다렸다가 실행된다.
}

(async function main() {
  try {
    const ms = await asyncP();
    console.log(name); // 'mark'
  } catch (error) {
    console.log(error);
  }
})();
```

## finally
```js
function p(ms) {
  return new Promise((resolve, reject) {
    setTimeout(() => {
      // resolve(ms);
      reject(new Error('reason'));
    }, ms)
  });
}

async function asyncP() {
  const ms = await p(1000);
  return 'mark'; // ms가 완료될때까지 기다렸다가 실행된다.
}

(async function main() {
  try {
    const ms = await asyncP();
    console.log(name); // 'mark'
  } catch (error) {
    console.log(error);
  } finally { // 마지막으로 항상 실행
    console.log('end');
  }
})();
```

## 연속 사용
```js
function p(ms) {
  return new Promise((resolve, reject) {
    setTimeout(() => {
      // resolve(ms);
      reject(new Error('reason'));
    }, ms)
  });
}

// Promise
p(1000) 
  .then(() => p(1000))
  .then(() => p(1000))
  .then(() => {
    console.log('3000ms 후에 실행');
  })


// async await
(async function main() {
  await p(1000);
  await p(1000);
  await p(1000);
  console.log('3000ms 후에 실행');
})();
```

## Promise.all / race
```js
function p(ms) {
  return new Promise((resolve, reject) {
    setTimeout(() => {
      // resolve(ms);
      reject(new Error('reason'));
    }, ms)
  });
}

// Promise.all
(async function main() {
  cont result = await Promise.all([p(1000), p(2000), p(3000)]);
  console.log(results); // 3초 후 [1000, 2000, 3000]
})();

// Promise.race
(async function main() {
  cont result = await Promise.race([p(1000), p(2000), p(3000)]);
  console.log(results); // 1초 후 1000
})();
```


