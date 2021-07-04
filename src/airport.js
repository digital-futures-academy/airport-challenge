class Airport {
  constructor (cap) {
    //As of right now there is only 1 constructor needed I will add cap later as I go through the User stories
    this._airportList = []
    this._cap = cap;
    
  }
  get airportList () {
    //Telling me whats in the list
    return this._airportList;
  
  }
  get cap () {
    return this._cap;
  }

  //First method is addPlane() which should output airport[plane]
  landPlane (p) {
    //No cap, side note p is for plane
    //this._airportList.push(p);
    if (this._airportList.includes(p) === false){
        //behind is the method for User 3
    
      if (this._airportList.length < this._cap){
        this._airportList.push(p)
        console.log("plane has landed")
      }
      else {
        console.log('Airport is full')
    }
    } else {
      return "Plane has already landed";
    }
    
    //Works for User1
  }
  takeOff (p) {
    let index = this._airportList.indexOf(p);
    if (index > -1) {
        this._airportList.splice(index, 1) 
        return 'the plane is no longer in the airport';
       
    }
    else {
        return 'this plane is not at this Airport';
    }

  }
  overrideCap(c) {
    // c for new cap
    
    this._cap = c;
    
    //Works for User 2

  }
  isFull () {
    /*Checking if the length of the airport lost is the same as or bigger than the cap. The only problem is if you add planes, it hits cap
    and then you reduce the cap*/
    if (this._airportList.length >= this._cap) {
        return true;
    }
    else {
        return false;
    }
  }
  
  

}

module.exports = Airport;
