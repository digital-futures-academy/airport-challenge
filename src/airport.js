const Plane = require('./Plane');

class Airport {
  landedPlanes = [];

    landPlane = plane => {
        if (plane instanceof Plane) this.landedPlanes.push(plane);
    };

}

module.exports = Airport;


/*
const Item = require(`./Item`);

class Basket {
    basketItems = [];

    addItem = item => {
        if (item instanceof Item) this.basketItems.push(item);
    };

    removeItem = item => {

        const indexOfItemInBasketItems = this.basketItems.findIndex(basketItem => basketItem.id === item.id);

        if (indexOfItemInBasketItems > -1) {
            this.basketItems.splice(indexOfItemInBasketItems, 1);
        }

        // if (this.basketItems.findIndex(basketItem => basketItem.id === item.id) > -1) {
        //     this.basketItems.splice(this.basketItems.findIndex(basketItem => basketItem.id === item.id), 1);
        // }
    };
}

module.exports = Basket; */


/*
|Airport  | landedPlanes @Array[@Plane] | landPlane(@Plane)           | @Void    |
|         | landedCapacity @Integer     | isAirportFull()             | @Boolean |
|         |                             | getLandedCapacity()         | @Integer |
|         |                             | newLandedCapacity(@Integer) | @Void    |
|         |                             | getLandedPlaneCount()       | @Integer |
|         |                             | takeOffPlane(@Plane)        | @Void    |
|         |                             | isPlanePresent(@Plane)      | @Boolean | */
