# 3. GRID 핵심정리  

## Grid 시작하기  

### 차이점  
- flex는 한 방향 레이아웃  
- grid는 두 방향 레이아웃  
따라서 flex보다 더 복잡한 레이아웃 표현이 가능합니다.  

### IE 지원   
- IE 11에서 문제없이 레이아웃이 동작합니다.  
- 데이터 생성 부분은 어려움  

<hr>

## 용어정리  

- 그리드 컨테이너 (Grid Container) : 그리드가 영향을 미치는 전체 컨테이너  
- 그리드 아이템 (Grid Item) : 컨테이너의 자식 요소  
- 그리드 트랙 (Grid Track) : Grid의 행(row) 또는 열(column)  
- 그리드 셀 (Grid Cell) : Grid의 아이템 하나가 들어는 가상의 칸  
- 그리드 라인 (Grid Line) : Grid 셀을 구분하는 선  
- 그리드 번호 (Grid Number) : Grid 라인의 각 번호  
- 그리드 갭 (Grid Gap) : Grid 셀 사이의 간격  
- 그리드 영역 (Grid Area) : Grid 라인을 둘러싸인 사각형 영역   

<hr>

## 그리드의 기본 형태  

- 시작 형태  
```css
.grid-container {
  display: grid;
}
```

### 그리드 형태 정의  
- grid-template-columns  
  - fr : fraction (비율)  
  - 높이와 넓이 모두 채울 수 있는 공간이 있으면 채운다.  

- grid-template-rows  
  - 지정되지 않은 부분은 auto가 들어간다.  

```css
.grid-container {
  display: grid;
  height: 80vh;
  grid-template-columns: 100px 300px 200px;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-columns: 1fr 500px 1fr;
  grid-template-columns: repeat(3, 1fr); /* 반복(횟수, 방식) */

  grid-template-rows: repeat(2, 1fr); 
}
```

<hr>

## 자동으로 채우기  

### minmax()  
- 최소, 최대 크기 지정하는 함수  
- minmax(최소값, 최대값)

```css
grid-template-columns : repeat(3, minmax(200px, auto));
grid-template-columns : repeat(3, minmax(20%, auto));
```  

### auto-fill
- column의 개수를 미리 정하지 않고 설정된 너비가 허용하는 한 최대한 셀을 채우는 기능 

```css
grid-template-columns : repeat(auto-fill, minmax(20%, auto))
```  

### auto-fit  
- 갯수가 모자란 경우 남은 공간을 채워준다.    

```css
grid-template-columns : repeat(auto-fit, minmax(20%, auto))
```  

<hr>

## 간격 만들기  
- 그리드 셀 사이의 간격을 설정합니다.  

### row-gap  
- 행과 행 사이의 간격  

### column-gap  
- 열과 열 사이의 간격  

### gap  
- 행, 열 사이의 간격  

<hr>

## 그리드 형태를 자동으로 정의  
- grid-template-columns (또는 grid-template-rows)의 통제를 벗어난 위치에 있는 트랙의 크기를 지정하는 속성  

### grid-auto-columns
### grid-auto-rows  

```css
grid-auto-rows : minmax(100px, auto);
```  

<hr>

## 각 셀의 영역 지정  
- Grid 아이템에 적용하는 속성  
- 각 셀의 영역을 지정합니다  

### grid-column-start
- column 시작점  

### grid-column-end  
- column 끝점  

### grid-column
- column의 start, end 종합

### grid-row-start
- row의 시작점

### grid-row-end  
- row의 끝점  

### grid-row  
- row의 start, end 종합

```css
grid-column-start : 1;
grid-column-end : 3;
grid-column : 1 / 3;

grid-row-start : 2;
grid-row-end : 3;
grid-row: 2 / 3;
grid-row: 2 / span 3; /* 점유하는 칸수 지정 */
```  

```css  
.grid-container {
  display: grid;
  grid-template-column: 50px;
  grid-auto-columns: 1fr 2fr;
  gap: 1rem;
}
```  
- 첫 아이템에 width: 50px 적용  
- 그 이후의 아이템에 비율로 1fr 2fr 반복 적용  


<hr>

## 영역 이름으로 그리드 정의  
- 각 영역에 이름을 붙이고, 그 이름을 이용해서 배치하는 방법  
- 정말 직관적인 방법  

### grid-template-areas  
- 빈칸 : . 대신 none 사용 가능

```css  
.header {
  grid-aria: header;
}
.grid-container {
  grid-template-areas :
  "header header header"
  "a main b"
  ". . none"
  "footer footer footer"
}
```  

<hr>

## 자동배치 알고리즘  
- 아이템이 자동 배치되는 흐름을 결정하는 속성  

### grid-auto-flow  
- row  
- column  
- dense : 자동으로 크기에 맞는 아이템이 채워짐  
- row dense  
- column dense  

```css 
.container {
  dispaly: grid;
  grid-template-columns: repeat(auto-fill, minmax(25%, auto));
  grid-template-rows: repeat(5, mainmax(50px, auto));
}

.item:nth-child(2) { grid-column: auto / span 3; }
.item:nth-child(5) { grid-column: auto / span 3; }
.item:nth-child(7) { grid-column: auto / span 2; }
```

<hr>

## 방향 정렬  
- 컨테이너에 적용합니다.  

### align-items
- 세로 방향 정렬
- 아이템들을 세로(column축) 방향으로 정렬합니다.

```css 
.container {
  align-items: stretch;
  align-items: start;
  align-items: center;
  align-items: end;
}
```

### justify-items  
- 가로 방향 정렬  
- 아이템들을 가로(row축) 방향으로 정렬합니다.

```css 
.container {
  justify-items: stretch;
  justify-items: start;
  justify-items: center;
  justify-items: end;
}
```

### place-items  
- align-items와 justify-items를 같이 쓸 수 있는 단축 속성  
- 하나의 값만 쓰면 두 속성 모두 적용  
- 순서 : align-items justify-items;  

```css 
.container {
  place-items: center start; /*  align-items justify-items */
}
```

### align-content  
- 아이템 그룹 세로 정렬  
- Grid 아이템들의 높이를 모두 합한 값이 Grid 컨테이너의 높이보다 작을때 Grid 아이템을 통째로 정렬한다.  

```css 
.container {
  align-content: stretch;
  align-content: start;
  align-content: center;
  align-content: end;
  align-content: space-between;
  align-content: space-around;
  align-content: space-evenly;
}
```

### justify-content  
- 아이템 그룹 가로 정렬  

```css 
.container {
  justify-content: stretch;
  justify-content: start;
  justify-content: center;
  justify-content: end;
  justify-content: space-between;
  justify-content: space-around;
  justify-content: space-evenly;
}
```  

### place-content  
- align-content, justify-content 같이 쓸 수 있는 단축 속성 
- 하나의 값만 쓰면 두 속성 모두 적용  
- 순서 : align-content justify-content  


```css 
.container {
  place-content  : space-between center;
}
```  

### align-self  
- 개별 아이템 세로 정렬 (column)  
- 아이템에 적용한다.  

```css 
.container {
  align-self: stretch;
  align-self: start;
  align-self: center;
  align-self: end;
}
``` 

### justify-self  
- 개별 아이템 가로 정렬 (row)  
- 아이템에 적용한다.  

```css 
.container {
  justify-self: stretch;
  justify-self: start;
  justify-self: center;
  justify-self: end;
}
``` 

### place-self  
- align-self, justify-self를 동시에 사용하는 속성  
- 하나의 값만 쓰면 두 속성 모두 적용  
- 순서 : align-self justify-self

```css 
.container {
  place-self: start center;
}
``` 

### order  
- 배치 순서  
- flex의 order와 동일  

```css 
.item:nth-child(1) {
  order: 3;
}
``` 

### z-index  
- 숫자가 클 수록 위로 올라옵니다.  
- 기본 : 0;

```css 
.item:nth-child(1) {
  z-index: 1;
}
``` 
