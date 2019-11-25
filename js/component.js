class Component {
  constructor(game, x, y, w, h) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.img = new Image();
  }

  drawImg(src) {
    let compCTX = this.game.ctx;
    this.img.src = src;
    // this.img.onload = () => {  //after set interval we no longer need this onload function to show the img.
    compCTX.drawImage(this.img, this.x, this.y, this.width, this.height);
    // };
    //also another way.
    // this.img.addEventListener("load", () => {
    // compCTX.drawImage(this.img, this.x, this.y, this.width, this.height);
    // });
  }

  leftSide() {
    return this.x;
  }
  rightSide() {
    return this.x + this.width - 10;
  }
  theTop() {
    return this.y;
  }
  theBottom() {
    return this.y + this.height - 20;
  }

  collision(otherComp) {
    const crossLeft =
      otherComp.x <= this.rightSide() && otherComp.x >= this.leftSide();

    const crossRight =
      otherComp.x + otherComp.width >= this.leftSide() &&
      otherComp.x + otherComp.width <= this.rightSide();

    const crossTop =
      otherComp.y <= this.theBottom() && otherComp.y >= this.theTop();

    const crossBottom =
      otherComp.y + otherComp.height >= this.theTop() &&
      otherComp.y + otherComp.height <= this.theBottom();
    if ((crossLeft || crossRight) && (crossTop || crossBottom)) {
      return true;
    }
    return false;
  }
}
