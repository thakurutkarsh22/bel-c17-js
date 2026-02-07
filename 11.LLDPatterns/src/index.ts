//  what are design principles 
// 

// what are our flaws
// 1. redundancy -> copying the same code everywhere 
// 2. one function multiple responsiblity 

// let z = 1;
// function add(a,b) {
//     // multiple things

//     console.log()
//     z = 12;
//     return a+b;

// }


// What is our goal 
/*
` 1. Maintainibility - bug fixing , new feature
  2. scalibility - monorepos (multiple projects in one repo)
  3. resuable -
  4. robustness - exceptional handling, error handling 
*/


/**
 * Basic design principles 
 * 
 * DRY - do not repeat yourself
 * KISS - keep it simple, stupid
 * YAGNI - you are not going to need it.
 * SOLID - Design principles for OOPS
 * composition over inheritance
 */


// kiss example 
// BAD
const grade = (s:number) => s>= 90 ? 'A' : s>=80 ? 'B' : s>=70 ? 'C' : 'F';

const result = grade(70);
console.log(result, 'result');


// GOOD 
function getGrade(s:number) {
  if(s >= 90) {
    return "A";
  }
}


// composition over inheritance


// ISA, HAS 

// class Vehicle {

// }


// class Tata extends Vehicle {} // IS-a. // tata is a vehicle.'


// // Has a 

// class Human {

//   age;
//   gender;

//   constructor() {
//     this.age = 12;
//     this.gender = 'male';
//   }


//   canEat() {}
//    canSleep () {}

// }



// Law of demeter 

// class Order{

//   getCustomer() {
//     if(customer != null && customer.address)
//     return this.customer?.address?.city?.name; // this is bad
//   }
// }


// solution: you can create cusomer class adress class and city class 


