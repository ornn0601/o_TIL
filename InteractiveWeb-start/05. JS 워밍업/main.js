const char = document.querySelector('.characters');
const ilbuni = document.querySelector('.ilbuni');
const ilbuniGroup = document.querySelectorAll('.ilbuni');
const ilbuni2 = document.querySelector('.ilbuni:nth-child(2)');

// data-id 추가
char.setAttribute('data-id', 123);

// data-id 가져오기
let dataID = char.getAttribute('data-id');
console.log(dataID);

// 태그 만들기
const pElm = document.createElement('p');
pElm.innerHTML = '<a href="#">안녕</a>';

// 마지막 자식으로 요소 추가
char.appendChild(pElm);

// 요소 제거
char.removeChild(pElm);

// 클래스 추가한다.
ilbuni.classList.add('special');

// 모든 클래스를 삭제 후 추가한다.
ilbuni.className = 'special';

// 클래스 삭제
ilbuni.classList.remove('ilbuni');

// 토글, on/off
ilbuni.classList.toggle('ilbuni');