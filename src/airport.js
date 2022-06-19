class Airport {
    planeLanded = true;
    #plane0 = true;
    addPlaneId = true;

    planeLand() {

        return this.planeLanded;

    }

    planeLandId() {
        return this.#plane0;
    }

    addPlaneId() {
        return this.listOfIds;
    }

    constructor(planeID) {
        this.planeID = planeID;
    }
}
{

    let mainAirport = [];

    const plane3 = new Airport(`plane3`);
    const plane4 = new Airport(`plane4`);
    const plane5 = new Airport(`plane5`);

    mainAirport = [plane3, plane4, plane5];

    for (let i = 0; i < mainAirport.length; i++)
        console.log(mainAirport[i].planeID);


}

module.exports = Airport;
