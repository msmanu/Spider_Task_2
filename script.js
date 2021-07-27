const timer = document.getElementById('rtime');
let hr = 0;
let min = 0;
let sec = 0;
let stoptime = true;

function startTimer() {
  if (stoptime == true) {
    stoptime = false;
    timerCycle();
  }
}

function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timerCycle() {
  if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }

    timer.innerHTML = hr + ':' + min + ':' + sec;

    setTimeout("timerCycle()", 1000);
  }
}

function resetTimer() {
  timer.innerHTML = '00:00:00';
}

//*************************************

var myvar;
var a2;
let scores = localStorage.getItem('scores') ? JSON.parse(localStorage.getItem('scores')) : [];
var max;
document.getElementById("ok").addEventListener("click", function() {
console.log("clicked");
updat();
a2 = setInterval(collision, 25);
document.getElementById("first").style.display = "none";
document.getElementById("whole").style.display = "block";
document.getElementById("modalBackDrop").style.display = 'none';
myvar = setTimeout(startTimer(), 3000);
});

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// a1 = setInterval(collision, 25);
const rec = {
  x: 0,
  y: 50,
  size: 30,
  dx: 3,
  dy: 4
};

function drawRec() {
  ctx.fillStyle = 'pink';
  ctx.fillRect(rec.x, rec.y, rec.size, rec.size);
}
var pos;
function update1() {
  ctx.clearRect(0, 50, canvas.width, 30);
  // ctx.clearRect(50, 200, canvas.width, canvas.height/2+50);
  drawRec();
  rec.x += rec.dx;
  // return(rec.x);
  // pos=rec.x;
  if (rec.x + rec.size > canvas.width || rec.x  < 0) {
    rec.dx *= -1;
  }
  requestAnimationFrame(update1);
}
// update1();

const rec1 = {
  x: 100,
  y: 130,
  size: 30,
  dx: 4,
  dy: 4
};

function drawRec1() {
  ctx.fillStyle = 'pink';
  ctx.fillRect(rec1.x, rec1.y, rec1.size, rec1.size);

}
var pos;
function update2() {
  ctx.clearRect(0, 130, canvas.width, 30);
  // ctx.clearRect(50, 200, canvas.width, canvas.height/2+50);
  drawRec1();
  rec1.x += rec1.dx;
  // return(rec.x);
  // pos=rec.x;
  if (rec1.x + rec1.size > canvas.width || rec1.x  < 0) {
    rec1.dx *= -1;
  }
  requestAnimationFrame(update2);
}
// update2();

const rec2 = {
  x: 200,
  y: 210,
  size: 30,
  dx: 3,
  dy: 4
};

function drawRec2() {
  ctx.fillStyle = 'pink';
  ctx.fillRect(rec2.x, rec2.y, rec2.size, rec2.size);
}
var pos;
function update3() {
  ctx.clearRect(0, 210, canvas.width, 30);
  // ctx.clearRect(50, 200, canvas.width, canvas.height/2+50);
  drawRec2();
  rec2.x += rec2.dx;
  // return(rec.x);
  // pos=rec.x;
  if (rec2.x + rec2.size > canvas.width || rec2.x  < 0) {
    rec2.dx *= -1;
  }
  requestAnimationFrame(update3);
}
// update3();

const rec3 = {
  x: 300,
  y: 290,
  size: 30,
  dx: 4,
  dy: 4
};

function drawRec4() {
  ctx.fillStyle = 'pink';
  ctx.fillRect(rec3.x, rec3.y, rec3.size, rec3.size);
}
var pos;
function update4() {
  ctx.clearRect(0, 290, canvas.width, 30);
  // ctx.clearRect(50, 200, canvas.width, canvas.height/2+50);
  drawRec4();
  rec3.x += rec3.dx;
  // return(rec.x);
  // pos=rec.x;
  if (rec3.x + rec3.size > canvas.width || rec3.x  < 0) {
    rec3.dx *= -1;
  }
  requestAnimationFrame(update4);
}
// update4();

const rec4 = {
  x: 150,
  y: 370,
  size: 30,
  dx: 3,
  dy: 4
};

function drawRec5() {
  ctx.fillStyle = 'pink';
  ctx.fillRect(rec4.x, rec4.y, rec4.size, rec4.size);
}
var pos;
function update5() {
  ctx.clearRect(0, 370, canvas.width, 30);
  // ctx.clearRect(50, 200, canvas.width, canvas.height/2+50);
  drawRec5();
  rec4.x += rec4.dx;
  // return(rec.x);
  // pos=rec.x;
  if (rec4.x + rec4.size > canvas.width || rec4.x  < 0) {
    rec4.dx *= -1;
  }
  requestAnimationFrame(update5);
}
// update5();

const image = document.getElementById('source');
const player = {
  w: 50,
  h: 60,
  x: 20,
  y: 200,
  speed: 5,
  dx: 0,
  dy: 0
};

function drawPlayer() {
  ctx.drawImage(image, player.x, player.y, player.w, player.h);
}

function clear() {
  ctx.clearRect(player.x-10, player.y-10, player.w+20, player.h+20);
}

function newPos() {
  player.x += player.dx;
  player.y += player.dy;
  detectWalls();
}

function detectWalls() {
  // Left wall
  if (player.x < 0) {
    player.x = 0;
  }

  // Right Wall
  if (player.x + player.w > canvas.width) {
    player.x = canvas.width - player.w;
  }

  // Top wall
  if (player.y < 0) {
    player.y = 0;
  }

  // Bottom Wall
  if (player.y + player.h > canvas.height) {
    player.y = canvas.height - player.h;
  }
}

function update() {
  clear();

  drawPlayer();

  newPos();

  requestAnimationFrame(update);
}

function moveUp() {
  player.dy = -player.speed;
  collision();
}

function moveDown() {
  player.dy = player.speed;
  collision();
}

function moveRight() {
  player.dx = player.speed;
  collision();
}

function moveLeft() {
  player.dx = -player.speed;
  collision();
}

function keyDown(e) {
  if (e.key === 'ArrowRight' || e.key === 'Right') {
    moveRight();
  } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
    moveLeft();
  } else if (e.key === 'ArrowUp' || e.key === 'Up') {
    moveUp();
  } else if (e.key === 'ArrowDown' || e.key === 'Down') {
    moveDown();
  }
}

function keyUp(e) {
  if (
    e.key == 'Right' ||
    e.key == 'ArrowRight' ||
    e.key == 'Left' ||
    e.key == 'ArrowLeft' ||
    e.key == 'Up' ||
    e.key == 'ArrowUp' ||
    e.key == 'Down' ||
    e.key == 'ArrowDown'
  ) {
    player.dx = 0;
    player.dy = 0;
  }
}

// update();

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);

function collision(){
  console.log(rec.x);
  console.log(player.x);
  if(Math.abs(rec.x-player.x)>=0 && Math.abs(rec.x-player.x)<=50 && Math.abs(rec.y-player.y)>=0 && Math.abs(rec.y-player.y)<=50){
    // alert("collide!");
    out();
  }
  if(Math.abs(rec1.x-player.x)>=0 && Math.abs(rec1.x-player.x)<=50 && Math.abs(rec1.y-player.y)>=0 && Math.abs(rec1.y-player.y)<=50){
    // alert("collide!");
    out();
  }
  if(Math.abs(rec2.x-player.x)>=0 && Math.abs(rec2.x-player.x)<=50 && Math.abs(rec2.y-player.y)>=0 && Math.abs(rec2.y-player.y)<=50){
    // alert("collide!");
    out();
  }
  if(Math.abs(rec3.x-player.x)>=0 && Math.abs(rec3.x-player.x)<=50 && Math.abs(rec3.y-player.y)>=0 && Math.abs(rec3.y-player.y)<=50){
    // alert("collide!");
    out();
  }
  if(Math.abs(rec4.x-player.x)>=0 && Math.abs(rec4.x-player.x)<=50 && Math.abs(rec4.y-player.y)>=0 && Math.abs(rec4.y-player.y)<=50){
    // alert("collide!");
    out();
  }
}

function updat(){
  update1();
  update2();
  update3();
  update4();
  update5();
  update();
}

var highScore;
function out(){
  stopTimer();
  var t1 = sec + (min / 60);
  let points = Math.floor(t1*123);
  console.log(points);
  let score = "Game Over!!!! Your Score is : " + points;
  clearTimeout(a2);
  scores.push(points);
  localStorage.setItem('scores', JSON.stringify(scores));
  max = scores.reduce(function(a, b) {
  return Math.max(a, b);
  });
  localStorage.setItem(highScore,max);
  console.log(max);
  document.getElementById("modalBackDrop").style.display = 'block';
  document.getElementById("whole").style.display='none';
  document.getElementById("last").style.display = "block";
  document.getElementById("lt").innerText = score;
  document.getElementById("ok1").addEventListener("click", function() {
  document.getElementById("last").style.display = "none";
  window.location.reload();
});
}

document.getElementById("hscore").innerHTML= "High Score : " + localStorage.getItem(highScore);
