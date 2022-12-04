// 태그 선택
const $wrapper = document.querySelector('#wrapper');

const total = parseInt(prompt('카드 개수를 짝수로 입력하세요 (최대 20).'));
const colors = ['red', 'orange', 'yellow', 'green', 'white', 'pink', 'cyan', 'violet', 'gray', 'black']; // hex, rgb 가능
let colorSlice = colors.slice(0, total / 2);
let colorCopy = colorSlice.concat(colorSlice); // concat : 원본을 수정하지 않고 새로운 배열을 만듬
let shuffled = [];
let clicked = [];
let completed = [];
let clickable = false;
let startTime;

function shuffle() { // 피셔-에이츠 셔플
  for (let i = 0; colorCopy.length > 0; i += 1) {
    const randomIndex = Math.floor(Math.random() * colorCopy.length);
    shuffled = shuffled.concat(colorCopy.splice(randomIndex, 1));
  }
}

function createCard(i) { // div.card > div.card-inner > (div.card-front + div.card-back)
  const card = document.createElement('div');
  card.className = 'card';
  const cardInner = document.createElement('div');
  cardInner.className = 'card-inner';
  const cardFront = document.createElement('div');
  cardFront.className = 'card-front';
  const cardBack = document.createElement('div');
  cardBack.className = 'card-back';
  cardBack.style.backgroundColor = shuffled[i];
  cardInner.appendChild(cardFront);
  cardInner.appendChild(cardBack);
  card.appendChild(cardInner);
  return card;
}

function onClickCard() {
  if (!clickable || completed.includes(this) || clicked[0] === this) {
    return;
  }
  this.classList.toggle('flipped');
  clicked.push(this);
  if (clicked.length !== 2) {
    return;
  }
  const firstBackColor = clicked[0].querySelector('.card-back').style.backgroundColor;
  const secondBackColor = clicked[1].querySelector('.card-back').style.backgroundColor;
  if (firstBackColor === secondBackColor) { // 두 카드가 같은 카드면
    completed.push(clicked[0]);
    completed.push(clicked[1]);
    clicked = [];
    // completed = completed.concat(clicked);
    if (completed.length !== total) {
      return;
    }
    const endTime = new Date();
    setTimeout(() => {
      alert(`축하합니다! ${endTime - startTime / 1000}초 걸렸습니다.`);
      resetGame();
    }, 1000);
    return;
  }

  clickable = false;
  setTimeout(() => {
    completed[0].classList.remove('flipped');
    completed[1].classList.remove('flipped');
    clicked = [];
    clickable = true;
  }, 500);
}

function startGame() {
  clickable = false;
  shuffle(); // 카드 섞기
  for (let i = 0; i < total; i += 1) {
    const card = createCard(i); // 카드 12장 만들기
    card.addEventListener('click', onClickCard());
    $wrapper.appendChild(card); // 화면에 카드 넣기
  }

  document.querySelectorAll('.card').forEach((card, index) => { // 카드 공개
    setTimeout(() => {
      card.classList.add('flipped');
    }, 1000 + 100 * index);
  });

  setTimeout(() => { // 카드 감추기
    document.querySelectorAll('.card').forEach((card) => {
      card.classList.remove('flipped');
    });
    clickable = true;
    startTime = new Date();
  }, 5000);
}
startGame();

function resetGame() {
  $wrapper.innerHTML = '';
  colorCopy = colors.concat(colors);
  shuffled = [];
  completed = [];
  startGame();
}