class airport {
  constructor(capacity = 10, weather = "safe") {
    this.planeArr = [];
    this.cap = capacity;
    this.weather = weather;

  }
  isHere(plane) {
    return this.planeArr.includes(plane);
  }
  land(plane) {
    const planeIsHere = this.isHere(plane);
    if ((planeIsHere == false) && (this.planeArr.length !== this.cap) && (this.weather === "safe")) {
      this.planeArr.push(plane);
      return true;
    }
    return false;

  }
  getIndex(plane) {
    return this.planeArr.indexOf(plane);
  }
  depart(plane) {
    const planeIsHere = this.isHere(plane);
    if ((planeIsHere == true) && (this.weather === "safe")){
      this.planeArr.splice(this.getIndex(plane), 1);
      return false;
    }
    return true
  }

  changecap = (newcap => this.cap = newcap);
}

module.exports = airport;
