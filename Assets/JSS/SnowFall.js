

// function animate(timeStamp) {
//     const deltaTime = timeStamp - lastTime;
//     lastTime = timeStamp;
//     if (timer > nextFrame) {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         ctx.textAlign = 'center';
//         ctx.font = `${effect.fontSize}px monospace`;
//         effect.symbols.forEach(symbol => symbol.draw(ctx));
//         timer = 0;
//     } else {
//         timer += deltaTime;
//     }
//     requestAnimationFrame(animate);
// }

// animate(0);