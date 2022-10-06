class airport {
  constructor(capacity = 10) {
    this.planeArr = [];
    this.cap = capacity;
  }
  isHere(plane) {
    return this.planeArr.includes(plane);
  }
  land(plane) {
    const planeIsHere = this.isHere(plane);
    if (planeIsHere == false) {
      if (this.planeArr.length == this.cap) {
        return false;
      }
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
    if (planeIsHere == true) {
      this.planeArr.splice(this.getIndex(plane), 1);
      return false;
    }
    return ("Not Here");
  }

  changecap = (newcap => this.cap = newcap);
}

module.exports = airport;
