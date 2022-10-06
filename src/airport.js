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
  getIndex(plane) {
    return this.planeArr.indexOf(plane);
  }
  depart(plane) {
    this.planeArr.splice(this.getIndex(plane), 1);
    return !this.planeArr.includes(plane);
  }
  changecap = (newcap => this.cap = newcap);
}

module.exports = airport;
