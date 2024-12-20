const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const bgm = document.getElementById('bgm');
const startBtn = document.getElementById('startBtn');

let circleX = 100;
let circleY = canvas.height / 2;
let speed = 4;
let gameRunning = false;

// 게임 루프
function gameLoop() {
  if (!gameRunning) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // 원 그리기
  ctx.fillStyle = 'red';
  ctx.beginPath();
  ctx.arc(circleX, circleY, 20, 0, Math.PI * 2);
  ctx.fill();

  // 원 이동
  circleX += speed;
  if (circleX > canvas.width) circleX = 0;

  requestAnimationFrame(gameLoop);
}

// 게임 시작 버튼 이벤트
startBtn.addEventListener('click', () => {
  if (!gameRunning) {
    gameRunning = true;
    bgm.play();
    gameLoop();
  }
});

// 키보드 입력 판정
document.addEventListener('keydown', (e) => {
  if (e.key === ' ') {
    console.log('스페이스바 입력!');
  }
});
