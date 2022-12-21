// 토큰 체크
function getToken() {
  return localStorage.getItem('token');
}

// 로그인
async function login(event) {
  event.preventDefault(); // 기본 기능 막기
  event.stopPropagation(); // 상위 전파 막기

  const emailElement = document.querySelector('#email');
  const passwordElement = document.querySelector('#password');

  const email = emailElement.value;
  const password = passwordElement.value;

  try {
    const res = await axios.post('https://api.marktube.tv/v1/me', {
      email,
      password,
    });

    const {token} = res.data; // const token = res.data.token;
    if (token === undefined) {
      return;
    }
    localStorage.setItem('token', token);
    location.assign('/');
  } catch (error) {
    const data = error.response.data;
    if (data) {
      const state = data.error;
      if (state === 'USE_NOT_EXIST') {
        alert('사용자가 존재하지 않습니다.');
      } else if (state === 'PASSWORK_NOT_MATCH') {
        alert('비밀번호가 틀렸습니다.');
      }
    }
  }
}

// 버튼 이벤트 연결
function bindLoginButton() {
  const form = document.querySelector('#form-login');
  form.addEventListener('submit', login);
}

function main() {
  // 버튼 이벤트 연결
  bindLoginButton();

  // 토큰 체크
  const token = getToken();
  if (token !== null) {
    location.assign('/');
    return;
  }

}
document.addEventListener('DOMContentLoaded', main);