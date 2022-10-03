class airport {
  constructor(capacity = 10) {
    this.planeArr = [];
    this.cap = capacity;
  }
  land = (plane) => this.planeArr.push(plane);
  changecap = (newcap => this.cap = newcap);
}

module.exports = airport;
