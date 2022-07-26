export class Point {
  constructor(index, x, y) {
      this.x = x;
      this.y = y;
      this.fieldY = y;
      this.speed = 0.01;
      this.cur = index;
      this.max = Math.random() * 40 + 50;
  }
  update() {
      this.cur += this.speed;
      this.y = this.fieldY + Math.sin(this.cur) * this.max;
  }
}