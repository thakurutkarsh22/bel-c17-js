// it 
// describe 

const adminCheck = require("../../middleware/admincheck.middleware");
const { sumTwoNumbers } = require("../../Utils/MathUtils");




describe("adminCheck Middleware", () => {

    // mocks 

    let mockReq;
    let mockRes;
    let mockNext;

    // it will run before each test case (it block)
    beforeEach(() => {

        mockReq = {
            role: '',
            abc: 12,
        };

        mockRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis(),
            send: jest.fn().mockReturnThis(),
        };

        mockNext = jest.fn();
    });



    it("should return 403 if user role is not admin", () => {
        // Arrange (you want to set the data)
        mockReq.role = "user";
        // Act (calling the function)
        const validatorMiddleware = adminCheck("admin");
        validatorMiddleware(mockReq, mockRes, mockNext);

        // Assert
        expect(mockRes.status).toHaveBeenCalledWith(409);
        expect(mockRes.json).toHaveBeenCalledWith({
                message: "not allowed"
        });
    });

    it("should call next() if user role is admin", () => {

    });


    it("should calculate the sum of tow numbers correctly", () => {
        // Arrange
        const a = 1;
        const b = 2;

        // Act
        const sum = sumTwoNumbers(a, b);

        // Assert
        expect(sum).toBe(3);
    });
});