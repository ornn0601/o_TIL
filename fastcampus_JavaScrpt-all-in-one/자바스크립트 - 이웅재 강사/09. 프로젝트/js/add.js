/*
#form-add-book
#title
#message
#author
#url
*/

function getToken() {
  return localStorage.getItem('token');
}

// 유저정보
async function getUserByToken(token) {
  try {
    const res = await axios.get('https://api.marktube.tv/v1/me', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return res.data;
  } catch(error) {
    console.log('getUseBuyToken error');
    return null; // 문제가 생겼을때 다음 행동으로 연결
  }
}

async function save(event) {
  event.preventDefault();
  event.stopPropagation();
  console.log('save');
  event.target.classList.add('was-validated'); // 부트스트랩, 문제없으면 ui 변경

  const titleElement = document.querySelector('#title');
  const messageElement = document.querySelector('#message');
  const authorElement = document.querySelector('#author');
  const urlElement = document.querySelector('#url');

  const title = titleElement.value;
  const message = messageElement.value;
  const author = authorElement.value;
  const url = urlElement.value;

  // 유효성 검사
  if (title === '' || message === '' || author === '' || url === '') {
    return;
  }

  const token = getToken();
  if (token === null) {
    location.assign('/login');
    return;
  }

  // 서버로 보내기
  try {
    // const res = await axios.post('https://api.marktube.tv/v1/book', {
    await axios.post('https://api.marktube.tv/v1/book', {
      title,
      message,
      author,
      url
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    location.assign('/');
  } catch(error) {
    console.log('save error'. error);
    alert('책 추가 실패');
  }
}

function bindSaveButton() {
  const form = document.querySelector('#form-add-book');
  form.addEventListener('submit', save);
}



async function main() {
  // 버튼에 이벤트 연결
  bindSaveButton();

  // 토큰 체크
  const token = getToken();
  if (token === null) {
    location.assign('/login');
    return;
  }

  // 토큰으로 서버에서 나의 정보 받아오기
  const user = await getUserByToken(token);
  if (user === null) {
    localStorage.clear();
    location.assign('/login');
    return;
  }

}


document.addEventListener('DOMContentLoaded', main);