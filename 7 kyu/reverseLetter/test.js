const expect = require('chai').expect;
const reverseLetter = require('./reverseLetter');

describe("reverseLetter()", function() {

    it('should return "nortlu"', function() {
        let result = reverseLetter("ultr53o?n");
        expect(result).to.equal("nortlu");
    })

    it('should return "Hello"', function() {
        let result = reverseLetter('2!o88.ll1&e,H');
        expect(result).to.equal("Hello");
    })
    
    it('should return "Dog"', function() {
        let result = reverseLetter('2g.,&oD');
        expect(result).to.equal("Dog");
    })
})