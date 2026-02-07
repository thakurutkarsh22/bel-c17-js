// SOLID - 

// S -> Single responsibility principle 

// Example: Bad example 

// class User {
//     name: string;
//     email: string;

//     constructor(name: string, email: string){
//         this.name = name;
//         this.email = email;
//     }

//     // Responsibility No. 1
//     getName() {
//         return this.name;
//     }

//     // Responsibility No. 2
//     sendWelcomeEmail() {
//         console.log("welcome email, " , this.email)
//     }

//     // Responsibility No.3 
//     saveUser() {
//         console.log("save user", this.name)
//     }
// }


// // Soliution
// class User1 {
//     name: string;
//     email: string;

//     constructor(name: string, email: string){
//         this.name = name;
//         this.email = email;
//     }

//     // Responsibility No. 1
//     getName() {
//         return this.name;
//     }
// } 

// class EmailNotification {
//     email: string
//     constructor(email: string) {
//         this.email = email
//     }
//     sendWelcomeEmail() {
//         console.log("welcome email, " , this.email)
//     }
// }

// class UserService {
//     save(name: string) {
//         console.log("save user", name)
//     }
// }

// const userx = new User1("x", "x@gmail.com");
// const userService = new UserService();

// userService.save(userx.getName())





// O -> open for extension and closed for modification 
// Bad example :
class PaymentProcessor {
    process(amount: number, type: string) {
        if(type === "UPI") {
            console.log("processing UPI", amount)
        } else if (type === "creditcard") {
            console.log("processing Credit card", amount)
        } else if (type === "paypal") {
            console.log("processing Paypal", amount)
        } 
        // modification of class to add bitcoin as a payment processor 
        else if (type === "bitcoin") {
            console.log("processing Paypal", amount)
        } 
    }
}
// creditcard 
const naturalIcecreamPayment = new PaymentProcessor();
naturalIcecreamPayment.process(170, "creditcard");
naturalIcecreamPayment.process(170, "UPI");


// solution : 

// abstract class 
interface PaymentMethod {
    pay(amount: number): void;
}


class CreditCardPayment implements PaymentMethod {
    pay(amount: number): void {
        console.log("processing Credit card", amount)
    }
}

class UPIPayment implements PaymentMethod {
    pay(amount: number): void {
        console.log("processing Upi", amount)
    }
}



//  L - liskov substitution principle -> 
// wherer ever you are able to use class A, ideally you should be able to use class B as well. 

// class B extends A {
// }

// problem statement: 

// class Bird {
//     fly() {
//         console.log("bird flying")
//     }
// }

// class Sparrow extends Bird {
//     fly(): void {
//         console.log("sparrow fly")
//     }
// }


// // Penguine by noy flying is changing the behaviour of its parent.
// class Penguine extends Bird {
//     fly(): void {
//         console.log("I cant fly")
//         throw new Error("I cant fly")
//     }
// }


// function implFlyOfBird(bird) {
//     bird.fly()  // this will fail for penguine 
// }


// SOlution: 


// interface IBird {
//     move(): void
// }

// class FlyingBird implements IBird  {
//     move(): void {
//         console.log("bird flying");
//     }
// }

// class Sparrow extends FlyingBird {
// }

// class Penguin implements IBird {
//     move(): void {
//         console.log("penguin move on feet");
//     }
// }


// function makeBirdFly(bird: IBird) {
//     bird.move() // work for all the birds
// }


// I -> Interface segregation principle
// Large interfaces should be broken down
// A class should implement only those methods that it actually uses.


interface Worker {
    work(): void;
    eat(): void;
    sleep(): void;
}
 // human worker 
 // robot worker (amazon werehouse)


//  class HumanWorker implements Worker {
//     work(): void {
//         console.log("human working")
//     }
//     eat(): void {
//         console.log("human eating")
//     }
//     sleep(): void {
//         console.log("human sleeping")
//     }

// }

// // TODO : fix this 
//  class RobotWorker implements Worker {
//     work(): void {
//         console.log("robot working")
//     }
//     eat(): void {
//         // robots dont eat
//         throw new Error("robots dont eat")
//     }
//     sleep(): void {
//         // robots dont sleep
//         throw new Error("robots dont sleep")
//     }

// }

// Solution -> what is the solution ? 


// 

/*
interface IWork {
    work(): void;
}

interface ISleep {
    sleep(): void;
}


class HumanWorker implements IWork, ISleep {
    work(): void {
        console.log("human working");
    }

    sleep() {
        console.log("sleep");
    }
}

class RobotWorker implements IWork {
    work(): void {
        console.log("human working");
    }
}
    */



// D -> Dependency invesion Principle


// DB service -> Mysql
// user service -> 

/*
class MySqlDBService {
    connect() {
        console.log("connected to mysql db")
    }

    query() {
        console.log("query executed")
    }

    save(user: any) {
        console.log("save User", user);
    }
}

class UserService {
    dbService: MySqlDBService
    user: any;
    constructor(db: MySqlDBService) {
        this.dbService = db;
    }

    saveUser() {
        this.dbService.save(this.user)
    }
}

*/


// SOLUTION: 

interface IDatabase {
    // CRUD operation 
    connect(): void;
    save(user: any): void;
    query(): void;
}


class MySqlDBService implements IDatabase {
    dbConnection: DatabaseConnection
    connect() {
        const db1 = DatabaseConnection.getInstance('mysql://server1');
        this.dbConnection = db1;
    }
    save(user: any): void {
        console.log("save user in mysql", user)
    }
    query(): void {

    }
}

class MongoDB implements IDatabase {
    connect() {
        const db1 = DatabaseConnection.getInstance('mysql://server1');
        this.dbConnection = db1;
    }
    save(user: any): void {
        console.log("save user in mongo", user)
    }
    query(): void {
        console.log("query execute in mongo")
    }
}   


class UserService {
    database: IDatabase
    user: any
    constructor(db: IDatabase) {
        this.database = db; 
    }

    saveUser() {
        this.database.save(this.user)
    }
}


// Usage : 
const mysql = new UserService(new MySqlDBService());

const mongo = new UserService(new MongoDB());


