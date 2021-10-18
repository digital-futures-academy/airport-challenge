class Airport {
	plane=[]
    constructor(capacity=2) {
        this.planes=[];
        this.capacity=capacity;
    }
    land(plane) {
            if(this.planes.length>=this.capacity)
        {
        return 'Pgm:Airport is Full';
    } else if (this.planes.includes(plane))
    {
        return 'Plane already Landed';
    } else
    {
    this.planes.push(plane);
    return this.planes;
    }
}
takeoff(plane) {
    if (!this.planes.includes(plane))
    {
        return "Pgm:Plane not in Airport";
    }else
    {
    let index=this.planes.indexOf(plane);
    this.planes.splice(index,1);
    return this.planes;
    }
}
}
module.exports=Airport;

