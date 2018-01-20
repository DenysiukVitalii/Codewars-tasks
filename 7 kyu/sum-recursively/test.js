const expect = require('chai').expect;
const sumR = require('./sum-recursively');

describe("sumR()", function() {

    it('should return 6', function() {
        let result = sumR([1,2,3]);
        expect(result).to.equal(6);
    })

    it('should return 0', function() {
        let result = sumR([]);
        expect(result).to.equal(0);
    })
    
    it('should return 8', function() {
        let result = sumR([5,2,4,-3]);
        expect(result).to.equal(8);
    })
})