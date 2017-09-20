// CLASSES PROJECT
// In this project, you will build a Mazda car factory that manufactures both cars and trucks.
// Read each set of instructions carefully!

// BUILD YOUR FACTORY!

// DECLARE A FACTORY CLASS
// All automobiles manufacutered should have the following properties: make (Mazda),
//location (USA), airbags (true), abs (true), warranty (60,000 miles / 3 years)
// This factory should also run two functions: massBuild() and customerBuild()

// massBuild should receive the following parameters: quantity, options.
// It should print "Building QUANTITY COLOR TRIM MODEL's" i.e: "Building 100 blue Touring CX-5's"

// customerBuild should receive the following parameters: color, options.
// It should print "Building one COLOR TRIM MODEL with the following options: OPTIONS",
// i.e: "Building one red Sport Mazda3 with the following options: heated seats, rear spoiler"

// Create the Factory class bellow:
class Factory {
    constructor (){
        this.make = "mazda"
        this.madeIn = "USA"
        this.airbags = true
        this.abs = true
        this.warranty = "60,000 miles /3 years"
        this.massBuild =this.massBuild.bind(this)
        this.customerBuild = this.customerBuild.bind(this)

    }
    massBuild(quantity,options){
        this.quantity = quantity
        this.options = options
        console.log("Building " + this.quantity + " "+ this.options.color + " "+ this.options.trim + " " + this.options.model);

    // It should print "Building QUANTITY COLOR TRIM MODEL's"
    //i.e: "Building 100 blue Touring CX-5's"

    }
    customerBuild(color,options){
        this.color = color
        this.options = options
        console.log("Building one " + this.color + " " + this.options.trim + " " + this.options.model + " with options: " + this.options.options);

    }

  }
 // It should print
 //"Building QUANTITY COLOR TRIM MODEL's" i.e: "Building 100 blue Touring CX-5's"


let company = new Factory
console.log(company)
// console.log(company.massBuild("100","blue","Touring","CX 5's"))
// console.log(company.customerBuild("Red","2"))

////----------------------/////
// CREATE A SUB-CLASS CALLED CAR
// It should extend from Factory.
// The constructor should have the following properties:
//model, doors, color, enginetype, transmission,
//trim, wheelstrim, audio, seatstrim, moonroof. The values should be
//specified when creating an instance of Car.
// It should specifically inherit the warranty property from Factory so we can modify it.
// Car should also have the following additional properties: enginesize (4),
//navigation (true), backupcamera (true), warranty (100,000 miles / 5 years)
// Write your code below:

class Car extends Factory {
    constructor(model,audio,backupcamera,color) {
        super()
        this.model = model
        this.audio = audio
        this.backupcamera = true
        this.color = color
        // this.massBuild =this.massBuild.bind(this)
        // this.customerBuild = this.customerBuild.bind(this)

    } massBuild(model,moonroof,navigation,seatstrim,transmission,trim,warranty,wheelstrim){
        this.model = model
        this.moonroof = moonroof
        this.navigation = true
        this.seatstrim = seatstrim
        this.transmission = transmission
        this.trim = trim
        this.warranty = warranty
        this.wheelstrim = wheelstrim
        console.log("Building " + this.quantity+ " "+ this.color + " "+ this.trim + " " + this.model);


    }  customerBuild(door,enginesize,enginetype,madeIn,make){
        this.door = door
        this.enginesize = 4
        this.enginetype = enginetype
        this.madeIn = madeIn
        this.make = make
        // console.log("Building one " + this.color + " " + this.options.trim + " " + this.options.model + " with options: " + this.options.options);

    }

}
const car = new Car
console.log(car)
// massBuild(model,moonroof,navigation,seatstrim,transmission,trim,warranty,wheelstrim){
console.log(car.massBuild("Mazda3","true","true","Leather","Automatic","Touring","100,000 / 5 years","Base"))
// customerBuild(door,enginesize,madeIn,make)
console.log(car.customerBuild("4","4","hybrid","USA", "Mazda"))


// CREATE A SUB-CLASS CALLED SPORT
// It should extend from Car.
// The constructor should have the following properties:
//model, trim, transmission, top, color, seatstrim, audio,
//wheelstrim. The values should be specified when creating an instance of Sport.
// Sports cars should also have the following additional
//properties: moonroof (false), enginetype (gasoline), convertible (true), doors (2)
// Write your code below:

class Sport extends Car {

    constructor(model,trim,transmission, top, color, seatstrim, audio){
        super()
        this.audio =
        this.backupcamera =
        this.color = "Red"
        // this.massBuild =this.massBuild.bind(this)
        // this.customerBuild = this.customerBuild.bind(this)

    }
    massBuild(model,moonroof,navigation,seatstrim,top,transmission,trim,warranty,wheelstrim) {
        this.model = model
        this.moonroof = false
        this.navigation = navigation
        this.seatstrim = seatstrim
        this.top = top
        this.transmission = transmission
        this.trim = trim
        this.warranty = "100.000 miles / 5 years "
        this.wheelstrim = wheelstrim


    } customerBuild(door,enginesize,enginetype,convertible,madeIn,make) {
        this.door = 2
        this.enginesize = "gasoline"
        this.enginetype = enginetype
        this.convertible = true
        this.madeIn = madeIn
        this.make = make
    }
}

let sportCar = new Sport
console.log(sportCar)
// // massBuild(model,moonroof,navigation,seatstrim,transmission,trim,warranty,wheelstrim){
console.log(sportCar.massBuild("Miata-RF","false","true","Leather","Hard top","Manual","Grand Touring",))
// customerBuild(door,enginesize,madeIn,make)
console.log(sportCar.customerBuild("2","4","gasoline","USA","Mazda"))


// CREATE A SUB-CLASS CALLED TRUCK
// Yes...this Mazda factory makes trucks....
// It should extend from 'Factory'.
// The constructor should have the following
//properties: model, color, enginesize, hitch, bed, navigation.
//The values should be specified when creating an instance of Truck.
// Truck should also have the following properties,
//standard: backupcamera (true), audio (basic)
// It should also inherit the warranty property so we can
//extend it to: 150,000 miles / 6 years.
// Write your code below:

class Truck extends Car {
    constructor(bed,color){
        super()
        this.audio = "basic"
        this.backupcamera = true
        this.bed = bed
        this.color = color

    }
    massBuild(model,navigation,top,trim,warranty) {
        this.model = model
        this.navigation = navigation
        this.top = top
        this.trim = trim
        this.warranty = "120.000 miles/ 6 years"
    }
    customerBuild(door,enginesize,hitch,madeIn,make) {
        this.door = door
        this.enginesize = enginesize
        this.hitch = hitch
        this.madeIn = madeIn
        this.make = make

    }
}

let truckCar = new Truck
console.log(truckCar)

// // massBuild(model,moonroof,navigation,seatstrim,top,transmission,trim,warranty,wheelstrim){
console.log(truckCar.massBuild("Trail Blazer","true","Sport","120,000 miles/ 6 years"))
// customerBuild(door,enginesize,hitch,,madeIn,make)
console.log(truckCar.customerBuild("2","8","true","USA","Mazda"))

// LET'S BUILD SOME CARS AND TRUCKS!

// MAZDA3 MASS PRODUCTION
// Create an instance  Car.
// The following properties must be specified:

////////-----------------//////////
//model (mazda3), color (red), enginetype (hybrid), transmission (automatic), trim (touring), wheels (base), audio (premium), seats (leather), and moonroof (true)
// Write your 'mazda3' instance below:
// model, color , enginetype, transmission, trim , wheels , audio, seats, moonroof

let mazda3 = new Car ("Mazda3","red","hybrid","automatic","Touring","Base","Premium","leather",true)
// ('Mazda3',4,"red","hybrid","automatic","Touring","base","premium", "leather", "true")
// Print mazda3. I should have all the above properties.
// Write your code below:

// console.log(mazda3)



// Print calling massBuild(), building 35000 cars.
// It should print: "Building 35000 Red Touring Mazda3's."
// Write your code below:

mazda3.massBuild(35000,{color:"Red", trim: "Touring", model: "Mazda3's"})




// Print, calling customerBuild(), building one
//yellow mazda3 with the following options,
// as an array: weather package, satellite radio, rear spoiler.
// It should read: "Building one yellow Touring Mazda3 with the following options: weather package, satellite radio, rear spoiler"
// Write your code below:


mazda3.customerBuild("yellow", {trim: "Touring", model: "Mazda3", options :["weather package", "satellite radio", "rear spoiler"]})



// MIATA-RF MASS PRODUCTION
// Create an instance  Sport.
// The following properties must be specified:
// model (Miata-RF), trim (Grand Touring), transmission (manual),  top (hard top), color (red), seats (leather), audio (premium), wheels (premium).

// Write your 'miataRf' instance below:
// Write your code below:

let miataRf = new Sport("Miata-RF", "Grand Touring", "manual", "hard top", "red", "leather", "Premium", "Premium")



// Print miataRf. It should have all of the above properties. Plus, the extended warranty.
// Write your code below:
console.log(miataRf);



// Print miataRf, calling massBuild(), building 15,000
// It should print: "Building 15000 Red Grand Touring Miata-RF's."
// Write your code below:
miataRf.customerBuild("", {trim: "Grand Touring", model: "Miata-RF", options :["HID headlights", "sports suspension", "Leather steering wheel", "adaptive cruise control"]})



// Print miataRf, calling customerBuild(), building one black Miata-Rf with the following options, as an array: hid headlights, sports suspension, leather steering wheel, heated seats, adaptive cruise control.
// It should read: "Building one black Grand Touring Miata-RF with the following options: hid headlights, sports suspension, leather steering wheel, heated seats, adaptive cruise control"
// Write your code below:




// TRAIL BLAZER MASS PRODUCTION
// The Trail Blazer should inherit from truck.
// The following properties must be specified: model (Trail Blazer), color (blue), trim (Sport), enginesize (8), hitch (true), bed (standard), navigation (true), doors (2)

// Write your 'trailBlazer' instance below:
// Write your code below:


let trailBlazer = new Truck("Trail Blazer", "Blue", "Sport", "V8", true, "Standard", true, 2)
console.log(trailBlazer);


// Print trailBlazer. It should have all the above properties. Plus, the extended warranty.
// Write your code below:



// Print trailBlazer, calling massBuid(). It should build 35000 trucks.
// It should print: "Building 35000 blue Sport Trail Blazer's."
// Wrint your code below:

let trailBlazer2 = miataRf.massBuild(35000, {color: "blue", trim: "sport", model: "Trail Blazer"})
console.log(trailBlazer2)

// Print trailBlazer, calling customerBuild(). It should build a red Trail Blazer with the following options, as an array: seat warmers, tinted windows, fog lamps.
// It should print: "Building one red Sport Trail Blazer with the following options: seat warmers, tinted windows, fog lamps"
// Write your code below:
trailBlazer.customerBuild("red", {trim: "Sport", model: "Trail Blazer", options :["Seat warmers", "tinted windows", "fog lamps"]})
