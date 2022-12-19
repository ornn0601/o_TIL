# Promise
- es6 내장 객체
- 생성자를 통해 프로미스 객체를 만들 수 있습니다.
- 생성자의 인자로 executor 라는 함수를 이용합니다.
- executor 함수 인자 중 하나인 resolve 함수를 실행하면, fulfilled (이행) 상태가 된다.
- executor 함수 인자 중 하나인 reject 함수를 실행하면, rejected (거부) 상태가 된다.

```js
// p라는 프로미스 객체는 1000ms 후에 fulfilled 됩니다.
const p = new Promise((resolve, reject) => {
  // pending
  setTimeout(() => {
    resolve(); // fulfilled
  }, 1000);
});

// resolve가 완료된 후 실행
p.then(() => { // callback
  console.log('1000ms 후에 fulfilled 됩니다.');
});
```

- then()
```js
function p() {
  return new Promise((resolve, reject) => {
    // pending
    setTimeout(() => {
      resolve(); // fulfilled
    }, 1000);
  });
}

p().then(() => {
  console.log('1000ms 후에 fulfilled 됩니다.');
});
```

- catch()
```js
function p() {
  return new Promise((resolve, reject) => {
    // pending
    setTimeout(() => {
      reject(); // rejected
    }, 1000);
  });
}

p()
  .then(() => {
    console.log('1000ms 후에 fulfilled 됩니다.');
  })
  .catch(() => {
    console.log('1000ms 후에 rejected 됩니다.');
  });
```

- message
```js
function p() {
  return new Promise((resolve, reject) => {
    // pending
    setTimeout(() => {
      resolve('hello');
    }, 1000);
  });
}

p()
  .then(message => {
    console.log('1000ms 후에 fulfilled 됩니다.', message);
  })
  .catch(() => {
    console.log('1000ms 후에 rejected 됩니다.');
  });
```

```js
function p() {
  return new Promise((resolve, reject) => {
    // pending
    setTimeout(() => {
      reject('error');
    }, 1000);
  });
}

p()
  .then(message => {
    console.log('1000ms 후에 fulfilled 됩니다.', message);
  })
  .catch(reason => {
    console.log('1000ms 후에 rejected 됩니다.', reason);
  });
```

- 에러 객체
```js
function p() {
  return new Promise((resolve, reject) => {
    // pending
    setTimeout(() => {
      reject(new Error('bad'));
    }, 1000);
  });
}

p()
  .then(message => {
    console.log('1000ms 후에 fulfilled 됩니다.', message);
  })
  .catch(error => {
    console.log('1000ms 후에 rejected 됩니다.', error);
  });
```

- fulfilled 되거나 rejected 된 후에 최종적으로 실행할 것이 있다면, .finally()를 설정하고, 함수를 인자로 넣습니다.
```js
function p() {
  return new Promise((resolve, reject) => {
    // pending
    setTimeout(() => {
      reject('error');
    }, 1000);
  });
}

p()
  .then(message => {
    console.log('1000ms 후에 fulfilled 됩니다.', message);
  })
  .catch(reason => {
    console.log('1000ms 후에 rejected 됩니다.', reason);
  })
  .finally(() => {
    console.log('end');
  });
```

- 프로미스가 없었을 경우
```js
function c(callback) {
  setTimeout(() => {
    callback();
  }, 1000);
}

// 1번 실행
c(() => {
  console.log('1000ms 후에 callback 함수가 실행됩니다.');
});

// 3초 후에 콜백 함 수 실행
c(() => {
  c(() => {
    c(() => {
      console.log('3000ms 후에 callback 함수가 실행됩니다.');
    });
  });
});
```

- 프로미스를 활용한 비동기 작업
```js
function p() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

p()
  .then(() => { // 1초
    return p();
  })
  .then(() => p()) // 2초
  .then(p) // 3초
  .then(() => { // 4초
    console.log('4000ms 후에 fulfilled 됩니다.');
  });
```

---

### Promise.all[프로미스 객체들]
- 프로미스 객체 여러개를 생성하여,
- 배열로 만들어 인자로 넣고 Promise.all 을 실행하면,
- 배열의 모든 프로미스 객체들이 fulfilled 되었을 때, then 의 함수가 실행됩니다.
- then 의 함수의 인자로 프로미스 객체들의 resolve 인자값을 배열로 돌려줍니다.

```js
function p(ms) {
  return new Promise((resolve, reject) {
    setTimeout(() => {
      resolve(ms);
    }, ms)
  });
}

Promise.all[p(1000), p(2000), p(3000)].then(messages => {
  console.log('모두 fulfilled 된 이후에 실행됩니다.', messages); // 3초 후 실행, [1000, 2000, 3000]
});
```

---

### Promise.race[프로미스 객체들]
- 프로미스 객체 여러개를 생성하여,
- 배열로 만들어 인자로 넣고 Promise.all 을 실행하면,
- 배열의 모든 프로미스 객체 중 가장 먼저 fulfilled 된 것으로, then 의 함수가 실행됩니다.
- then 의 함수의 인자로 가장 먼저 fulfilled 된 프로미스 객체의 resolve 인자값을 배열로 돌려줍니다.

```js
function p(ms) {
  return new Promise((resolve, reject) {
    setTimeout(() => {
      resolve(ms);
    }, ms)
  });
}

Promise.race[p(1000), p(2000), p(3000)].then(messages => {
  console.log('가장 빠른 하나가 fulfilled 된 이후에 실행됩니다.', messages); // 1초 후 실행, 1000
});
```

