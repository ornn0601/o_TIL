# SVG MASTERING

## 섹션1. SVG의 개념과 기본적인 사용법
### 1. SVG란
1) 기본 설명
- 확장 가능한 벡터 그래픽 (Scalable Vector Graphics)
- XML 기반의 2차원 그래픽
- 아이콘, 이미지, 그래프, 사용자 인터페이스(UI) 등에 널리 쓰임
- DOM의 일부로서 각 개체별로 HTML 엘리먼트가 추가됨
- 벡터이기 때문에 이미지의 크기에 상관 없이 선명하게 유지되고 모양이 많이 복잡하지 않은 경우 파일 사이즈 작음
- CSS와 JS를 이용해서 조작이 가능
- 크기(width/height)가 큰 이미지 표현에 유리
- 모양이 복잡하고 개체수가 많을 수록 성능이 떨어짐

2) 비교: 캔버스(Canvas)
- 비트맵 기반 그래픽
- 이미지나 비디오의 픽셀 조작, 게임, 퍼포먼스가 중요한 이미지 조작 등에 쓰임
- 단일 태그 <canvas>로 표현
- JS를 이용해서 조작 가능 (CSS 불가)
- 픽셀 단위의 조작이 가능해서 일반 HTML 엘리먼트로는 불가능한 다양한 표현들이 가능
- 저수준(low-level) API로 코딩량이 많고 까다로움
- 크기가 커질수록 성능이 떨어짐

### 2. HTML 문서에 SVG를 넣는 여러가지 방법들
1) <img> 태그
```html
<img src="images/studiomeal.svg" alt="이미지" />
```

2) CSS Background
```html
<div class="svg"></div>

<style>
.svg {
  width: 300px;
  height: 300px;
  background: url('images/studiomeal.svg') no-repeat 0 0;
}
</style>
```

3) SVG 요소를 직접 inline으로 삽입
```html
<svg></svg>
```
4) <object> 태그
- 이미지 태그와 차이점은 svg코드가 살아있음.
```html
<object data="images/studiomeal.svg" type="image/svg+xml">
```

### 3. SVG의 크기 설정
- 반응형으로 움직여야하기 때문에 고정 크기는 설정하지 않는다.
- viewBox : 보이는 뷰의 크기를 나타냄.
- "x y width height"
- 안의 내용은 viewBox의 크기에 따라 상대적으로 계산된다.

```html
<style>
  svg {
    /* width: 500px;
    height: 500px; */
  }
</style>

<!-- <svg width="500" height="500"> -->
<svg viewBox="0 0 500 500">
  <rect x="0" y="0" width="100" height="100">
</svg>
```

### SVG 압축하기
- 검색 : svgomg
- "paste markup" 클릭 후 붙여넣기
- 파일 다운로드 또는 텍스트로 받기

---
## 섹션2. CSS와 자바스크립트 적용하기
### 1. CSS 적용하기
1. 외부에서 작성하기
- <style></style>
2. svg내부에 작성하기 (인라인 형태)
- 장점 : svg 파일을 단독으로 사용할 수 있다.
- 오류를 대응하기 : <svg><style><![CDATA[  css  ]]></style></svg>

### 2. 자바스크립트 적용하기
1. 외부에서 작성하기
- 동일하게 작성 가능
```js
const faceElem = document.querySelector('.face');
faceElem.addEventListener('click', function () {
  this.classList.toggle('ani-on');
});
```

2. svg내부에 작성하기 (인라인 형태)
- 위치 : 스타일 태그 아래

---
## 섹션3. 그리기
### 1. 기본도형 그리기
- 원은 중심점을 잡는다.
- cx : center x
- r : 반지름
- rx : 둥근 사각형
- 우선순위 : css우선, 태그안에 넣으면 후순위

```html
<style>
  .shapes {
    width: 600px;
    height: 400px;
    background: #ddd;
  }
  rect {
    fill: orange; /* 배경색 */
    stroke: dodgerblue; /* 외각선 색 */
    stroke-width: 10; /* 외각선 두께 */
  }
</style>

<svg class="shapes">
  <rect x="10" y="20" width="200" height="100"></rect>
  <rect x="10" y="20" width="200" height="100" />  <!-- 사각형 -->
  <rect x="50" y="120" rx="10" width="100" height="100" />  <!-- 모서리 둥근 사각형 -->
  <circle cx="350" cy="250" r="30" />  <!-- 원 -->
  <ellipse cx="200" cy="400" rx="100" ry="50"></ellipse>  <!-- 타원 -->
</svg>
```

### 2. 직선 그리기
1) <line></line>
- x1 : 시작지점의 x
- x2 : 끝지점의 x
- y1 : 시작지점의 y
- y2 : 끝지점의 y
- stroke 넣어주기

2) polyline : 다각형, 선으로 끝난다.
3) polygon : 다각형, 끝점이 시작점과 연결되어 마무리를 지어준다.
- points: "시작x 시작y, 중간x 중간y, 끝x 끝y"

```html
<svg>
  <line x1="10" x2="400" y1="30" y2="300" stroke="blue"></line>
  <polyline points="0 0, 200 100, 150 300" stroke="red" stroke-width="10"></polyline>
  <polygon points="0 0, 200 100, 150 300" stroke="red" stroke-width="10" /></polygon>
</svg>
```

### 3. path로 그리기
- 자유그리기
- 일러스터에서 펜툴
- d라는 속성으로 그린다.

1) 직선
- M : 시작, "M x y"
- L : 직선, "L x y"
- H : 가로직선, "H x"
- V : 세로직선, "V y"
- Z : 닫힘, 시작점과 연결

```html
<style>
  path {
    stroke: tomato;
    stroke-width: 5px;
    fill: 
  }
</style>
<svg class="shapes">
  <path d="M 300 200 L 500 100 H 50 V 300 Z"></path>
</svg>
```

2) 곡선
- C : 곡선, 조정점, 끝점 "C x y, x y, x y"

```html
<style>
  path {
    stroke: tomato;
    stroke-width: 5px;
    fill: 
  }
</style>
<svg class="shapes">
  <path d="M 100 150 C 100 150, 300 50, 500 250"></path>
</svg>
```