const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerheight;
ctx.strokeStyle = '#4CACA9';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = true;
let lastX = 0;
let lastY = 0;

function draw(e) {
  if (!isDrawing){
    console.log("text")
    return;
  };
  console.log(e);
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
