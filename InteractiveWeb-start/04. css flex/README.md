# CSS FLEX  

## 1. 기본 레이아웃 형태  
- 높이가 컨테이너 만큼 늘어난다.  

## 2. 부모 요소 적용
- flex-direction : 정렬 방향 설정  
  - row : 가로 정렬 (기본값)  
  - column : 세로 정렬  
  - -reverse : 반대정렬  
    
- justify-content : 축의 방향 정렬 방식 설정  
  - flex-start, flex-end, center  
  - space-between : 양끝 정렬 후 여백 균등 정렬  
  - space-around : 모든 여백 균등 정렬  

- align-items : 축의 수직 방향 정렬 방식 설정  
  - stretch : 늘어나있는 형태 (기본값)  
  - flex-start, flex-end, center  

## 3. 자식 요소 적용  
- flex-grow : 콘텐츠 폭을 제외한 여백에 대한 비율 적용  
  - 1 : 기준 비율, 숫자를 통해 조절할 수 있다.  
  
- flex-basis : 콘텐츠 폭을 설정한다.  
  - auto : 기본값  
  - 0 : 콘텐츠 폭을 0로 만든다. flex-grow를 통해 정확하게 나눌 수 있다.  

- flex-shrink : 줄어는 것  
  - 줄어들때 비율 적용  
  - 일반적으로 flex-grow와 동일하게 사용한다.  

- 축약형  
  - flex : 1 (flex-grow: 1, flex-shrink: 1 flex-basis : 0)  