describe('isFromBellvile function', function(){
    it('should return true for CY 123-223', function(){
        assert.equal(isFromBellville("CY 123-223"), true);
    })
     it('should return false for CY 123-223', function(){
         assert.equal(isFromBellville("CY 123-223"), true);
     })
})