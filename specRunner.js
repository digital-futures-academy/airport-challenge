const {
    planeLanding,
    checkIfAirportIsFull,
    preventLandingIfAirportFull,
    takeOffAndConfirmDeparture,
    preventLandingAlreadyLandedPlane,
    preventLandingWhenStormy,
    preventTakeOffWhenStormy

} = require("./test/test.airport");

planeLanding();
checkIfAirportIsFull();
preventLandingIfAirportFull();
takeOffAndConfirmDeparture();
preventLandingAlreadyLandedPlane();
preventLandingWhenStormy();
preventTakeOffWhenStormy();
