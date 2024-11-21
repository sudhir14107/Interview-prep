// Vehicle Interface (Base Class)
class Vehicle {
    getType() {
        throw new Error("This method must be implemented by subclasses");
    }
}

// Concrete Vehicle Classes
class Car extends Vehicle {
    getType() {
        return "Car";
    }
}

class Truck extends Vehicle {
    getType() {
        return "Truck";
    }
}

class Bike extends Vehicle {
    getType() {
        return "Bike";
    }
}

// Abstract Factory
class VehicleFactory {
    createVehicle() {
        throw new Error("This method must be implemented by subclasses");
    }
}

// Concrete Factories
class CarFactory extends VehicleFactory {
    createVehicle() {
        return new Car();
    }
}

class TruckFactory extends VehicleFactory {
    createVehicle() {
        return new Truck();
    }
}

class BikeFactory extends VehicleFactory {
    createVehicle() {
        return new Bike();
    }
}

// Test Example
const carFactory = new CarFactory();
const truckFactory = new TruckFactory();
const bikeFactory = new BikeFactory();

const myCar = carFactory.createVehicle();
const myTruck = truckFactory.createVehicle();
const myBike = bikeFactory.createVehicle();

console.log(myCar.getType());   // Output: "Car"
console.log(myTruck.getType()); // Output: "Truck"
console.log(myBike.getType());  // Output: "Bike"
