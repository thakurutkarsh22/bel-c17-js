// ----------------------- BASIC JEST ----------------------------

const { sumTwoNumbers } = require("../../Utils/MathUtils");


//  nested describe 

/*
describe("Describe 1", () => {

    describe("Describe inner 1", () => {


        it.skip("inner 1 it1", () => {
            console.log("inner 1 it1")
        });

        it.todo("inner 1 it2");


        // explicit
        test("test1 ", () =>{
            console.log("test")
        })

        test.each([
            [1, 1, 2],
            [1, 2, 3],
            [9007199254740991, 1, 9007199254740992],
            ])('adds %i + %i to equal %i', (a, b, expected) => {
            
            expect(a + b).toBe(expected);
        });


    });



    describe("Describe inner 2", () => {
        it("inner 2 it1", () => {
            console.log("inner 2 it1")
        });
    });

    
});
* */

// modifiers 
// it.skip - it will skip the test 
// it.only - only this test case will run and 
// it.todo - todo test case 
// it.each - will run the test cases for all the inputs 



// ---------------------- JEST HOOKS -----------------------

/*
1. beforeAll -> runs Once before all the test cases in describe 
2. beforeEach -> before each test case it will run 
3. afterEach -> after each test case it will run 
4. afterAll -> runs Once after all the test cases in describe 

*/



// beforeAll(() => {
//     console.log("before all");
//     /*
//         1. connection = mongoose connection
//         2. repository pattern : connect to DB 
//     */
// })

// afterAll(() => {
//     console.log("after all");

//     /**
//      * 1. close server 
//      * 2. mongoose connection 
//      * 3. CLEANUP
//      * 
//      */

// })


// describe("Describe 1", () => {

//     beforeEach(() => {
//         console.log("before each");
//         /**
//          * 1. reset of mocks
//          * 2. reset of data
//          */
//     })

//     afterEach(() => {
//         console.log("after each");
//         /**
//          * 1. clean mocks 
//          * 2. timers 
//          * 3. delete test data
//          */
//     })



//     it("inner 1 it1", () => {
//         console.log("inner 1 it1")
//     });

//     it.todo("inner 1 it2");


//     // explicit
//     test("test1 ", () =>{
//         console.log("test")
//     })

//     // test.each([
//     //     [1, 1, 2],
//     //     [1, 2, 3],
//     //     [9007199254740991, 1, 9007199254740992],
//     //     ])('adds %i + %i to equal %i', (a, b, expected) => {
        
//     //     expect(a + b).toBe(expected);
//     // });

//     it("inner 2 it1", () => {
//         console.log("inner 2 it1")
//     });
// });



// ------------ Jest functions ----------------

//  jest.fn() ->  give me the fuction mock




// ------------ expectiation ---------------------------
// sumTwoNumbers(1, 2);


// expect(sumTwoNumbers).haveBeenCalledWith(1, 2) // when we wan to check the arguments
// expect(sumTwoNumbers).not.toBe(5)
// expect({message: "hello"}).toHaveProperty("message");
// expect(sumTwoNumber).toHaveBeenCalled();


// // exceptions 

// expect(() => {}).toThrow(new Error("exption 1"));


// ---------- spy on ------------------------


describe('hello test', () => {
    const calculator = {
        add: (a,b) => {
            console.log("actial call to add function ")
            return a+ b;
        },
        sub: (a,b) => {
            return a -b;
        }
    }
    it("testing spy", () => {
 

        const spyOnAddCalculator = jest.spyOn(calculator, 'add');

        calculator.add(2, 3);


        expect(spyOnAddCalculator).toHaveBeenCalled();
    })
})















// looking 
// log.debig 
// log.error
// log.waring