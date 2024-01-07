// -----SnowFall---------------------------------------

class Symbol {
    constructor(x, y, fontSize, canvasHeight) {
        this.characters = '❅❄☀❆❅❅❄☀❆❅❅❄☀❆❅❅❄☀❆❅❅❄☀❆❅';
        this.x = x;
        this.y = y;
        this.fontSize = fontSize;
        this.canvasHeight = canvasHeight;
        this.text = '';
    }

    draw(context) {
        this.text = this.characters.charAt(Math.floor(Math.random() * this.characters.length));
        context.fillStyle = '#ffffff';
        context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
        if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.99) {
            this.y = 0;
        } else {
            this.x -= .01;
            this.y += 1;
        }
    }
}

class SnowFallEffect {
    constructor(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.fontSize = 17;
        this.columns = this.canvasWidth / this.fontSize;
        this.symbols = [];
        this.#initialize();
    }

    #initialize() {
        for (let i = 0; i < this.columns; i++) {
            this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight);
        }
    }
}

const effect = new SnowFallEffect(canvas.width, canvas.height);
let lastTime = 0;
const fps = 30;
const nextFrame = 1000 / fps;
let timer = 0;

function animate(timeStamp) {
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    if (timer > nextFrame) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.textAlign = 'center';
        ctx.font = `${effect.fontSize}px monospace`;
        effect.symbols.forEach(symbol => symbol.draw(ctx));
        timer = 0;
    } else {
        timer += deltaTime;
    }
    requestAnimationFrame(animate);
}

animate(0);