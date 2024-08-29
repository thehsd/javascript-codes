// functional programming
// object oriented programming | oop | شی گرایی

// class User {
//   constructor(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }

//   talking() {
//     console.log(`${this.name} talk about x`);
//   }
//   sleeping() {
//     console.log("something");
//   }
// }

// const userOne = new User("alireza", 31, "male");
// const userTwo = new User("alex", 23, "male");
// const userThree = new User("zahra", 18, "female");

// userOne.talking();
// userTwo.talking();
// userThree.talking();

// class Car {
//   constructor(model, color, year) {
//     this.model = model;
//     this.color = color;
//     this.year = year;
//   }
//   start() {
//     console.log("start");
//   }
//   getMaxSpeed() {}
// }

// class TruckCar extends Car {
//   constructor(model, color, year, maxSpeed) {
//     super(model, color, year);
//     this.maxSpeed = maxSpeed;
//   }

//   getMaxSpeed() {
//     return `the max speed of ${this.model} is ${this.maxSpeed}`;
//   }
// }

// class ElectricCar extends Car {
//   constructor(model, color, year, batteryCapacity) {
//     super(model, color, year);
//     this.batteryCapacity = batteryCapacity;
//   }

//   charge() {
//     console.log(this.model, " is charging");
//   }
//   getMaxSpeed() {
//     return `the max speed of ${this.model} is 210`;
//   }
// }

// const myCar = new ElectricCar("tesla g56", "yellow", 2022, 9000);
// myCar.charge();

// const myTruck = new TruckCar("salar", "red", 1990, 90);

// console.log(myTruck.getMaxSpeed());
// console.log(myCar.getMaxSpeed());

// class Shape {
//   calculator() {}
// }

// class Circle extends Shape {
//   constructor(radius) {
//     this.radius = radius;
//   }
//   calculator() {
//     return this.radius * this.radius * 3.14;
//   }
// }

// class Rectangle extends Shape {
//   constructor(w, h) {
//     this.w = w;
//     this.h = h;
//   }
//   calculator() {
//     return this.w * this.h;
//   }
// }

// class User {
//   #wallet;
//   constructor(name, wallet, age) {
//     this.name = name;
//     this.#wallet = wallet;
//     this.age = age;
//   }
//   canShop() {
//     if (this.#wallet > this.#getWalletAmount()) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   #getWalletAmount() {
//     //privet
//     return 8;
//   }
// }

// const userX = new User("alireza", 100, 31);

// console.log(userX.canShop());

// const now = new Date("2024-08-21 13:04:38");
// const option = {
//   month: "long",
//   year: "numeric",
//   weekday: "long",
// };
// console.log(now.toLocaleDateString("hi-IN", option));

const isTrue = false;
const str = undefined;
const myArray = [];

console.log(isTrue || str);
