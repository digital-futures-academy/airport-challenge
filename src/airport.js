class airport {
  constructor(capacity = 10) {
    this.planeArr = [];
    this.cap = capacity;
  }
  land(plane) {
    if (this.planeArr.length == this.cap){
      return false;
    }
    this.planeArr.push(plane);
    return true;
  }
  changecap = (newcap => this.cap = newcap);
}

module.exports = airport;
