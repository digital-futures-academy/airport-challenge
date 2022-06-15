class Airport {
	planesAtAirport = [];
	planeLand(plane) {
		this.planesAtAirport.push(plane); //this is directing to specific planesAtAirport.
		console.log(`Plane ${plane.id} has landed.`);
	}
}

module.exports = Airport;
