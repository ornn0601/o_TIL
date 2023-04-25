# SVG MASTERING

## 섹션 1. SVG의 개념과 기본적인 사용법
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

---

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
## 섹션 2. CSS와 자바스크립트 적용하기
### CSS 적용하기
1. 외부에서 작성하기
- <style></style>
2. svg내부에 작성하기 (인라인 형태)
- 장점 : svg 파일을 단독으로 사용할 수 있다.
- 오류를 대응하기 : <svg><style><![CDATA[  css  ]]></style></svg>

### 자바스크립트 적용하기
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