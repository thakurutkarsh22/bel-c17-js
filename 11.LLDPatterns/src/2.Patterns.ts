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

*/

// chain of responsibility
// stratergy pattern -> vv widely used 
// commnad pattern -> rarely used
// Objserver pattern -> 