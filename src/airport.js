class Airport {
    constructor() {
        this.airport1 = []
        this.capacity = 3  //Default capacity is 3
        this.weather = 'sunny'
    }
    add(plane) {
        if(!this.confirm(plane) && this.weather == 'sunny')
        {
            if (this.airport1.length < this.capacity)    
            {
                this.airport1.push(plane);
                //console.log(this.airport1)
                return this.airport1.length;
            }
            {
                return false
            }
        }
        else
        { return false }
    }

    remove(plane) {

        if (this.confirm(plane) && this.weather == 'sunny')
        {
            const index = this.airport1.indexOf(plane);
            this.airport1.splice(index);
            //console.log(this.airport1)
            return this.airport1.length;
        }
        { return false }
    }

    confirm(plane){
        if (this.airport1.includes(plane))
        { return true }
        else
        { return false }
    }

    overrideCapacity(limit)
    {
        if (isNaN(limit))
        { return false }
        else {
            this.capacity = limit
            return this.capacity
        }
    }

    howsTheWeather(weatherInput)
    {
        let allowedWeather = ['sunny','stormy']
        if (allowedWeather.includes(weatherInput))
        {
            this.weather = weatherInput
        }
        else
            { return false }
    }

    noOfPlanesAtAirport()
    {
        return this.airport1.length
    }
}
export default Airport;