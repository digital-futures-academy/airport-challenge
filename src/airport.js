class Airport {
  name;
  capacity;
  planeList;
  

  constructor(name, capasity, planeList = []){
    this.name = name;
    this.capacity = capasity;
    this.planeList = planeList
  };

  checkWeather = (weather) => {
    if(weather === 'stormy'){
      return false;
    }else{
      return true;
    }
  };

  checkLand = (plane) => {
    for(let i = 0; i < this.planeList.length; i++){
      if( plane === this.planeList[i]){
        return false;
      }
    }
    return true;
  };

  checkTakeOff = (plane) => {
    for(let i = 0; i < this.planeList.length; i++){
      if( plane === this.planeList[i]){
        return true;
      }
    }
    return false;
  };

  land = (weather, plane) => {
    if(this.checkWeather(weather) && this.checkLand(plane)){
      this.planeList.push(plane);
      return true;
    }
    return false;
  };

  takeOff = (weather, plane) => {
    if(this.checkWeather(weather) && this.checkTakeOff(plane)){
      this.planeList.splice(this.planeList.indexOf(plane),1);
      return true;
    }
    return false;
  };

  changeCapasity = (number) => {
    this.capacity = number;
  };

  isAirportFull = () => {
    if (this.planeList.length >= this.capacity){
      return true;
    }else{
      return false;
    };
  };

}

module.exports = Airport;
