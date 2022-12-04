// 태그선텍
const menu = document.querySelector('.menu');
const menuBtn = document.querySelectorAll('.menu-btn');

function clickHandler(event) {
  let elem = event.target;
  while (!elem.classList.contains('menu-btn')) {
    elem = elem.parentNode;
    elem.classList.add('active');

    if (elem.nodeName == 'BODY') {
      elem = null;
      return;
    }
  }
  console.log(elem.dataset.value);

}

menu.addEventListener('click', clickHandler);