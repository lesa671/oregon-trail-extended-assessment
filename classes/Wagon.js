class Wagon {
    constructor(capacity) {
        this.capacity = capacity
        this.passengers = []
    }

    getAvailableSeatCount() {
        return (this.capacity - this.passengers.length)
    }

    join(traveler) {
        if (this.getAvailableSeatCount() > 0) {
            this.passengers.push(traveler)
        }
    }

    shouldQuarantine() {
        const quarantineNow = this.passengers.some(passenger => passenger.isHealthy === false)
        return quarantineNow
    }

    totalFood() {
        const howMuchFood = this.passengers
            .map(passenger => passenger.food)
            .reduce((accummulator, curValue) => { return accummulator + curValue })
        return howMuchFood
    }
}

