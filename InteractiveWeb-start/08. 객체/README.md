# 객체(object)  

## 1. 객체가 무엇이가?  
- 속성과 기능들이 모인 집합체  

## 2. 객체 생성  

```js
  const person = {};
  person.name = '일분이';
  person.age = 10;
  person.introduce = function() {
    console.log('안녕하세요.');
  };
  person.introduce();
```  

- 속성 (property) : 일반 내용  
- 매서드 (method) : 속성 중 값이 함수인 것  

```js
  const person = {
    name: '일분이',
    age: 10,
    introcuse: function() {
      console.log('안녕하세요');
    } 
  };
  console.log(person.name);
  person.introcuse()
```
  
## 3. 객체의 this  
- 메서드를 실행한 주체 객체를 가리킨다.  

```js
  const person = {
    nickname: '일분이',
    age: 10,
    introcuse: function() {
      console.log('안녕하세요? 저는 ' + this.nickname + '고, 나이는 ' + this.age + '살이에요.');
    } 
  };  
```

## 4. 생성자 함수  
- constructor  
- 앞글자 대문자 사용 : 일반 관례  
- new : 함수가 생성자로서 호출되게 하고 싶으면 new를 붙인다.  
- 인스턴스(instance) : 생성자 함수로 생성해낸 각각의 개별 객체를 인스턴스라고 한다.

```js
  function Person(nickname, age) {
    this.nickname = nickname;
    this.age = age;
    this.introduce = function() {
      console.log('안녕하세요? 저는 ' + this.nickname + '고, 나이는 ' + this.age + '살이에요.');
    }
  }

  const person1 = new Person('일분이', 10);
  const person1 = new Person('이분이', 8);

  person1.introduce();
```  

## 5. 공통사용하는 메서드  
- prototype 객체의 메서드로 등록한다.

```js
Person.prototype.introduce = function() {
  console.log('안녕하세요? 저는 ' + this.nickname + '고, 나이는 ' this.age + '살이에요.');
};
```

- 새로운 객체를 다시 만들때  
```js
function Card(num, color) {
  this.num = num;
  this.color = color;
  this.init(); // 메서드 호출
}

// 새로운 객체로 다시 만들때
Card.prototype = {
  constructor: Card, // constructor 지정
  init: function() {
    const mainElem = document.createElement('div');
    mainElem.style.color = this.color;
    mainElem.innerHTML = this.num;
    mainElem.classList.add('card');
    document.body.appendChild(mainElem);
  }
}

const card1 = new Card(1, 'green');
const card2 = new Card(7, 'bule');
const card3 = new Card(10, 'red');
```
