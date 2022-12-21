# 프로젝트 : MY Favorite Books

1. 리스트 페이지
2. 로그인 페이지
3. 책 추하기
4. 책 정보 보기
5. 책 정보 수정


```js
// Login Promise
axios.post('https://api.marktube.tv/v1/me', {
  email,
  password,
}).then(res => {});

// Login Async-Await
const res = await axios.post('https://api.marktube.tv/v1/me', {
  email,
  password
});
```