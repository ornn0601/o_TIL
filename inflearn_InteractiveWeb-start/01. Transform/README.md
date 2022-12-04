# 1. CSS 변형과 애니메이션


## 1. Transform  

### 1. 기준점 위치 선정이 자유롭다.  
- 중심, 상하좌우, 변형의 기준점을 자유롭게 설정할 수 있다.   

### 2. 다양한 기능 사용  
- 회전, 비틀기, 3d 등 다양한 기능 사용이 가능하다.  

### 3. 성능  
- 회전, 비틀기, 3d 등 다양한 기능 사용이 가능하다.  
- 하드웨어 가속을 사용하여 성능이 좋다.(GPU 사용)  
- 부드럽운 움직임을 눈으로 확인 할 수 있다.  

### 4. 내용
1. scale()  
- 적용 단위 : scale(1) : 100%, scale(2): 200%  

```css
transform: scale(1);
```  

2. rotate()  
- 단위 deg  

```css
transform: rotate(15deg);
```  

3. 다중적용  
- 띄어쓰기  

```css
transform: scale(1) rotate(15deg);
```  

4. 이동
- 적용 순서 : x y  

```css
transform: translate(30px, 10px);
``` 

5. 기준점 변경  
- 적용 순서 : x y  
- 적용 기준 : 좌측 상단 0%, 우측 하단 100%  

```css
transform-origin: left top;
transform-origin: 50% 50%;
``` 

<hr>

## 2. Transition  
- "숫자로 표현되는 값"이 변하는 중간 과정을 애니메이션으로 적용하여 준다.  
- 축약형 : 진행시간(duration), 대기시간(delay)  
- 지정되지 않은 값은 기본값으로 적용된다.  

```css
/* 입력값 */
transition: 1s 2s;

/* 적용값 */
transition-property: all;
transition-duration: 1s;
transition-timing-function: ease;
transition-delay: 2s;
```  

<hr>

## 3. Animation  
 