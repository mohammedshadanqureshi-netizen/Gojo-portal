const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particlesArray;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});

class Particle {
    constructor(x, y, size, color, velocity) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.velocity = velocity;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        if(this.x < 0 || this.x > canvas.width) this.velocity.x *= -1;
        if(this.y < 0 || this.y > canvas.height) this.velocity.y *= -1;
        this.draw();
    }
}

function init() {
    particlesArray = [];
    const numberOfParticles = 120;
    for(let i=0;i<numberOfParticles;i++){
        let size=Math.random()*3+1;
        let x=Math.random()*canvas.width;
        let y=Math.random()*canvas.height;
        let velocity={x:(Math.random()-0.5)*1.5, y:(Math.random()-0.5)*1.5};
        particlesArray.push(new Particle(x,y,size,'#00ffff',velocity));
    }
}
function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for(let i=0;i<particlesArray.length;i++){
        particlesArray[i].update();
    }
    requestAnimationFrame(animate);
}
init();
animate();
