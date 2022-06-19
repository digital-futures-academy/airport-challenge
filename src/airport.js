class Airport {
    #planeLanded = true; //property used to make the plane flight true and the # is used to make the flight private  

    // here's a starting point for you
    planeLand() {
        //method used to get a return of true for the plane being in flight     
        return this.#planeLanded;

    }
}

module.exports = Airport;