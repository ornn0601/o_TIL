// 태그 선택
const $table = document.getElementById('table');
const $score = document.getElementById('score');
let data = [];

// 게임 시작 : $table - $fragment - $tr - $td
function startGame() {
  const $fragment = document.createDocumentFragment(); //성능, 메모리 가상의 fragment 변수을 만들고, 마지막 한번만 화면에 그린다. 
  [1, 2, 3, 4].forEach(function() {
    const rowData = [];
    data.push(rowData);
    const $tr = document.createElement('tr');
    [1, 2, 3, 4].forEach(() => {
      rowData.push(0);
      const $td = document.createElement('td');
      $tr.appendChild($td);
    });
    $fragment.appendChild($tr);
  });
  $table.appendChild($fragment);

  put2ToRandomCell();
  draw();
}

// 시작할때 랜덤하게 숫자 2 배치
function put2ToRandomCell() {
  const emptyCells = [];
  data.forEach(function (rowData, i) {
    rowData.forEach(function (cellData, j) {
      if (!cellData) {
        emptyCells.push([i, j]);
      }
    });
  });
  const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
  data[randomCell[0]][randomCell[1]] = 2;
}

// 화면그리기
function draw() {
  data.forEach((rowData, i) => {
    rowData.forEach((cellData, j) => {
      const $target = $table.children[i].children[j];
      if (cellData > 0) {
        $target.textContent = cellData;
        $target.className = 'color-' + cellData;
      } else {
        $target.textContent = '';
        $target.className = '';
      }
    });
  });
}

startGame();

// data = [
//   [32, 2, 4, 2],
//   [64, 4, 8, 4],
//   [2, 1024, 1024, 32],
//   [32, 16, 64, 4],
// ];
// draw();

// 움직이기
function moveCells(direction) {
  switch (direction) {
    case 'left': {
      const newData = [[],[],[],[]];
      data.forEach((rowData, i) => {
        rowData.forEach((cellData, j) => {
          if (cellData) {
            const currentRow = newData[i];
            const prevData = currentRow[currentRow.length - 1];
            if (prevData === cellData) { //이전 값과 지금 값이 같으면
              const score = parseInt($score.textContent);
              $score.textContent = score + currentRow[currentRow.length - 1] * 2;
              currentRow[currentRow.length - 1] *= -2;
            } else {
              newData[i].push(cellData);
            }
          }
        });
      });
      console.log(newData);
      [1, 2, 3, 4].forEach((rowData, i) => {
        [1, 2, 3, 4].forEach((cellData, j) => {
          data[i][j] = Math.abs(newData[i][j]) || 0;
        });
      });
      break;
    }
    case 'right' : {
      const newData = [[],[],[],[]];
      data.forEach((rowData, i) => {
        rowData.forEach((cellData, j) => {
          if (rowData[3 - j]) {
            const currentRow = newData[i];
            const prevData = currentRow[currentRow.length - 1];
            if (prevData === rowData[3 - j]) {
              const score = parseInt($score.textContent);
              $score.textContent = score + currentRow[currentRow.length - 1] * 2;
              currentRow[currentRow.length - 1] *= -2;
            } else {
              newData[i].push(rowData[3 - j]);
            }
          }
        });
      });
      console.log(newData);
      [1, 2, 3, 4].forEach((rowData, i) => {
        [1, 2, 3, 4].forEach((cellData, j) => {
          data[i][3 - j] = Math.abs(newData[i][j]) || 0;
        });
      });
      break;
    }
    case 'up' : {
      const newData = [[],[],[],[]];
      data.forEach((rowData, i) => {
        rowData.forEach((cellData, j) => {
          if (cellData) {
            const currentRow = newData[j];
            const prevData = currentRow[currentRow.length - 1];
            if (prevData === cellData) {
              const score = parseInt($score.textContent);
              $score.textContent = score + currentRow[currentRow.length - 1] * 2;
              currentRow[currentRow.length - 1] *= -2;
            } else {
              newData[j].push(cellData);
            }
          }
        });
      });
      console.log(newData);
      [1, 2, 3, 4].forEach((cellData, i) => {
        [1, 2, 3, 4].forEach((rowData, j) => {
          data[j][i] = Math.abs(newData[i][j]) || 0;
        });
      });
      break;
    }
    case 'down' : {
      const newData = [[],[],[],[]];
      data.forEach((rowData, i) => {
        rowData.forEach((cellData, j) => {
          if (data[3 - i][j]) {
            const currentRow = newData[j];
            const prevData = currentRow[currentRow.length - 1];
            if (prevData === data[3 - i][j]) {
              const score = parseInt($score.textContent);
              $score.textContent = score + currentRow[currentRow.length - 1] * 2;
              currentRow[currentRow.length - 1] *= -2;
            } else {
              newData[j].push(data[3 - i][j]);
            }
          }
        });
      });
      console.log(newData);
      [1, 2, 3, 4].forEach((cellData, i) => {
        [1, 2, 3, 4].forEach((rowData, j) => {
          data[3 - j][i] = Math.abs(newData[i][j]) || 0;
        });
      });
      break;
    }
  }

  // 결과
  if (data.flat().includes(2048)) {
    draw();
    setTimeout(() => { //동시 실행의 오류를 잡기 위한 순서 적용
      alert('축하합니다. 2048을 만들었습니다!');
    }, 0);
  } else if (!data.flat().includes(0)) {
    alert(`패배했습니다...${$score.textContent}점`);
  } else {
    put2ToRandomCell();
    draw();
  }
}

// 키보드 이벤트
window.addEventListener('keyup', (event) => {
  if (event.key === 'ArrowUp') {
    moveCells('up');
  } else if (event.key === 'ArrowDown') {
    moveCells('down');
  } else if (event.key === 'ArrowLeft') {
    moveCells('left');
  } else if (event.key === 'ArrowRight') {
    moveCells('right');
  }
});

// 마우스 이벤트
let startCoord;
window.addEventListener('mousedown', (event) => {
  const endCoord = [event.clientX, event.clientY];
  const diffX = endCoord[0] - startCoord[0];
  const diffY = endCoord[1] - startCoord[1];
  if (diffX < 0 && Math.abs(diffX) > Math.abs(diffY)) {
    moveCells('left');
  } else if (diffX > 0 && Math.abs(diffX) > Math.abs(diffY)) {
    moveCells('right');
  } else if (diffX > 0 && Math.abs(diffX) <= Math.abs(diffY)) {
    moveCells('down');
  } else if (diffX < 0 && Math.abs(diffX) <= Math.abs(diffY)) {
    moveCells('up');
  }
});
