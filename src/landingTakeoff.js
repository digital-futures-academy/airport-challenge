class LandingTakeoff {
    landing(plane, hanger, isStormy, isHangerFull){
        if (!isHangerFull){
            if (!isStormy){
                hanger.push(plane)
                return `${plane.model} landed at airport.`
            } else {
                return `${plane.model} could not land due to stormy weather.`
        }} else {
            return `${plane.model} could not land, maximum airport capacity reached.`
        }
    }
    takeOff(plane, hanger, isStormy){
        if (!isStormy) {
            let index=hanger.indexOf(plane)
            if (index!==-1){
                 hanger.splice(index,1)
                 return `${plane.model} departed airport.`
            } else {
                return `${plane.model} not in hanger.`
            }
        } else {
            return `${plane.model} could not take off due to stormy weather.`
        }
   }
}


module.exports=LandingTakeoff

