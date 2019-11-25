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
}
