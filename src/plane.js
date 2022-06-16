class Plane {
    //Private variable that will store the state of the plane. E.g. recording whether it has taken off or landed.
    //initializes to blank string.
    #state = '';

    //As state is a private variable a getter is needed to see what its value is.
    // Simply returns the #state variable.
    getState() {
        return this.#state;
    }



}


module.exports = Plane;