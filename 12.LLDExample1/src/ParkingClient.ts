
import {
    DisplayBoard,
    MobileNotification,
    ParkingLot,
    Vehicle,
    VehicleFactory,
    VehicleType
} from './Parking'




function run() {
    // 1. create parking lot  
    const lot1 = ParkingLot.getInstance("Main"); // we will be working with lot1
    
    const lot2 = ParkingLot.getInstance("Other");
    const lot3 = ParkingLot.getInstance("Other");

    console.log("SAME INSTANCE", lot1 === lot2 ? "YES" : "NO" ) // true 


    // 2. add observers 
    const display =  new DisplayBoard("DIsplayA")
    const mobile =  new MobileNotification("Mobile A")

    console.log("-------------------------- ADDING OBSERVERS ---------------------------------- ")

    lot1.addObserver(display);
    lot1.addObserver(mobile);

    console.log("-------------------------- ENDING OBSERVERS ---------------------------------- ")

    // // 3. vehicle factory usage to create vehicle 
    // const car: Vehicle = VehicleFactory.createVehicle(VehicleType.CAR, "DL-454-CAR");
    // const bike: Vehicle = VehicleFactory.createVehicle(VehicleType.BIKE, "DL-454-BIKE");
    // const truck: Vehicle = VehicleFactory.createVehicle(VehicleType.TRUCK, "DL-454-TRUCK");

    // // 4. park vehicles
    // console.log("\n -------------------------- PARKING CARS ---------------------------------- ")
    // const ticketCar = lot1.park(car);
    // const ticketBike = lot1.park(bike);
    // const ticketTruck = lot1.park(truck);
    // console.log("\n -------------------------- ENDING PARKING CARS ---------------------------------- ")

    // console.log("Tickets Issued",ticketCar?.id,  ticketBike?.id, ticketTruck?.id )

    // // 5. unpark some vehicles 
    // console.log("\n -------------------------- UN-PARKING CARS ---------------------------------- ")
    // lot1.unpark(ticketCar?.id || "")

    // console.log("\n -------------------------- ENDING UN-PARKING CARS ----------------------------------\n ")


    //  test out if your parking can have more tan 50 spots (fill 50 spots)

    const tickets = [];
    for(let i =0 ;i<50; i++) {
        const vehicle: Vehicle = VehicleFactory.createVehicle(VehicleType.CAR, `DL-454-CAR-${i}`);
        const ticket = lot1.park(vehicle);
        tickets.push(ticket);
    }




    // 6------ unpark one vehicle and than park the last vehicle 
    const unparkLastGuy = tickets[tickets.length-1]?.id;
    lot1.unpark(unparkLastGuy || "");

    // 7. 51th vehicle we should not be able to accomodate this 
    // const vehicleBike: Vehicle = VehicleFactory.createVehicle(VehicleType.BIKE, `DL-454-BIKE`);
    
    // lot1.park(vehicleBike);


    const vehicleBike: Vehicle = VehicleFactory.createVehicle(VehicleType.BIKE, `DL-454-BIKE`);
    lot1.park(vehicleBike);



}

run();





