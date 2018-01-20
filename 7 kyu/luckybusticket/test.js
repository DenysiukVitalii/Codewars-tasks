const expect = require('chai').expect;
const isLucky = require('./luckybusticket');

describe("isLucky()", function() {

    it('should return true', function() {
        let result = isLucky('123321');
        expect(result).to.equal(true);
    })

    it('should return false', function() {
        let result = isLucky('12332');
        expect(result).to.equal(false);
    })
    
    it('should return false', function() {
        let result = isLucky('12332');
        expect(result).to.equal(false);
    })
})