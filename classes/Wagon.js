class Wagon {

    constructor(capacity) {

        this.capacity = capacity
        this.passengers = []
    }

    getAvailableSeatCount() {
        return (this.capacity - this.passengers.length)

    }


    join(travelor) {
        if (this.getAvailableSeatCount() > 0) {
            this.passengers.push(travelor)
        }
    }

    shouldQuarantine() {
        const quarantineNow = this.passengers.some(passenger => passenger.isHealthy === false)
        if (quarantineNow === true) {
            return 'true'
        }
    }
   
    totalFood() {
        const howMuchFood = this.passengers
            .map(passenger => passenger.food)
            .reduce((accummulator, curValue) => { return accummulator + curValue })
        return howMuchFood
    }

}


