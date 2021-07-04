class Airport {

    constructor() {
        this.port = [];
        this.size = 5;
        this.state = 'Sunny';
        this.landed = 0;
    }

    land(plane) {
        if (plane.isLanded())
        {
            console.log(`${plane.name} is is currently not in the air`);
        }
        else if (this.port.length < this.size) {
            //if (this.port.includes(plane)) {
                //console.log(`${plane.name} is already present at port`);
            //}
            //else {
                if (this.state === 'Sunny') {
                    this.port.push(plane);
                    console.log(`${plane.name} successfully landed`);
                    plane.land();
                    this.landed++;
                }
                else {
                    console.log('Unable to land due to Stormy conditions');
                }
            //}
        }
        else {
            console.log('Airport at maximum capacity');
        }
        
    }

    capacity(num) {
        this.size = num;
    }

    takeOff(plane) {
        if (this.port.includes(plane)) {
            if (this.state === 'Sunny') {
                this.port.splice(this.port.indexOf(plane), 1);
                console.log(`${plane.name} has left the port`);
                plane.air();
                this.landed--;
            }
            else {
                console.log('Unable to take off due to Stormy conditions');
            }

        }
        else {
            console.log(`${plane.name} is not present at port`);
        }
    }

    weather() {
        let x = Math.random() * 100;
        console.log(x);

        if (x < 70) {
            this.state = 'Sunny'; console.log('The weather is Sunny');
        }
        else {
            this.state = 'Stormy'; console.log('The weather is Stormy');
        }
    }
}

module.exports = Airport;
