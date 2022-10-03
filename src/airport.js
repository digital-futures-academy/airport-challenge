class airport {
  constructor() {
    this.planeArr = [];
  }
  land = (plane) => {
    this.planeArr.push(plane);
  }

}

module.exports = airport;
