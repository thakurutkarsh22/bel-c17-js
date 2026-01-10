const request = require("supertest");
const app = require("../../app");
const mongoose = require('mongoose');
const UserModel = require("../../models/UserModel");

// mongoose 
jest.mock('mongoose', () => {
    const actualMongoose = jest.requireActual('mongoose');

    return {
        ...actualMongoose,
        connect: jest.fn().mockResolvedValue({}),
        disconnect: jest.fn().mockResolvedValue({})
    }
});


// user model 

jest.mock("../../models/UserModel", () => {
    // We create a mock function for the save method
    const mockSave = jest.fn();
    const mockFind = jest.fn();

    // The mock constructor returns an object containing the save method
    const MockUserModel = jest.fn().mockImplementation(() => {
        return {
            save: mockSave,
            find: mockFind
        };
    });

    // Attach static methods if your controller uses them (like findOne)
    MockUserModel.findOne = jest.fn();
    MockUserModel.create = jest.fn();

    return MockUserModel;
});

// jest.mock("../../models/UserModel", () => {

//     const mockSave = jest.fn();
//     const mockFind = jest.fn();


//     const MockUserModel = jest.fn((data) => {
//         console.log(data, 'data')
//         return {
//             ...data,
//             save: mockSave
//         }
//     })

  
//   // Mock static methods (if you use them, like find, findOne, etc.)
//   MockUserModel.find = jest.fn();
//   MockUserModel.findOne = jest.fn();
//   MockUserModel.create = jest.fn();
//   MockUserModel.save = jest.fn((data) => {
//     return {
//         ...data
//     }
//   });

//   return MockUserModel;
// });


// register 


describe("registeration flow ", () => {

    let user;

    beforeEach(() => {
        jest.clearAllMocks();


        user = {
            username: "animesh",
            password: "asdf1234",
            email: "animesh@gmail.com",
            age: 27,
            gender: "male"
        }

    })


    it("post /api/v1/auth/register register user successfully ", async () => {
        const responsePayload = {
            "message": "user created successfully",
            "response": {
                "username": "animesh",
                "password": "$2b$10$/B3DhUcWoqIXqpzSs6WlAeT7j.2H3ElwJhl02eAcijXb3T0ChY422",
                "email": "animesh1@gmail.com",
                "age": 27,
                "gender": "male",
                "_id": "6961fc8b6f1ff84b8b0b29d7",
                "createdAt": "2026-01-10T07:15:23.213Z",
                "updatedAt": "2026-01-10T07:15:23.213Z",
                "__v": 0
            }
        }


        // // mocking 
        // UserModel().save.mockResolvedValue(responsePayload);

        // act 

        // const response = await request(app).post("/api/v1/auth/register");

        // // assert 

        // expect(response).toHaveProperty("message");


        // Access the mock instance's save method
        const mockUserInstance = new UserModel();  // { save: jestfn(), find} 
        mockUserInstance.save.mockResolvedValue(responsePayload);

        const response = await request(app)
            .post("/api/v1/auth/register")
            .send(user); // Ensure data is sent

        // If your controller returns the message, this will now pass
        expect(response.status).toBe(201); // Good practice to check status first
        expect(response.body).toHaveProperty("message", "user created successfully")
    })



});



