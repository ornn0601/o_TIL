# 기본 이론    

## 텍스트 서식, 문단  
1. s, del : 글자 취소선  
2. sup, sub : 위 첨자, 아래 첨자  
3. mark : 형광펜 배경색  
4. u : 글자 밑줄 표시  
5. b, strong : bold  
6. text-transform : 영어에 대해 앞글자, 전체 대소문자 지정  
  
  
## 목록 만들기  
1. 순서가 있는 목록  
ol : Ordered List  
```html
ol > li
<ol>
  <li></li>
</ol>
```  
  
2. 순서가 없는 목록  
ul : Unordered List  
```html
ul > li
<ul>
  <li></li>
</ul>
```
  
3. 예시  
- 2단 메뉴의 경우 해당 메뉴의 자식 요소로 들어가야한다.  
```html
<ul>
  <li>1단 메뉴 1</li>

  <li>1단 메뉴 2
    <ul>
      <li>2단 메뉴</li>
    </ul>
  </li>

  <li>1단 메뉴 3</li>
</ul>
```
  
## CSS 우선 순위
1. !important    
2. inline  
3. ID selector  
4. Class selector  
5. Tag selector  
  
  
## 리스트 스타일  
```css
.li::before {
  content: '아이콘';
}
```
  
  
## box-shadow  
- box-shadow: inset offset-x offset-y blur color  
```css
.div {
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
  box-shadow: 0 0 20px rgba(0, 157, 255, 0.5);
  box-shadow: 5px 5px 0 #98ccff;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.4);
  box-shadow: inset 0 0 10px #fff;
  box-shadow: inset 0 0 100px #000;
}
```  
  
  
## text-shadow  
- offset-x offset-y blur color  
```css
.div {
  text-shadow: 5px 5px 0 dodgerblue;
  text-shadow: 5px 5px 0 dodgerblue, 10px 10px 0 #90c8ff;
}
```  
* inset기능을 사용할 수 없다.  
  
  
## float  
- 자식 요소에 float를 주었을 시 부모는 높이값을 잃는다. 그 높이 값을 찾기 위해 부모에 overflow: hidden을 통해 높이값을 가질 수 있다.  
```css
.parent {
  width: 600px;
  overflow: hidden;
}
.child {
  float: left;
}
```
  
- clear  
  - float 속성이 적용되면 다음 요소가 float속성을 상속 받는데 이것을 해제시킨다.  
  - clear : left, right, both  
  
  
## nth-child, nth-of-type  
- nth-child()
  - 자식요소 중에서 정해져있지 않은 순서를 정하는 가상클래스  
  - 1부터 시작  
  - 태그를 구분하지 않고 출현 순서에 따라 결정된다.  
  - 다른 요소가 들어오면 순서가 달라질 수 있다.  

- nth-of-type()  
  - 태그를 구분하여 순서를 부여한다.  
  - div.nth-of-type() : 자식요소 중 div의 순서 체크  


