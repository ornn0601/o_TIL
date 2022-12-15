# 프로토타입과 클래스

## 객체 생성자
- 함수를 통해서 새로운 객체를 만들고 그안에 넣고 싶은 값이나 함수를 만든다.  
- 함수를 new 키워드를 사용해서 호출하게 됏을때 어떤 새로운 객체를 생성하고 값을 설정할 수 있다.

```js
function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
  this.say = function() {
    console.log('this.sound');
  }
}

Animal.prototype.say = function() {
  console.log('this.sound');
}

const dog = new Animal('개', '멍멍이', '멍멍');
const cat = new Animal('고양이', '야옹이', '야옹');

dog.say();
cat.say();
```

## 프로토타입  
- 똑같은 기능을 하는 함수를 밖으로 내보내 재사용한다.  
- 어떠한 공유되는 함수나 값을 설정

```js
function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
}

Animal.prototype.say = function() {
  console.log('this.sound');
}

const dog = new Animal('개', '멍멍이', '멍멍');
const cat = new Animal('고양이', '야옹이', '야옹');

dog.say();
cat.say();
```

## 객체 생성자 상속
- 똑같은 기능을 하는 함수를 밖으로 내보내 재사용한다.

- 상속을 하지 않으면
```js
function Dog(name, sound) {
  this.type = '개';
  this.name = name;
  this.sound = sound;
}
function Cat(name, sound) {
  this.type = '고양이';
  this.name = name;
  this.sound = sound;
}

Dog.prototype.say = function() {
  console.log('this.sound');
}
Cat.prototype.say = function() {
  console.log('this.sound');
}

const dog = new Dog('멍멍이', '멍멍');
const cat = new Cog('야옹이', '야옹');
```

- 상속을 사용하면
```js
function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
}

Animal.prototype.say = function() {
  console.log('this.sound');
}

function Dog(name, sound) {
  Animal.call(this, '개', name, sound);
}
function Cat(name, sound) {
  Animal.call(this, '고양이', name, sound);
}

Dog.prototype = Animal.prototype;
Cat.prototype = Animal.prototype;


const dog = new Animal('멍멍이', '멍멍');
const cat = new Animal('야옹이', '야옹');
```

## ES6 Class  
- 객체 생성자와 프로토타입을 쉽게 사용하기 위해 만들어진 문법  
- 함수를 작성하면 자동으로 프로토타입으로 등록이 된다.   
  
```js
class Animal {
  constructor(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
  },
  say() {
    console.log('this.sound');
  }
}

class Dog extends Animal {
  constructor(name, sound) {
    super('개', name, sound)
  }
}

class Cag extends Animal {
  constructor(name, sound) {
    super('고양이', name, sound)
  }
}

// const dog = new Animal('개', '멍멍이', '멍멍');
// const cat = new Animal('고양이', '야옹이', '야옹');
const dog = new Dog('멍멍이', '멍멍');
const cat = new Cat('야옹이', '야옹');
const cat2 = new Cat('야옹이2', '야옹이야옹이');

dog.say();
cat.say();
```

## 연습 : food class 만들기
```js
class Food {
  constructor(name) {
    this.name = name;
    this.brands = [];
  }
  addBrand(brand) {
    this.brands.push(brand)
  }
  print() {
    console.log(`${this.name}을 파는 음식점들:`)
    console.log(this.brands.join(', '));
  }
}

const pizza = new Food('피자');
pizza.addBrand('피자헛');
pizza.addBrand('도미노피자');

const chicken = new Food('치킨');
chicken.addBrand('굽네치킨');
chicken.addBrand('BBQ');

pizza.print();
chicken.print();
```