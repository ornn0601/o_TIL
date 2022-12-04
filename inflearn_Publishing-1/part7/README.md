## inline JS  
```html
<a href="javascript:history.back()">뒤로 이동</a>
<a href="javascript:history.forward()">앞으로 이동</a>

<button onclick="javascript:history.back()">뒤로 이동</button>
<button onclick="javascript:history.forward()">앞으로 이동</button>

<a href="javascript:location.reload()">새로고침</a>
<a href="javascript:window.close()">창닫기</a>

<button onclick="location.href='주소'">현재 탭에서 오픈</button>
<button onclick="window.open('주소')">새 탭에서 오픈</button>
```  
  
  
## display 속성의 이해  
1. 인라인 요소  
- 크기값을 지정못함  
- 한 줄에 여러개 배치  
- 상하마진 못가짐  
- 기본 너비값은 컨텐츠의 너비값  
- span, a, small, em, b, br, audio, video, s, u, mark, q, strong, sup, sub, i, big, del, label  
  
2. 블록 요소  
- 크기값을 지정할 수 있음  
- 한 줄에 한개만 배치  
- 상하좌우 마진 모두 가짐  
- 기본 너비값은 100%  
- div, ul, ol, li, h, hr, form, dl, dt, dd, p, table, header, article, footer, section, nav, details, summary, center  
  
3. 인라인블록 요소  
- 크기값을 지정할 수 있음  
- 한 줄에 여러개 배치  
- 상하마진 모두 가짐  
- 기본 너비값은 컨텐츠의 너비값  
- img, input, button, fontawesome, icon  

* 어떤 요소건 position: absolute 또는 fixed가 적용되면 인라인블록으로 변함  
* before after는 기본적으로 인라인 요소  
  
  
## inherit  
- 부모의 특정한 값을 상속한다.  
- 기본 inherit : color, font-size, font-weight, letter-spacing, background-color, text-align  
  
  
## css var() 사용  
- "--내용" 로 설정하고 var(--내용)으로 사용한다.  
- 루트 설정을 통해 일괄 수정이 가능하다.  
- ie 지원 안함  
```css
.parent {
  --pwidth: 300px;
  width: calc(var(--pwidth) * 2);
}

/* 변수를 모아놓는 곳 */
:root {
  --primary: royalblue;
  --secondary: black;
  --positive: yellowgreen;
  --negative: crimson;
  --big: 50px;
  --medium: 30px;
  --small: 14px;
}

/* 사용하기 */
.btn.primary {
  background-color: var(--primary);
  font-size: var(--big);
}
```  
  
  
## 이미지맵 사용하기  
- 하나의 이미지에 여러개의 링크를 만들때  
- 하나의 이미지에 특정위치에 링크를 만들때  
- area를 통해 다중 사용 가능  
- image map generator 검색으로 자동생성 사이트 찾아가기  
  
- 사각형 이미지맵 링크 만들기  
-- 연결 : usemap = name  
-- shape="rect"  
-- coords="왼쪽상단 x , y , 오른쪽 하단 x , y"  
-- href : 연결 주소  
-- title : 마우스 올렸을때 나오는 텍스트, 링크 이름 또는 tip text 
```html
  <img src="" usemap="#id">
  <map name="id">
    <area shape="rect" coords="000,000,000,000" href="#" title="이름">
  </map>
```  
  
- 원형 이미지맵 링크 만들기  
-- shape="circle"  
-- coords="원의 중앙 x , y , 반지름"
```html
  <img src="" usemap="#id">
  <map name="id">
    <area shape="circle" coords="000,000,000" href="#" title="이름">
    <area shape="circle" coords="000,000,000" href="#" title="이름">
  </map>
```  


