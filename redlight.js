const canvas = document.getElementById('rlCanvas');
const ctx    = canvas.getContext('2d');
let state = 'waiting'; // 'green', 'red', 'over'
let pos   = 0;

document.getElementById('startRL').onclick = () => {
  pos = 0; state='green'; update();
};

function update() {
  ctx.clearRect(0,0,600,400);
  ctx.fillStyle = (state==='green') ? '#0f0' : '#f00';
  ctx.fillRect(0,0,600,400);
  ctx.fillStyle = '#000';
  ctx.fillRect(pos, 350, 20, 50); // player square

  if (state==='green') pos += 5;
  if (pos >= 580) { state='over'; document.getElementById('rlStatus').innerText='You Won!'; }
  if (state==='green') {
    setTimeout(() => { state='red'; setTimeout(()=>state='green', randomTime()); }, randomTime()); 
  }
  if (state==='over') return;
  requestAnimationFrame(update);
}

function randomTime() { return 1000 + Math.random()*2000; }

// Killing move on click during 'red'
canvas.onclick = () => {
  if (state==='red') {
    state='over';
    ctx.fillStyle='#800';
    ctx.fillRect(0,0,600,400);
    document.getElementById('rlStatus').innerText='Eliminated! Blood Splat!💧';
  }
};
