let x = 0;
let y = 0;
let mx = 0;
let my = 0;
let speed = 0.03;
let scrollTop = 0;
let parallax_0,
    parallax_1,
    parallax_2,
    parallax_3,
    parallax_4,
    parallax_5,
    parallax_6;

window.onload = function() {
    progressBar = document.querySelector('.progressBar');

    parallax_0 = document.querySelector('#parallax_0');
    parallax_1 = document.querySelector('#parallax_1');
    parallax_2 = document.querySelector('#parallax_2');
    parallax_3 = document.querySelector('#parallax_3');
    parallax_4 = document.querySelector('#parallax_4');
    parallax_5 = document.querySelector('#parallax_5');
    parallax_6 = document.querySelector('#parallax_6');

    window.addEventListener('resize', stageResize, false);
    window.addEventListener('mousemove', mouseMove, false);
    window.addEventListener('scroll', scrollFunc, false);

    stageResize();
    loop();
}

function scrollFunc(e) {
    scrollTop = document.documentElement.scrollTop;

    // progressBar
    let per = Math.ceil(scrollTop / (_documentHum - _windowHum) * 100);
    progressBar.style.width = per + '%';

    // object
    parallax_0.style.transform = "translate3d(0px, " + scrollTop * .03 + "px, 0)";
    parallax_1.style.transform = "translate3d(0px, " + -scrollTop * .03 + "px, 0)";
    parallax_2.style.transform = "translate3d(0px, " + -scrollTop * .12 + "px, 0)";
    parallax_3.style.transform = "translate3d(0px, " + -scrollTop * .16 + "px, 0)";
    parallax_4.style.transform = "translate3d(0px, " + -scrollTop * .22 + "px, 0)";
    parallax_5.style.transform = "translate3d(0px, " + -scrollTop * .25 + "px, 0)";
}

// 크기 초기화
function stageResize() {
    _documentHum = document.body.offsetHeight;
    _windowHum = window.outerHeight;
}

// 마우스 이동에 따른 오브젝트 움직임 제어
function loop() {

    mx += (x - mx) * speed;
    my += (y - my) * speed;

    parallax_4.style.transform = "translate3d(" + mx / 140 + "px, " + -scrollTop * .22 + "px , 0)";
    parallax_5.style.transform = "scale(1.1) translate(" + mx / 50 + "px, " + -scrollTop * .25 + "px)";
    parallax_6.style.transform = "scale(1.2) translate(" + -mx / 20 + "px, " + -my / 20 + "px)";
  
    window.requestAnimationFrame(loop);
}


// 화면 0점 중앙으로 설정
function mouseMove (e) {
    x = (e.clientX - window.innerWidth / 2);
    y = (e.clientY - window.innerHeight / 2);
}
