export default class Star {
  constructor(number) {
    this.element = document.createElement('div');
    this.element.classList.add('star');
    this.element.innerHTML = number;
    document.body.append(this.element);
  }
}

/* x, y, z 별 생성 */
// export default class Star {
//   constructor(number, x, y, scale) {
//     const element = document.createElement('div');
//     element.classList.add('star');
//     element.innerHTML = number;
//     element.style.left = `${x}px`;
//     element.style.top = `${y}px`;
//     element.style.transform = `scale(${scale})`;
//     document.body.append(element);
//   }
// }