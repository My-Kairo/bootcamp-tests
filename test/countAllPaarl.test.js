describe('countAllPaarl function', function(){
    it('should count all regs from paarl', function(){
        assert.equal(countAllPaarl('CJ'), 1)
    })
    it('should display all from paarl', function(){
        assert.equal(countAllPaarl('CJ, CJ, CJ, CY'), 3)
    })
})