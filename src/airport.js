const Airplane = require("./airplane.js");
const airplane = require("./airplane.js");

class Airport {
  // here's a starting point for you
  constructor(maxCapacity)
  {
    this.maxCapactiy = maxCapacity || 10000;
    this.currentCapctiy;
    
  }
  canPlaneLand (airplane)
  {
    if (!this.isFull())
    {return "Airport is full, plane cannot land.";}

    else if (!airplane.planeInAir) 
    {
      return "Plane is already in the airport."
    }
    else if(airplane.planeInAir) { 
      
      airplane.land();
      return "Plane has landed.";
      }
  }

  canPlaneTakeOff(airplane)
  {
    if (airplane.planeInAir)
    { 
      return "Plane is already in the air."

    }
    else if (airplane.planeInAir) { 
      airplane.setOff();
      return "Plane has taken off successfully."}

  }

  setMaxCapacity(newCapacity)
  {
    this.maxCapactiy = newCapacity;
  }
  setCurrentCapacity(newCurrent)
  {
    this.currentCapctiy = newCurrent;
  }

  isFull()
  {
    if (this.maxCapactiy <= this.currentCapctiy)
    {
      return false;
    }
    else {
      return true;
    }
  }

    landPlane(airplane)
    {
      airplane.planeInAir = false;
    }
  

  
}

module.exports = Airport;
