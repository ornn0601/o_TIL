// // logout 버튼 클릭 이벤트
// function bindLogoutButton() {
//   const btnLogout = document.querySelector('#btn_logout');
//   btnLogout.addEventListener('click', logout);
// }

// // 로컬에 토큰 유무 확인 : value or null
// function getToken() {
//   return localStorage.getItem('token');
// }

// // 유저 정보
// async function getUserByToken(token) {
//   try {
//     const res = await axios.get('https://api.marktube.tv/v1/me', {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     return res.data; // 유효
//   } catch (error) {
//     console.log('getUserByToken error', error); // 무효
//   }
// }

// // 나의 책을 서버에서 받아오기


// async function main() {
//   // 버튼에 이벤트 연결

//   // 토큰 체크
//   const token = getToken();
//   if (token === null) {
//     location.assign('/login');
//     return;
//   }

//   // 토큰에 서버에서 나의 정보 받아오기
//   const user = await getUserByToken(token);
//   if (user === null) {
//     localStorage.clear(); // 로컬스토리지 정보 삭제
//     location.assign('/login'); // 로그인 페이지로 이동
//     return;
//   }

//   // 나의 책을 서버에서 받아오기

//   // 받아온 책을 그리기
// }

// document.addEventListener('DOMContentLoaded', main);