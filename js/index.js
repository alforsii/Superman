class Game {
  constructor() {
    // this.canvas = undefined;
    // this.ctx = undefined;
    this.canvas = document.getElementById('my-canvas');
    this.ctx = this.canvas.getContext('2d');
    this.intervalID = undefined;
    this.score = 0;
    this.fireball = new Component(this, 800, 150, 50, 50);
    this.superman = new Superman(this, 20, 250, 100, 100);
  }
  start() {
    this.drawBackground();
    this.fireball.drawImg('./img/fireball.png');
    this.superman.drawImg('./img/superman.png');
    this.superman.flySuperman();
    this.intervalID = setInterval(() => {
      this.clearCanvas();
      this.drawBackground();
      this.fireball.drawImg('./img/fireball.png');
      this.superman.drawImg('./img/superman.png');
      this.fireball.x -= 5;
      if (this.fireball.x <= -50) {
        this.fireball.x = 1000;
        this.fireball.y = Math.floor(Math.random() * 450);
      }
    }, 1000 / 60);
  }

  drawBackground() {
    this.ctx.fillStyle = 'blue';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = 'white';
    this.ctx.font = '35px Arial';
    this.ctx.fillText(`Score: $${this.score}`, 50, 50);
  }
  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
