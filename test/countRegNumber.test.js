describe('countRegNumber function', function(){
    it('should give length for CY 123-223', function(){
        assert.equal(countRegNumber('CY 123-223, CA 123-123'), 2);
    });
    it('should give length for CJ 7948273 and CY 6547', function(){
        assert.equal(countRegNumber('CJ 8476, CJ 397', 'CA 78624847, CY 75967, CA 0783t'), 2,3)
    })
    it('should give length for CA 8764287', function(){
        assert.equal(countRegNumber('CA 62356', 'CA 76977, CA 8697', 'CA 97657'), 1,2,1)
    })
});