// 무작위로 숫자 뽑기
// Math.random() : 범위 - 0 이상, 1 미만
// Math.random() * 9 + 1 : 범위 - 1 이상, 10 미만
// Math.floor(Math.random() * 9 + 1) : 내림
// 배열 : 단순 값들을 모을 용도
// 객체 리터널 : 각각의 값에 속성 이름을 붙여서 값을 구분해야 할 때
// 하나가 수정될때 하나의 수정만 발생하도록 코드를 제작해야한다.
// html 선택을 변수에 넣을땐 $ 또는 _ 로 구분하기 등 구별법이 필요함

// 정규표현식 : https://github.com/ziishaned/learn-regex

// 선택자
const $input = document.querySelector('#input');
const $form = document.querySelector('#form');
const $logs = document.querySelector('#logs');

const numbers = [];
for (let n = 0; n < 9; n += 1) {
  numbers.push(n + 1);
}

const answer = [];
for (let n = 0; n <= 3; n += 1) { // 네 번 반복
  const index = Math.floor(Math.random() * numbers.length); // 0~8 정수
  answer.push(numbers[index]);
  numbers.splice(index, 1);
}
console.log(answer);

const tries = [];
function checkInput(input) { // 검사하는 코드
  if (input.length !== 4) { // 길이는 4가 아닌가
    return alert('4자리 숫자를 입력해 주세요');
  }
  if (new Set(input).size !== 4) { // 중복된 숫자가 있는가
    return alert('중복되지 않게 입력해 주세요');
  }
  if (tries.includes(input)) { // 이미 시도한 값 아닌가
    return alert('이미 시도한 값입니다');
  }
  return true;
}

function defeated() {
  const message = document.createTextNode(`패배! 정답은 ${answer.join('')}`);
  $logs.appendChild(message);
}

let out = 0;
$form.addEventListener('submit', (event) => {
  event.preventDefault(); // html 기본동작 막기
  const value = $input.value; // 입력값을 변수에 저장
  $input.value = ''; // 변수에 저장 후 입력창 지우기
  
  if (!checkInput(value)) {
    return;
  }
  if (answer.join('') === value) { // 홈런
    $logs.textContent = '홈런';
    return;
  }
  if (tries.length >= 9) { // 패배
    defeated();
    return;
  }

  // 몇 스트라이크 몇 볼인지 검사
  let strike = 0;
  let ball = 0;
  // answer : 3146, value : 1347
  for (let i = 0; i < answer.length; i++) {
    const index = value.indexOf(answer[i]);
    if (index > -1) { // 일치하는 숫자 발견
      if (index === i) { // 자릿수도 같음 
        strike += 1;
      } else { // 숫자만 같음
        ball += 1;
      }
    }
  }

  if (strike === 0 && ball === 0) {
    out++;
    $logs.append(`${value}: 아웃`, document.createElement('br'));
  } else {
    $logs.append(`${value}: ${strike} 스크라이크, ${ball} 볼`, document.createElement('br'));
  }

  if (out === 3) {
    defeated();
    return
  }

  // $logs.append(`${value}: ${strike} 스트라이크 ${ball} 볼`, document.createElement('br'));
  tries.push(value);

});
