// 태그 선택
const $startScreen = document.querySelector('#start-screen');
const $gameMenu = document.querySelector('#game-menu');
const $battleMenu = document.querySelector('#battle-menu');
const $heroName = document.querySelector('#hero-name');
const $heroLevel = document.querySelector('#hero-level');
const $heroHp = document.querySelector('#hero-hp');
const $heroXp = document.querySelector('#hero-xp');
const $heroAtt = document.querySelector('#hero-att');
const $monsterName = document.querySelector('#monster-name');
const $monsterHp = document.querySelector('#monster-hp');
const $monsterAtt = document.querySelector('#monster-att');
const $message = document.querySelector('#message');

/* this
- 기본적으로 this는 window를 가리킨다.
- 객체안에 들어있는 this는 자기 자신을 가리킨다. 객체.메서드
- 
*/
const hero = {
  name: '',
  lev: 1,
  maxHp: 100,
  hp: 100,
  xp: 0,
  att: 10,
  attact: function(monster) {
    monster.hp -= this.att;
    this.hp -= monster.att;
  },
  heal(monster) {
    this.hp += 20;
    this.hp -= monster.att;
  },
};

let monster = null;
const monsterList = [
  { name: '슬라임', hp: 25, att: 10, xp: 10 },
  { name: '스켈레톤', hp: 50, att: 15, xp: 20 },
  { name: '마왕', hp: 150, att: 35, xp: 50 },
]

$startScreen.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = event.target['name-input'].value;
  $startScreen.style.display = 'none';
  $gameMenu.style.display = 'block';
  $heroName.textContent = name;
  $heroLevel.textContent = `${hero.lev}LEV`;
  $heroHp.textContent = `${hero.hp}/${hero.maxHp}`;
  $heroXp.textContent = `${hero.xp}/${15 * hero.lev}`;
  $heroAtt.textContent = `ATT: ${hero.att}`;
  hero.name = name;
});

$gameMenu.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = event.target['menu-input'].value;
  if (input === '1') { // 모험
    $gameMenu.style.display = 'none';
    $battleMenu.style.display = 'block';
    // 얕은 복사 : const monster = {...monster[0]}; monster.slice();
    // - 형태만 복사된다. 원시값만 있을때 사용한다.
    // - 내부 객체는 참조가 되기때문에 수정 시 함께 변경된다.
    // 깊은 복사 : 내부에 있는 객체 모두 복사한다.
    monster = JSON.parse(
      JSON.stringify(monsterList[Math.floor(Math.random() * monsterList.length)])
    );
    monster.maxHp = monster.hp;
    $monsterName.textContent = monster.name;
    $monsterHp.textContent = `HP: ${monster.hp}/${monster.maxHp}`;
    $monsterAtt.textContent = `ATT: ${monster.att}`;
  } else if (input === '2') { // 휴식

  } else if (input === '3') { // 종료

  }
});

$battleMenu.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = event.target['battle-input'].value;
  if (input === '1') {

  };

});