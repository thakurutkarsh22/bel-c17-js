
enum VehicleType {
  CAR = 'CAR',
  BIKE = 'BIKE',
  TRUCK = 'TRUCK'
}

// Patter 1: Factory : - we will generate the different classes of vehicle 

class Vehicle {
    public type: VehicleType;
    plateNumber: string;
    constructor(
        type: VehicleType,
        plateNumber: string
    ) {
        this.type = type;
        this.plateNumber = plateNumber;
    }
}


// class Car extends Vehicle {}
// class Bike extends Vehicle {}
// class Truck extends Vehicle {}

class VehicleFactory {
    static createVehicle(type: VehicleType, plateNumber: string): Vehicle {
        return new Vehicle(type, plateNumber);
    }
}


// Pattern 2 : stratergy pattern ------------------

interface IPricingStratergy {
    calculate(hours: number): number;
    getFare(): number;
    getSurcharge(): number;
}

class CarPricing implements IPricingStratergy {
    calculate(hours: number): number {
        return Math.ceil(this.getFare() * hours);
    }
    getFare(): number {
       return 20;
    }
    getSurcharge(): number {
        return 30;
    }
}

class BikePricing implements IPricingStratergy {
    calculate(hours: number): number {
        return Math.ceil(this.getFare() * hours);
    }
    getFare(): number {
       return 10;
    }
    getSurcharge(): number {
        return 10;
    }
}

class TruckPricing implements IPricingStratergy {
    calculate(hours: number): number {
        return Math.ceil(this.getFare() * hours);
    }
    getFare(): number {
       return 50;
    }
    getSurcharge(): number {
        return 50;
    }
}

class CommonPricing implements IPricingStratergy {
    calculate(hours: number): number {
        return Math.ceil(this.getFare() * hours);
    }
    getFare(): number {
       return 50;
    }
    getSurcharge(): number {
        return 50;
    }
}


// const truck = new TruckPricing()
// truck.calculate(5);


// can I have one factory that creates -> yes... 

class PricingFactory {
    static createPricing(type: VehicleType): IPricingStratergy {
        switch(type) {
            case VehicleType.CAR:
                return new CarPricing();
            case VehicleType.BIKE:
                return new BikePricing();
            case VehicleType.TRUCK:
                return new TruckPricing();
            default:
                return new CommonPricing();
        }
    }
}

// Pattern 3: Observer pattern ----- to give notification to different subscribers 

interface Observer {
    update(message: string): void;
    getName(): string
}


class DisplayBoard implements Observer {
    name: string
    constructor(name: string) {
        this.name = name;
    }

    update(message: string): void {
        console.log('Display board ', this.getName(), ' got the message', message);
    }

    getName(): string {
        return this.name;
    }
}

class MobileNotification implements Observer {
    name: string
    constructor(name: string) {
        this.name = name;
    }

    update(message: string): void {
        console.log('mobile notification ', this.getName(), ' got the message', message);
    }

    getName(): string {
        return this.name;
    }
}

// Pattern 4. -> Singleton pattern 

// Parking Manager -> 
class ParkingLot {
    // singleton 
    private static instance: ParkingLot;

    private spots: ParkingSpot[] = []; // 50 
    // quick retrieval 
    // tickets = []; (O(n)) // find the ticket
    private tickets: Map<String, Ticket> = new Map(); // TC amortize (O(1))
    private Observers: Observer[] = []

    private ticketCounter = 1; // track number of cars that are comming in and going out.

// 1. add spots
    private constructor() { // make it private so no one can call new
        // initialize the parking lot
        for(let i=1; i<=50; i++) {
            this.spots.push(new ParkingSpot(`SPOT-${i}`))
        }
    }

    static getInstance(name: string) {
        if(!ParkingLot.instance) {
            ParkingLot.instance = new ParkingLot();
        }
        return ParkingLot.instance;
    }

    // 2. add observers
    addObserver(observer: Observer) {
        this.Observers.push(observer);
        console.log("observer added", observer.getName());
    }

    // 3. parking 
    park(vehicle: Vehicle): Ticket | null {
        // find the first available spot
        const spot = this.spots.find(s => s.isAvailable()); // this should give undefined , ParkingSpot1 ,2 ,3

        if(!spot) {
            console.log("parking lot is full");
            return null;
        }

        const isParked = spot.park(vehicle);
        if(isParked) {
            console.log("vehicle parked", vehicle, "at spot", spot)
        }

        const ticketId = `TICKET-${this.ticketCounter++}` // why this is bad ?  this.ticketCounter++ is bad for multithreading (java)
        // ticket 1
        // ticker 2

        // ticket 1234234768764864

        const ticket = new Ticket(ticketId, vehicle, spot, new Date(), PricingFactory.createPricing(vehicle.type))
        this.tickets.set(ticketId, ticket);

        // notify 
        this.Observers.forEach(observer => observer.update(`Vehicle with plate number ${vehicle.plateNumber} parked at spot ${spot}`))

        return ticket;

    }



    // 4. unparking 

    unpark(
        ticketId: String
    ) {
        const ticket = this.tickets.get(ticketId);

        if(!ticket) {
            console.log("no tickets here");
        }

        // calculate price with stratergy 
        const price = ticket?.getPrice();

        // release the spot 
        const spot = ticket?.spot;
        const unparkedVehicle = spot?.unpark()
        if(unparkedVehicle) {
            console.log("vehicle departed", unparkedVehicle, "from spot", spot, "with price", price)
        }

        // notifiy 
        if(ticket) {
            this.Observers.forEach(observer => observer.update(`Vehicle with plate number ${ticket.vehicle.plateNumber} departed from spot ${ticket.spot} with price ${price}`))
        }

    }







}

class Ticket {
    id: String;
    vehicle: Vehicle;
    spot: ParkingSpot;
    entryTime: Date;
    pricingStrategy: IPricingStratergy;

    constructor(id: String, vehicle: Vehicle, spot: ParkingSpot, entryTime: Date, pricingStrategy: IPricingStratergy) {
        this.id = id;
        this.vehicle = vehicle;
        this.spot = spot;
        this.entryTime = entryTime;
        this.pricingStrategy = pricingStrategy;
    }

    getDuration() {
        const currentTime = new Date();
        return (currentTime.getTime() - this.entryTime.getTime()) / (1000 * 60 * 60);
    }

    getPrice() {
        const hours = this.getDuration();
        return this.pricingStrategy.calculate(hours);
    }


}

class ParkingSpot {
    private id: String;
    private parkingTypeSpot = "bike"
    // private isAvailable: boolean = true;

    private vehicle: Vehicle | null = null; // null means this spot is empty 

    constructor(id: String) {
        this.id = id;
    }

    // usage
    // const isParked = park(new Vehicle(VehicleType.CAR, "UP14CD1234"))
    // // isParked = true -> log it
    park(vehicle: Vehicle): boolean {
        if(this.isAvailable()) {
            this.vehicle = vehicle;
            // console.log("vehicle parked", vehicle); this might loook like good desgin but class is not NOT CONCRETE about parking spot
            return true;
        }
        return false;
    }

    // todo: utkarsh see thsi
    unpark(): Vehicle | null {
        const vehicleCopy = this.vehicle;
        this.vehicle = null; 
        return vehicleCopy
    }

    isAvailable(): boolean {
        return this.vehicle === null; // spot is available true
    }
}







