# SVG MASTERING

## 섹션1. SVG의 개념과 기본적인 사용법
### 1.SVG란
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

### 2.HTML 문서에 SVG를 넣는 여러가지 방법들
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
<svg> </svg>
```  
  
4) object 태그  
- 이미지 태그와 차이점은 svg코드가 살아있음.
```html
<object data="images/studiomeal.svg" type="image/svg+xml">
```
  
### 3.SVG의 크기 설정
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
### 1.CSS 적용하기
1. 외부에서 작성하기
- `<style></style>`
2. svg내부에 작성하기 (인라인 형태)
- 장점 : svg 파일을 단독으로 사용할 수 있다.
- 오류를 대응하기 : `<svg><style><![CDATA[  css  ]]></style></svg>`

### 2.자바스크립트 적용하기
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
### 1.기본도형 그리기
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

### 2.직선 그리기
1) `<line></line>`
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

### 3.path로 그리기
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

### 3.stroke 모양 조정하기
- 일러스트 : cap, corner 기능
- stroke-linecap: butt;
- stroke-linecap: round;
- stroke-linecap: square;
- stroke-linejoin: miter; (기본값)
- stroke-linejoin: round; 
- stroke-linejoin: bevel; 

```html
<style>
  path {
    stroke: tomato;
    stroke-width: 5px;
    stroke-linecap: butt;
  }
</style>
<svg class="shapes">
  <path d="M 300 200 L 300 100 L 400 200"></path>
</svg>
```

### 4.그룹만들기
- `<g></g>`
- 그룹으로 공통적으로 무언가를 할 수 있다.

```html
<svg class="shapes">
  <g class="group-1">
    <path d="M 300 200 L 300 100 L 400 200"></path>
    <path d="M 300 200 L 300 100 L 400 200"></path>
  </g>
</svg>
```

---
## 섹션4. 텍스트
### 1.글자 쓰기
- `<text><</text>`

```html
<style>
  text {
    font-size: 1.5rem;
    font-weight: 400;
    fill: red; 
  }
</style>
<svg class="svg">
  <text x="20" y="50">Hello. SVG! </text>
</svg>
```

### 2.곡선에 따라 글자 쓰기
- `<defs></defs>`
- 참조정보
- path의 id = textPath의 href 연결

```html
<style>
  text {
    font-size: 1.5rem;
    font-weight: 400;
    fill: red; 
  }
  path {
    stroke: red;
    fill: transparent;
  }
</style>
<svg class="svg">
  <defs>
    <path id="text-curve" d="M 50 400 C 50 400, 300 500, 400 400 C 400 400, 600 170, 700 300"></path>
  </defs>
  <text x="20" y="50">
    <textPath href="#text-curve">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis animi modi nostrum fugiat quo distinctio cum amet vitae ipsa quam rem doloremque, eligendi aliquid. Facilis tenetur molestiae earum voluptates id
    </textPath>
  </text>
</svg>
```

### 3.텍스트 부분 스타일링 
- `<tspan></tspan>`

```html
<style>
  tspan {
    fill: blue;
  }
  .special {
    fill: blue;
  }
</style>
<svg class="svg">
  <defs>
    <path id="text-curve" d="M 50 400 C 50 400, 300 500, 400 400 C 400 400, 600 170, 700 300"></path>
  </defs>
  <text x="20" y="50">
    <textPath href="#text-curve">Lorem <tspan class="special">ipsum dolor</tspan> sit amet consectetur adipisicing elit. Veritatis animi modi nostrum fugiat quo distinctio cum amet vitae ipsa quam rem doloremque, eligendi aliquid. Facilis tenetur molestiae earum voluptates id
    </textPath>
  </text>
</svg>
```

---
## 섹션5. 효과
### 1.그라디언트
- svg 파일에 접속하여 수정
- linearGradient : 선형
- radialGradient : 원형
- <![CDATA[ ]]> : xml 파서 오류 대응, css js를 svg내부에서 사용할 때 발생하는 오류 대응

```html
<style>
  .svg-obj {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 200px;
    margin: auto;
  }
</style>

<object class="svg-obj" data="images/face_hair.svg" type="image/svg+xml"></object>

<svg>
  <defs>
    <linearGradient id="hair-color">
      <stop offset="0%" stop-color="yellow" />
      <stop offset="50%" stop-color="hotpink" />
      <stop offset="100%" stop-color="deepskyblue" />
    </linearGradient>

    <radialGradient id="hair-color">
      <stop offset="0%" stop-color="yellow" />
      <stop offset="50%" stop-color="hotpink" />
      <stop offset="100%" stop-color="deepskyblue" />
    </<radialGradient>

    <style>
      <![CDATA[
        .hair {
          fill: url('#hair-color');
        }
      ]]>
    </style>
  </defs>
  <path class="hair" d="~~"></path>
</svg>
```

### 2.패턴1 - 패턴의 기본적이 사용법
- viewBox를 설정하여 화면 비율로 구성할 수 있게 가능하다.
- viewBox : 전체비율
- circle : viewBox를 기준으로 크기를 비율로 구성한다.

```html
<style>
  svg {
    /* width: 500;
    height: 500; */
    width: 100%;
    height: 100%;
    background: #ddd;
  }
  .pattern-circle {
    fill: #fff000;
  }
  .gb-rect {
    fill: url(#bg-pattern);
  }
</style>

<svg viewBox="0 0 500 500">
  <defs>
    <pattern id="bg-pattern" x="0" y="0" width="0.1" height="0.1">
      <circle cx="50" cy="50" r="50" class="pattern-circle">
    </pattern>
  </defs>

  <rect class="gb-rect" x="0" y="0" width="100%" height="100%" fill="url(#bg-pattern)"></rect>
</svg>
```

### 3.패턴2 - 애니메이션이 적용된 일러스트 패턴
- 배경 패턴 전체에 애니메이션을 줄 수 있다.

```html
<style>
  body {
    background: url(images/face_s.svg);
    background-size: 100px;
  }
</style>

<svg viewBox="0 0 500 500">
  <defs>
    <style>
      @keyframes eye-ani {
        from { transform: scaleY(1); }
        to { transform: scaleY(0.2); }
      }
      .right-eye {
        animation: eye-ani 0.5s alternate infinite;
      }
    </style>
  </defs>

  <circle class="right-eye" />
</svg>
```

### 4.마스크1 - 마스크의 기본적인 사용법
- 흰색영역은 보이고, 검정색 영역은 보이지 않는다.
- circle을 white으로 변경한다.
- 회색계열은 반투명으로 보인다.
- 검정색에 수렴할수록 흐려지고, 흰색으로 갈수록 진해진다.

```html
<style>
  .the-svg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #ddd;
  }
  .the-svg text {
    font-size: 5rem;
  }
</style>

<svg class="the-svg">
  <defs>
    <mask id="mask-circle">
      <circle cx="250" cy="70" r="40" fill="#fff"></circle>
    </mask>
  </defs>

  <g mask="url(#mask-circle)">
    <text x="10" y="10">Hello SVG! Hello SVG! Hello SVG!</text>
  </g>
</svg>
```

### 5.마스크2 - JS을 이용해 돋보기 효과 만들기
- 

```html
<style>
  .the-svg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #ddd;
  }
  .the-svg text {
    font-size: 5rem;
  }
</style>

<svg class="the-svg">
  <defs>
    <pattern id="pattern-bg" x="0" y="0" width="100%" height="100%">
      <path> 내용 </path>
      <circle class="left-eye" cx="43.8" cy="41.98" r="4.69"></circle>
    </pattern>

    <mask id="mask-circle">
      <circle cx="250" cy="70" r="40" fill="#fff"></circle>
    </mask>

    <style>
      @keyframes eye-ani {
        to { transform: scaleY(0.2); }
      }

      .left-eye {
        transform-origin: 44px 42px;
        animation: eye-ani 1s alternate infinite;
      }
      .bg {
        fill: url(#pattern-bg);
      }
    </style>

    <script >
      window.addEventListener('DOMContentLoaded', () => {
        const magnifierElem = document.querySelector('.magnifier');
        const maskElem = document.querySelector('#mask-circle');

        window.addEventListener('mousemove', (e) => {
          magnifierElem.style.transform = `translate(${e.clientX}px , ${e.clientY}px)`;
          maskElem.style.transform = `translate(${e.clientX}px , ${e.clientY}px)`;
        });
      });
    </script>
  </defs>

  <path class="magnifier" d="돋보기패스" />

  <g mask="url(#mask-circle)">
    <rect class="bg" x="0" y="0" width="100%" height="100%">
  </g>
</svg>
```

---
## 섹션6. Stroke 애니메이션
### 1.Stroke 애니메이션 기본
- stroke-dasharray : 선 길이
- stroke-dashoffset : 선이 보이는 길이

```html
<style>
  @keyframes dash-ani {
    form { stroke-dashoffset: 700; }
    to { stroke-dashoffset: 0; }
  }

  circle {
    stroke: black;
    stroke-width: 5;
    stroke-dasharray: 700;
    stroke-dashoffset: 0;
    fill: transparent;
    animation: dash-ani 2s;
  }

  path {
    stroke: black;
    stroke-width: 5;
    stroke-dasharray: 727;
    stroke-dashoffset: 0;
    fill: transparent;
    animation: dash-ani 2s;
  }
</style>

<script>
  document.querySelector('path').getTotalLength();
</script>

<svg viewBox="0 0 800 500">
  <circle cx="400" cy="250" r="100" />
  <path></path>
</svg>
```

### 2.그래픽 로고가 그려지는 애니메이션 만들기

---
## 섹션 7. SMIL 애니메이션
### 1.SMIL 애니메이션의 기본적인 사용법
- Synchronized Multimedia Integration Language (SMIL 3.0)
- 스밀 애니메이션
- attributeName: 바꿀 속성
- dur: 지속시간
- to: 목적, 위치
- repeatCount: 반복횟수, 숫자 또는 무한반복(indefinite)
- fill: 마지막 지점에서 마무리
- begin: 시작 딜레이, 숫자s 또는 대기(indefinite)
- EX에선 지원하지 않음

```html

<svg class="svg" viewBox="0 0 1000 1000">
  <rect x="10" y="10" width="20%" height="20%">
    <animation attributeName="x" dur="1s" to="700" repeatCount="indefinite" fill="freeze" begin="1s"></animation>
  </rect>
</svg>
```

### 2.애니메이션 조작하기
```html
<svg class="svg" viewBox="0 0 1000 1000">
  <defs>
    <script>
      window.addEventListener('DOMContentLoaded', () => {
        const rectElem = document.querySelector('.rect');
        const aniElem = document.querySelector('.ani');

        rectElem.addEventListener('click', () => {
          aniElem.beginElement();
        });
      });
    </script>
  </defs>

  <rect class="rect" x="10" y="10" width="20%" height="20%">
    <animation class="ani" attributeName="x" dur="1s" to="700" repeatCount="indefinite" fill="freeze" begin="indefinite"></animation>
  </rect>
</svg>
```

### 3.Morphing 효과 만들기
- 일러스터 svg 저장을 통해 도형 좌표를 확인한다.(d="")

```html
<style>
  body {
    margin: 0;
    background: #666;
  }
</style>
<svg id="Layer_1" data-name="layer 1" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 684 684">
  <defs>
    <style>
      .cls-1 { fill: #fff000; }
    </style>
  </defs>
  <title>이름</title>
  <path class="cls-1" d="도형 좌표" transform="translate(-42 -42)" />
    <animate attributeName="d" dur="3s" to="변경 좌표"></animate>
  </path>
</svg>
```

### 4.CSS 애니메이션의 alternate를 SMIL로 구현하기
- to를 삭제후 values와 keyTimes를 추가한다.
- values="0; 700; 0" (시작; 중간; 끝)
- keyTimes="0; 0.5; 1" (시작; 중간; 끝)

```html
<svg id="svg" viewBox="0 0 1000 1000">
  <rect class="rect" x="10" y="10" width="20%" height="20%">
    <animate class="ani" attributeName="x" dur="2s" values="0; 700; 0" keyTimes="0; 0.5; 1" repeatCount="indefinite"></animate>
  </rect>
</svg>
```

---
## 섹션 8. 아이콘 폰트 셋트 만들기
### 1.아이콘 폰트 세트 만들기
- iconmoon.io
- import Icons 클릭하여 업로드하기
- font폴더, style.css 필요
- 파일이름을 변경하면 css 파일의 이름도 변경해야함
- 클래스를 통해 색상, 애니메이션 등 효과 부여

---
## 섹션 9. React Mon 만들기 1
### React Mon 만들기 1
- 리액트 로고 애니메이션 만들기

---
## 보너스 섹션 1. CSS Transform
### CSS Transform