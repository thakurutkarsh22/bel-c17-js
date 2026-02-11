// ------------------------------- -1. Singleton pattern. --------------------------

/*
    we can create one object of this class and can use widely over the application 
    // one point/object for whole application (Databae connection).
    // Cache management 
    // logger class 
    // connection pooling

*/
/*

class DatabaseConnection {
    private static instance: DatabaseConnection;
    private connectionString: string = "";

    constructor(connectionString: string) {
        // If an instance already exists, return the existing one.
        if (DatabaseConnection.instance) {
            return DatabaseConnection.instance;
        }

        // Otherwise, initialize the new instance and store it.
        this.connectionString = connectionString;
        DatabaseConnection.instance = this;
    }

    // A method to get the single instance
    static getInstance(connectionString: string): DatabaseConnection {
        if (!DatabaseConnection.instance) {
            DatabaseConnection.instance = new DatabaseConnection(connectionString);
        }
        return DatabaseConnection.instance;
    }
    
    // Example business logic method
    connect(): void {
        console.log(`Connecting to database with: ${this.connectionString}`);
        // connection logic...
    }
}

// Usage:
const db1 = DatabaseConnection.getInstance('mongodb://server1');
const db2 = DatabaseConnection.getInstance('mongodb://server2'); // The argument here is ignored as an instance already exists


console.log(db1 === db2) // true


// 1. Database-> data 
// 2. statistics (logging) (Colluminar DB )
// 


*/


// ------------------------------------- 2. Factory Pattern :  --------------------------
/**
 * 1. create objects without exposing the creation logic to the client.
 * 2. refer : https://refactoring.guru/design-patterns/factory-method
 * 3. https://www.typescriptlang.org/docs/handbook/classes.html
 */



// Bad Code: 

// class 
// in this we are voilating O - open/close principle of SOLID 
// function createNotification(type: string, message: string) {
//     if(type === 'email') {
//         // must have different way SMTP 
//         console.log("email", message)
//     } else if(type === 'pushnotification') {
//         // PUSH protocol 
//         console.log("pushnotification", message)
//     } else if(type === "sms") {
//         // SMS protocol
//         // voilating here
//     }
// }


// // client / usage 
// const email = createNotification("email", "hellop");
// const pushnotification = createNotification("pushnotification", "hellop");


// class EmailNotification {
//     message: string
//     constructor(message: string) {
//         this.message = message
//     }
//     send() {
//         console.log("send email notification", this.message)
//     }
// }


// class PushNotifiaction {
//     message: string
//     constructor(message: string) {
//         this.message = message
//     }
//     send() {
//         // push protocol 
//         console.log("send push notification", this.message)
//     }
// }

// // Factory class -> to give you objects
// // Notification family
// class NotifiactionFatory {
//     static createNotification(type: string, message: string) {
//         const types: any = {
//             email: EmailNotification,
//             pushnotification: PushNotifiaction
//         }

//         const NotificationClass = types[type];
//         return  new NotificationClass(message)
//     }
// }


// const email = NotifiactionFatory.createNotification("email", "hello");
// const pushnotification = NotifiactionFatory.createNotification("pushnotification", "hello");


// ---------------------------------------- 3. Abstract factory -----------------------------

// LoggingFamily -> kerberos, datadog, premoteius 
// Notification -> 



// 4.  ---------------------------4. bridge pattern ---------------
// helps in un exploding classes 


// bad example 

// 2 shapes 
// 3 colors
// total class combination = 6

// 3 shapes , 3 colors = total cmbination = 9
// 4 shapes , 4 colors = 16


// class CircleRed {
//     draw() {
//         console.log("drawing circle red")
//     }
// }

// class CircleBlue {
//     draw() {
//         console.log("drawing circle red")
//     }
// }

// class CircleGreen {
//     draw() {
//         console.log("drawing circle red")
//     }
// }


// class SquareRed {
//     draw() {
//         console.log("drawing square red")
//     }
// }

// class SquareBlue {
//     draw() {
//         console.log("drawing square red")
//     }
// }

// class SquareGreen {
//     draw() {
//         console.log("drawing square red")
//     }
// }

// // usage : 
// const circleGr4een = new CircleGreen();
// circleGr4een.draw() // drawing circle red


// Good example

/*
class RedColor {
    applyColor() {
        return "red"
    }
}

class GreenColor {
    applyColor() {
        return "green"
    }
}

class BlueColor {
    applyColor() {
        return "blue"
    }
}

class BlackColor {
    applyColor() {
        return "black"
    }
}


// abcstract class 
abstract class Shape {
    color: string
    constructor(color: string) {
        this.color = color
    }

    draw(){

    }
}

class Circle extends Shape {
    constructor(color: string) {
        super(color)
    }
    draw() {
        console.log("drawing circle with color", this.color)
    }
}

class Square extends Shape {
    constructor(color: string) {
        super(color)
    }
    draw() {
        console.log("drawing square with color", this.color)
    }
}

class Triangle extends Shape {

}

class Trepozium extends Shape {

}


const redCircle = new Circle(new RedColor().applyColor());
redCircle.draw(); // drawing circle with color red


// ----------------------- 5. composite pattern --------------------------
/*
    1. Tress structure
    2. ORG hierarchy
    3. FOlder structure 
*/

// Bad example 
// class UFile {
//     name;
//     size;
//     constructor(name: string, size: number) {
//         this.name = name
//         this.size = size
//     }
// }

// class Folder {
//     name;
//     files: UFile[] = []
//     constructor(name: string) {
//         this.name = name
//     }
// }


// operation 

// think this as a function in Mac to get the file info 
// item can be of type folder 
// item can --- file
// function getInfo(item: any) {
//     if(item instanceof Folder) {
//         let totalSize = 0;
//         console.log("folder", item.name)
//         item.files.forEach(file => {
//             totalSize += file.size
            
//         })
//         console.log("total size ", totalSize ) // 2 gb 
//     } else if(item instanceof UFile) {
//         console.log("size", item.size) // 35MBS
//     } 
// }


// solution 

// abstract class FileSystemInfo {
//     name: string
//     constructor(name: string) {
//         this.name = name;
//     }
//     getSize() {}
// }

// class UFile extends FileSystemInfo {
//     name;
//     size;
//     constructor(name: string, size: number) {
//         super(name)
//         this.name = name
//         this.size = size
//     }

//     getSize() {
//         return this.size;
//     }
// }

// class Folder extends FileSystemInfo {
//     name;
//     children: UFile[] = []
//     constructor(name: string) {
//         super(name)
//         this.name = name
//     }

//     getSize() {
//         let totalSize = 0;
//         console.log("folder", item.name)
//         this.children.forEach(file => {
//             totalSize += file.size
            
//         });

//         return totalSize;
//     }
// }



// --------------- 6. Decorator pattern ----------

// bridge pattern ? 
// bad example 
// class Coffee {
//     cost() {
//         return 50;
//     }
// }

// class CoffeePlusMilk {
//     cost() {
//         return 50 + 20;
//     }
// }

// class CoffeePlusSugar {
//     cost() {
//         return 50 + 10;
//     }
// }

// class COffeePlusMilkPlusSugar {
//     cost() {
//         return 50 + 20 + 10;
//     }
// }

// // 1. if coffee price increase 


// const customer1 = new Coffee();
// customer1.cost() // 50;

// const customer2 = new CoffeePlusMilk();
// customer2.cost() // 70;


// solution 

// interface Coffee {
//     cost(): any;
//     description(): any;
// }

// class CoffeeDecorator implements Coffee {
//     cost() {
//         return 50;
//     }

//     description() {
//         return "coffee";
//     }
// }


// // decorator
// class CoffeePlusMilkDecorator extends CoffeeDecorator {
//     cost() {
//         return super.cost() + 20;
//     }

//     description(): string {
//         return super.description() + " + milk";
//     }
// }

// class CoffeePlusSugarDecorator extends CoffeeDecorator {
//     cost() {
//         return super.cost() + 10;
//     }

//     description(): string {
//         return super.description() + " + sugar";
//     }
// }

// class CoffeePlusSugarPlusMilk extends CoffeePlusSugarDecorator {
//     cost() {
//         return super.cost() + 20;
//     }
// }

// // usage

// const customer1 = new CoffeeDecorator();
// console.log(customer1.cost());
// console.log(customer1.description());


// const customer2 = new CoffeePlusSugarDecorator();
// console.log(customer2.cost());
// console.log(customer2.description());



// ---------------- 7. Observer Pattern ------------------------
// keppa 


// what is the problem ? 
// voilates open close principle
// product class has to know about its dependents.
// class Product {
//     name: string;
//     price: number;
//     constructor(name: string, price: number) {
//         this.name = name;
//         this.price = price;
//     }


//     serPrice(price: number) {
//         this.price = price;

//         // notify all the subscribers/observers
//         // tight coluping 
//         this.updateWebsite();
//         this.updateEmail();
//         this.updateNotificatoin();
//     }

//     updateWebsite() {
//         console.log("update website price", this.price)
//     }

//     updateEmail() {
//         console.log("update email price", this.price)
//     }

//     updateNotificatoin() {
//         console.log("update notification price", this.price)
//     }
// }


// solution 

// subject - is product where observation will happen 
/*
class Product {
    name: string;
    price: number;
    observers: any[] = []; // list of observers 
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    subscribe(observer: any) {
        // add observer to the list
        this.observers.push(observer);
    }

    unSubscribe(observer: any) {
        // remove observer from the list
        this.observers.filter(obs => obs !== observer);
    }


    notify() {
        this.observers.forEach(observer => {
            observer.update(this)
        })
    }

    // do not care about the subscruptions (no implementation detail needed)
    setPrice(price: number) {
        this.price = price;
        this.notify();
    }
}

// observers 
class EmailObserver {
    update(product: Product) {
        console.log("email observer", product.price)
    }
}

class WebsiteObserver {
    update(product: Product) {
        console.log("website observer", product.price)
    }
}

class NotificationObserver {
    update(product: Product) {
        console.log("notification observer", product.price)
    }
}


// usage 
const product = new Product("ipad", 100000);

const emailObserver = new EmailObserver();
const websiteObserver = new WebsiteObserver();
const notificationObserver = new NotificationObserver();

// product.subscribe(emailObserver);
// product.subscribe(websiteObserver);
product.subscribe(notificationObserver);



// someone will increase the price 

product.setPrice(120000); // all the observers will get the update about the price change and can do their own implementation logic
*/

// ------------------------------- 8. chain of responsibility ---------------------------


// bad logic 

// function handleSupport1(request: any) {
//     if(request.type === "baisc") {
//         // handle payment ticket
//     } else if(request.type === "technical") {
//         // handle account ticket
//     } else if (request.type === "general" ) 
//     else 
//         if(request.type === "billing") {
//         // handle general ticket
//     } else if(request.type === "managerial") { 
//         // reject ticket
//     }
// }

// function handleSupport2(request: any) {
//     if(request.type === "baisc") {
//         // handle payment ticket
//     } else if(request.type === "technical") {
//         // handle account ticket
//     } else if (request.type === "general" ) 
//     else 
//         if(request.type === "billing") {
//         // handle general ticket
//     } else if(request.type === "managerial") { 
//         // reject ticket
//     }
// }

// 1. Swiggy normal customer -> basic, techincal (show photo of food)
// 2. Swiggy one black premium subscription: basic, techincal, billing, managerial

/*

class SupportHandler {
    next: any;
    handle(request: any) {
        if(this.next) {
            this.next.handle(request)
        }
    }
}

// Sev1 : 
class BasicSupportHandler extends SupportHandler {
    handle(request: any) {
        if(request.type === "basic") {
            console.log("handling basic support request")
            return;
        }
        super.handle(request)
    }
}

class TechnicalSupportHandler extends SupportHandler {
    handle(request: any) {
        if(request.type === "technical") {
            console.log("handling technical support request")
            return;
        }
        console.log("next called  in TechnicalSupportHandler")
        super.handle(request)
    }
}

class BillingSupportHandler extends SupportHandler {
    handle(request: any) {
        if(request.type === "billing") {
            console.log("handling billing support request")
            return;
        }
        console.log("next called  in BillingSupportHandler")
        super.handle(request)
    }
}

// usage 
const basicSupportHandler = new BasicSupportHandler();
const technicalSupportHandler = new TechnicalSupportHandler();
const billingSupportHandler = new BillingSupportHandler();

// chain of responsibility 
basicSupportHandler.next = technicalSupportHandler;
technicalSupportHandler.next = billingSupportHandler;

// food returned 
const request1 = {
    type: "billing"
}

// basicSupportHandler.handle(request1);

// genetal query 
const reques2 = {
    type: 'basic',
}

basicSupportHandler.handle(reques2);

// 
*/