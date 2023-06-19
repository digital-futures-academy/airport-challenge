const airport = {
    //const as in 1 airport so that wont change 
    itemsInAirport: [],
    defCapacity: 40,

    maxCapacity(newCapacity) {
        this.defCapacity = newCapacity;
    },


    itemLand: function (item) {
        if (item.id) {
            this.itemsInAirport.push(item);
        }
    },

    isAirportFilled() {
        return this.defCapacity >= 40;
    },

    itemDispatched: function (item) {
        if (item?.id) {
            const index = this.itemsInAirport.indexOf(item);
            const remove = this.itemsInAirport.splice(index, 1);
        }
    },

    itemPresent(item) {
        const index = this.itemsInAirport.findIndex(p => p === item);
        if (index !== -1) {
            this.itemsInAirport.splice(index, 1);

        } else if (index >= 1) {
            this.itemsInAirport.push(index, 1);

        }
    }
};


module.exports = airport;