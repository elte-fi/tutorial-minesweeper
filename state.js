import { Field } from "./field.js";

export class AppState {
  width = 0;
  height = 0;
  board = [];

  init(width, height, mineCount) {
    if (mineCount >= width * height) {
      return;
    }

    this.width = width;
    this.height = height;

    this.board = [];
    for (let y = 0; y < height; y++) {
      this.board[y] = [];

      for (let x = 0; x < width; x++) {
        this.board[y][x] = new Field();
      }
    }

    for (let i = 0; i < mineCount; i++) {
      const {x, y} = this.getEmptyCoords();

      this.board[y][x].isMine = true;

      for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
          if (this.board[y + dy] && this.board[y + dy][x + dx]) {
            this.board[y + dy][x + dx].neighborCount += 1;
          }
        }
      }
    }
  }

  getEmptyCoords() {
    let x, y;

    do {
      x = Math.floor(Math.random() * this.width);
      y = Math.floor(Math.random() * this.height);
    } while (this.board[y][x].isMine);

    return {x, y};
  }
}