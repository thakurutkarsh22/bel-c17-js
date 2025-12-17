
// code 1
/**
 * console.log("a");

setTimeout(() => {
    console.log("c");
}, 0);

Promise.resolve().then(() => {
    console.log("d");
});

setTimeout(() => {
    Promise.resolve().then(() => {
        console.log("e");
    });
}, 0);


console.log("b");
 * 
 */


// answer  abdce




// node js event loop phases

// activity 1 

// console.log("1");
// process.nextTick(() => {
//     console.log("nextTick callback");
// });
// console.log("2");

// answer:  1 2 nextTick callback



// activity 2

// console.log("1");
// setTimeout(() => {
//     console.log("setTimeout callback");
// }, 0);
// process.nextTick(() => {
//     console.log("nextTick callback");
// });
// console.log("2");

// answer : 1 2 nextTick callback setTimeout callback


// activity 3
// console.log("1");

// setTimeout(() => {
//     console.log("setTimeout callback");
// }, 0);
// Promise.resolve().then(() => {
//     console.log("promise then callback");
// });
// process.nextTick(() => {
//     console.log("nextTick callback");
// });

// console.log("2");



// answer : 1 2 nextTick callback promise then callback setTimeout callback


// activity 4

const fs = require('fs');

// console.log("1");

// setTimeout(() => {
//     console.log("setTimeout callback");
// }, 0);
// Promise.resolve().then(() => {
//     console.log("promise then callback");
// });
// fs.readFile("./file.txt", () => {
//     console.log("file read callback");
// });
// process.nextTick(() => {
//     console.log("nextTick callback");
// });

// console.log("2");

/**
 * 1
2
nextTick callback
promise then callback
setTimeout callback
file read callback
 */


// activity 5
console.log("1");

setTimeout(() => {
    console.log("setTimeout callback");
}, 0);
Promise.resolve().then(() => {
    console.log("promise then callback");
});
fs.readFile("./file.txt", () => {
    console.log("file read callback");
});
process.nextTick(() => {
    console.log("nextTick callback");
});
setImmediate(() => {
    console.log("setImmediate callback");
});



console.log("2");
// for(let i=0; i<1e8; i++){} // mocking main thread blocking activity

