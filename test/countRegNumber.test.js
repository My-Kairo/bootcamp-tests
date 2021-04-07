describe('countRegNumber function', function(){
    it('should count regs for Bellville', function(){
        assert.equal(countRegNumber('CY 123-223, CY 123-123'), 2);
    });
    it('should count regs for Paarl', function(){
        assert.equal(countRegNumber('CJ 8476, CJ 397'), 2)
    })
    it('should count regs for Cape Town', function(){
        assert.equal(countRegNumber('CA 62356, CA 76977, CA 8697'), 3)
    })
});