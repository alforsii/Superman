class Game {
  constructor() {
    this.canvas = document.getElementById('my-canvas');
    this.ctx = this.canvas.getContext('2d');
    this.score = 0;
    this.fireball = new Component(this, 800, 150, 50, 50);
    this.superman = new Superman(this, 20, 250, 100, 100);
    this.image = new Image();
    this.sound = new Audio();
  }
  start() {
    this.drawBackground();
    this.fireball.drawImg('./img/fireball.png');
    this.superman.drawImg('./img/superman.png');
    this.superman.flySuperman();
    const intervalID = setInterval(() => {
      this.clearCanvas();
      this.drawBackground();
      this.fireball.drawImg('./img/fireball.png');
      this.superman.drawImg('./img/superman.png');
      if (this.superman.collision(this.fireball)) {
        if (this.superman.life === 0) {
          this.gameOver();
          clearInterval(intervalID);
        } else {
          this.superman.life--;
          this.start();
        }
      }
      this.fireball.x -= 5;
      if (this.fireball.x <= -50) {
        this.fireball.x = 1000;
        this.fireball.y = Math.floor(Math.random() * 450);
        this.score++;
      }
    }, 1000 / 60);
  }

  drawBackground() {
    this.ctx.fillStyle = 'blue';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = 'white';
    this.ctx.font = '35px Arial';
    this.ctx.fillText(`Score: $${this.score}`, 50, 50);
    this.ctx.font = '35px Arial';
    this.ctx.fillText(`Life: ${this.superman.life}`, 300, 50);
  }
  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  // gameOver() {
  //   this.clearCanvas();
  //   this.drawGameOver();
  // }

  // drawGameOver() {
  //   this.image.src = './img/Game-over-2.png';
  //   this.ctx.drawImage(this.image, 400, 400);
  // }

  gameOver() {
    this.sound.src = './audio/theme-music.wav';
    this.sound.play();
    this.clearCanvas();
    this.drawBackground();
    this.ctx.font = '70px Arial bold';
    this.ctx.textAlign = 'center';
    this.ctx.fillStyle = 'red';
    this.ctx.fillText(
      'Game Over!',
      this.canvas.width / 2,
      this.canvas.height / 2
    );
  }
}
