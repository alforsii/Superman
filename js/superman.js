class Superman extends Component {
  constructor(game, x, y, w, h) {
    super(game, x, y, w, h);
  }

  flySuperman() {
    document.addEventListener('keydown', event => {
      const key = event.keyCode;
      event.preventDefault();

      if (key === 37 && this.x >= 0) this.x -= 30;
      else if (key === 38 && this.y >= 20) this.y -= 30;
      else if (key === 39 && this.x <= 1000 - this.width) this.x += 30;
      else if (key === 40 && this.y <= 500 - this.height) this.y += 30;

      // // another way.
      //   const key = event.keyCode;
      //   const possibleKeystrokes = [37, 65, 38, 87, 39, 83, 40, 68];
      //   if (possibleKeystrokes.includes(key)) {
      //     event.preventDefault();
      //     switch (key) {
      //       case 37:
      //       case 65:
      //         if (this.x >= 0) this.x -= 20;
      //         break;
      //       case 38:
      //       case 87:
      //         if (this.y >= 10) this.y -= 20;
      //         break;
      //       case 39:
      //       case 83:
      //         if (this.x <= 1000 - this.width) this.x += 20;
      //         break;
      //       case 40:
      //       case 68:
      //         if (this.y <= 500 - this.height) this.y += 20;
      //         break;
      //     }
      //   }
    });
  }
}
