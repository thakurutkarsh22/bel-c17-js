const fs = require("node:fs");

const filepath  = "./textFile.txt";

// async manner file reading 
console.log("file reading start ");
// async 
fs.readFile(filepath, 'utf-8', (error, data) => {
    if(error) {
        console.log(error)
        return;
    }
    console.log(" ------------- data from file --------- ")
    console.log(data.toString());
})
console.log("file reading end");



// SYNC file reading 

/**
console.log("file reading start ");
// async 
const fileMaterial = fs.readFileSync(filepath, 'utf-8')
console.log("----------- FILE OUTPUT ----------")
console.log(fileMaterial.toString());

console.log("file reading end");

 */


//. we should not NEVER USE readFileSync or readFile for Big files (1gb file)
// for smaller files we can use any thing here 