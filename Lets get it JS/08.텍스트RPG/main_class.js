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

/* 클래스로 재구성하기
- 화살표 함수 사용 안함
- class의 this는 자기 자신을 가리킨다
class Monster {
  constructor(name, hp, att, xp) {
    this.name = name;
    this.hp = hp;
    this.att = att;
    this.xp = xp;
  }
  attact(monster) {
    monster.hp -= this.att;
    this.hp -= monster.att;
  }
  heal(monster) {
    this.hp += 20;
    this.hp -= monster.att;
  },
}

class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayName() {
    console.log(this.name);
  }
  sayAge() {
    console.log(this.age);
  }
}

class Programmer extends Human {
  constructor(name, age, languages) {
    super (name, age);
    this.languages = languages;
  }
  writeCode() {
    console.log(this.languages.join() + '(으)로 코딩해요.');
  }
}
*/

class Game {
  constructor(name) {
    this.monster = null;
    this.hero = new Hero(this, name);
    this.monsterList = [
      { name: '슬라임', hp: 25, att: 10, xp: 10 },
      { name: '스켈레톤', hp: 50, att: 15, xp: 20 },
      { name: '마왕', hp: 150, att: 35, xp: 50 },
    ];
    this.start(name);
  }
  start(name) {
    $gameMenu.addEventListener('submit', this.onGameMenuInput);
    $battleMenu.addEventListener('submit', this.onBattleMenuInput);
    this.changeScreen('game');
    this.hero = new Hero(this, name);
    this.updateHeroStat();
  }
  changeScreen(screen) {
    if (screen === 'start') {
      $startScreen.style.display = 'block';
      $gameMenu.style.display = 'none';
      $battleMenu.style.display = 'none';
    } else if (screen === 'game') {
      $startScreen.style.display = 'none';
      $gameMenu.style.display = 'block';
      $battleMenu.style.display = 'none';
    } else if (screen === 'battle') {
      $startScreen.style.display = 'none';
      $gameMenu.style.display = 'none';
      $battleMenu.style.display = 'block';
    }
  }
  onGameMenuInput = (event) => {
    event.preventDefault();
    const input = event.target['menu-input'].value;
    if (input === '1') { // 모험
      this.changeScreen('battle');
      const randomIndex = Math.floor(Math.random() * this.monsterList.length);
      const randomMonster = this.monsterList[randomIndex];
      this.monster = new Monster(
        this,
        randomMonster.name,
        randomMonster.hp,
        randomMonster.att,
        randomMonster.xp,
      );
      this.updateMonsterStat();
      this.showMessage(`몬스터와 마주쳤다. ${this.monster.name}인 것 같다!`);
    } else if (input === '2') { // 휴식
      this.hero.hp = this.hero.maxHp;
      this.updateHeroStat();
      this.showMessage('충분한 휴식을 취했다.');
    } else if (input === '3') { // 종료
      this.showMessage(' ');
      this.quit();
    }
  }
  onBattleMenuInput = (event) => {
    event.preventDefault();
    const input = event.target['battle-input'].value;
    if (input === '1') { // 공격
      const { hero, monster } = this;
      hero.attack(monster);
      monster.attack(hero);

      if (hero.hp <= 0) {
        this.showMessage(`${hero.lev} 레벨에서 전사. 새 주인공을 생성하세요.`);
        this.quit();
      } else if (monster.hp <= 0) {
        this.showMessage(`몬스터를 잡아 ${monster.xp} 경험치를 얻었다.`);
        hero.getXp(monster.xp);
        this.monster = null;
        this.changeScreen('game');
      } else { // 전투 진행 중
        this.showMessage(`${hero.att}의 데미지를 주고, ${monster.att}의 데미지를 받았다.`);
      }
      this.updateHeroStat();
      this.updateMonsterStat();
    } else if (input === '2') { // 회복
      const { hero, monster } = this;
      hero.hp = Math.min(hero.maxHp, hero.hp + 20);
      monster.attack(hero);
      this.showMessage('체력이 조금 회복했다!');
      this.updateHeroStat();
    } else if (input === '3') { // 도망
      this.changeScreen('game');
      this.showMessage('부리나케 도망쳤다!');
      this.monster = null;
      this.updateMonsterStat();
    }
  }
  updateHeroStat() {
    const { hero } = this;
    if (hero === null) {
      $heroName.textContent = '';
      $heroLevel.textContent = '';
      $heroHp.textContent = '';
      $heroXp.textContent = '';
      $heroAtt.textContent = '';
      return;
    }
    $heroName.textContent = hero.name;
    $heroLevel.textContent = `${hero.lev}Lev`;
    $heroHp.textContent = `HP: ${hero.hp}/${hero.maxHp}`;
    $heroXp.textContent = `XP: ${hero.xp}/${15 * hero.lev}`;
    $heroAtt.textContent = `ATT: ${hero.att}`;
  }
  updateMonsterStat() {
    const { monster } = this;
    if (monster === null) {
      $monsterName.textContent = '';
      $monsterHp.textContent = '';
      $monsterAtt.textContent = '';
      return;
    }
    $monsterName.textContent = monster.name;
    $monsterHp.textContent = `HP: ${monster.hp}/${monster.maxHp}`;
    $monsterAtt.textContent = `ATT: ${monster.att}`;
  }
  showMessage(text) {
    $message.textContent = text;
  }
  quit() {
    this.hero = null;
    this.monster = null;
    this.updateHeroStat();
    this.updateMonsterStat();
    $gameMenu.removeEventListener('submit', this.onGameMenuInput);
    $battleMenu.removeEventListener('submit', this.onBattleMenuInput);
    this.changeScreen('start');
    game = null;
  }
}

class Unit {
  constructor(game, name, hp, att, xp) {
    this.game = game;
    this.name = name;
    this.maxHp = hp;
    this.hp = hp;
    this.xp = xp;
    this.att = att;
  }
  attack(target) {
    target.hp -= this.att;
  }
}

class Hero extends Unit {
  constructor(game, name) {
    super(game, name, 100, 10, 0); // 부모클래스 생성자 함수 호출
    this.lev = 1;
  }
  heal(monster) {
    this.hp += 20;
    this.hp -= monster.att;
  }
  getXp(xp) {
    this.xp += xp;
    if (this.xp >= this.lev * 15) { // 경험치를 다 채우면
      this.xp -= this.lev * 15; // xp: 10, lev: 1, maxXp: 15
      this.lev += 1;
      this.maxHp += 5;
      this.att += 5;
      this.hp = this.maxHp;
      this.game.showMessage(`레벨업! 레벨 ${this.lev}`);
    }
  }
  // attack(target) {
  //   super.attack(target);
  //   그 외의 동작 작성
  // }
}

class Monster extends Unit {
  constructor(game, name, hp, att, xp) {
    super(game, name, hp, att, xp);
  }
}

let game = null;
$startScreen.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = event.target['name-input'].value;
  game = new Game(name);
});

$gameMenu.addEventListener('submit', (event) =>{
  event.preventDefault();
  const input = event.target['menu-input'].value;
});