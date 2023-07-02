/* 
threshold: 적용 위치
- 1 : 스크롤 영역 최상단
- 0.5 : 스크롤 영역의 중간부분

{ target: 스크롤 영역, 상태, 체크 지점 }


*/

import './scroll-timeline.js';

const progress = document.querySelector('.progress');
const targetImages = document.querySelectorAll('.target-image');

progress.animate(
  [
    { transform: 'scaleX(0)' },
    { transform: 'scaleX(1)' },
  ],
  {
    timeline: new ScrollTimeline({
      scrollOffsets: [
        { target: document.body, edge: 'start', threshold: 1 },
        { target: document.body, edge: 'end', threshold: 1 }
      ]
    })
  }
);

targetImages.forEach(image => {
  // console.log(image);
  const imageTop = image.offsetTop; // 위치 확인
  const imageHeight = image.offsetHeight;

  const offset1 = imageTop + (imageHeight - imageHeight - window.innerHeight);
  const offset2 = imageTop - (imageHeight / 2);


  image.animate(
    [
      { opacity: 0 },
      { opacity: 1 }
    ],
    {
      timeline: new ScrollTimeline({
        scrollOffsets: [
          new CSSUnitValue(offset1, 'px'),
          new CSSUnitValue(offset2, 'px')
        ]
      })
    }
  );
});