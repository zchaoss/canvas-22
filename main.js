let canvas = document.getElementById("painter");
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
let ctx = canvas.getContext("2d");
ctx.lineWidth = `10`;
ctx.lineCap = `round`;

// 移动端的实现
canvas.ontouchmove = (e) => {
  ctx.beginPath();
  ctx.arc(e.touches[0].clientX, e.touches[0].clientY, 5, 0, 2 * Math.PI, true);
  ctx.fill();
};

// pc端的实现
let status = false;
let last = [];
canvas.onmousedown = (e) => {
  ctx.beginPath();
  ctx.arc(e.clientX, e.clientY, 5, 0, 2 * Math.PI, true);
  last = [e.clientX, e.clientY];
  ctx.fill();
  status = true;
};
canvas.onmousemove = (e) => {
  if (status) {
    ctx.beginPath();
    ctx.moveTo(last[0], last[1]);
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    last = [e.clientX, e.clientY];
  }
};
canvas.onmouseup = (e) => {
  status = false;
  ctx.arc(e.clientX, e.clientY, 5, 0, 2 * Math.PI, true);
  ctx.fill();
};
