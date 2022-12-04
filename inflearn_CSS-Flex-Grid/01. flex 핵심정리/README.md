# 1. Flex 핵심정리  

## flex에 적용하는 속성들

### flex-direction
- 기본축 설정

```css
flex-direction: row;
flex-direction: row-reverse;
flex-direction: column;
flex-direction: column-reverse;
```

### flex-wrap  
- 줄 떨어짐 설정  

```css
flex-wrap: wrap;
flex-wrap: no-wrap;
flex-wrap: wrap-reverse;
```

### flex-flow
- flex-direction, flex-wrap을 동시에 사용하는 축약형

```css
flex-flow: row wrap;
```

### justify-content  
- 메인축 방향 정렬  

```css
justify-content : flex-start (기본값)  
justify-content : flex-end  
justify-content : center  
justify-content : space-between  
justify-content : space-around  
justify-content : space-evenly // ms지원 안함
```

### align-items  
- 수직축 방향 정렬  

```css
align-items : stretch (기본값)  
align-items : flex-start  
align-items : flex-end    
align-items : center  
align-items : baseline  // 텍스트 베이스라인 기준
```  

## align-content  
- 여러줄일 경우, 수직축 방향 정렬  
- flex-wrap 상태  

```css
align-content : stretch (기본값)  
align-content : flex-start 
align-content : flex-end  
align-content : flex-center
align-content : space-between 
align-content : space-around 
align-content : space-evenly // ms지원 안함
```
  
<hr>  
  
## flex 아이템에 적용하는 속성들  

### flex-basis  
- flex 아이템의 기본 크기를 설정합니다.  

```css
flex-basis : auto; (기본값)
flex-basis : 100px; // 숫자값
```

### flex-grow  
- 아이템이 flex-basis의 값보다 커질 수 있는지를 결정하는 속성  
- 숫자의 의미 : 여백의 비율을 지정한다.

```css
flex-grow : 0; (기본값)
flex-grow : 1;
```

### flex-shrink  
- flex-grow와 쌍을 이루는 속성으로, 작아 질 수 있는지를 결정하는 속성  

```css
flex-shrink : 1; (기본값)
flex-shrink : 0; // 크기를 고정시킨다
```

### flex  
- flex-grow, flex-shrink, flex-basis를 함께 사용할 수 있는 축약 속성  
- 순서 : grow shrink basis

```css
flex : 1;  = 1 1 0; (기본값)
flex : 1 1 auto;
flex : 1 500px
```

<hr>

## margin auto 정렬  
- 특정 요소의 좌우 여백을 조절하는 방법  

```css
.flex-container {
  display: flex;
}
.flex-item {
  width: 150px;
}
.flex-item:last-child {
  margin-left: auto;
}
```

## 고정폭과 가변폭을 함께 사용  

```css
.flex-container {
  display: flex;
}
.flex-item {}
.flex-item:nth-child(1) {
  width: 150px;
  flex: 0 0 auto;
  /* flex-shrink: 0; */
}
.flex-item:nth-child(2) {
  flex-grow: 1;
}
.flex-item:nth-child(3) {
  width: 200px;
}
```  

## Footer 창 바닥에 붙이기  

```css
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.content {
  flex: 1 auto;
  padding: 1.5rem;
}
```

## IE 버그 대응  
- min-height 정렬 버그  
- min-height 대신 height 사용

```css
.page {
  display: flex;
  flex-direction: column;
  height: 100vh; // 변경
}
.content {
  overflow: auto; // 추가
  flex: 1 auto;
  padding: 1.5rem;
}
```

<hr>

## 개별 아이템 속성  

### align-self  
- 개별 아이템 하나하나 정렬해주는 속성  
- align-self는 align-items 보다 우선권을 가진다.
- 각 속성값의 동작은 align-items와 일치합니다.  

```css
align-self: auto;
align-self: stretch;
align-self: flex-start;
align-self: flex-end;
align-self: center;
align-self: baseline;
```

### order  
- 각 아이템들의 시각적 나열 순서를 결정하는 속성  
- 숫자값이 들어가며, 작은 숫자일 수록 먼저 배치  
- "시각적" 순서일뿐, html 자체의 구조를 바꾸는 것이 아님  

```css
.flex-item:nth-child { order: 3 }
.flex-item:nth-child { order: 1 }
.flex-item:nth-child { order: 2 }

```

### z-index  
- 숫자가 클 수록 위로 올라온다.
- position의 z-index와 동일하다. 

```css
.flex-item:nth-child { z-index: 1; }
```  
  