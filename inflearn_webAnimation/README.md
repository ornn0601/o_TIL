# Web Animation API
- 날자 : 2023.06.24
- 채널 : 인프런
- 강사 : 1분코딩

---
## 0. 장단점 비교
### css 애니메이션
#### 장점
- 별도의 Compositor Thread에서 작업하므로 효율적(GPU처리)
- 코드가 간단하다. (선언형, 쉽다)
  
#### 단점
- 세밀하게 컨트롤하기 어렵다.
- 자유로운 제어가 어렵다.
- 정말 후진 기기에서는 오히려 더 성능이 떨어질 수도 있다.

### JS 애니메이션
#### 장점
- 스타일 값 단계 마다 세밀하게 컨트롤 가능하다.
- 제어가 자유롭다.

#### 단점
- Main Thread에서 작업하므로, 다른 작업들의 영향을 받아 버벅일 수 있다.
- 코드가 복잡하다. (명령형, 어렵다)

### Web Animation API
- 상대적으로 자유로운 제어가 어려웠던 CSS 애니메이션을 자바스크립트의 힘을 빌어 더 강력하게 바꿔준다.
- CSS 애니메이션을 기반으로 하므로 CSS 애니메이션의 장점을 그대로 살리면서 강력하게 업그레이드 해주는 느낌으로 생각하면 됨.
  
---
## 1. CSS Transition
- CSS 속성 값에 변화가 있을때 변화가 한번에 일어나는 것이 아니라 우리가 지정해준 일정 시간에 걸쳐서 서서히 변화가 일어나게 해주는 속성
- 애니메이션 효과를 어떤 시간동안 일어나게 할건지 설정

![css transition](./image/css_transition_01.png)
  
---
## 2. CSS Animation
### 1. 설정 명령어
![animation_1](./image/css_animation_1.png)

### 2. 애니메이션 진행 과정
![animation_2](./image/css_animation_2.png)

---
## 3. Web Animation API 기본
- 기존 애니메이션은 상황에 대응해서 제어하기가 어려웠다.
- 외부 라이브러리가 아닌 웹 표준 기술이다.
- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)

### 1. animate()
- box.animate(Keyframes, options)
![css transition](./image/js_animate_1.png)

### 2. 여러개의 객체에 애니메이션 적용하기
- GroupEffect
- 아직 지원되지 않지만 사용법은 동일하다.







