describe('countAllPaarl function', function(){
    it('should count all regs from paarl', function(){
        assert.equal(countAllPaarl('CJ 3783746'), 1)
    })
    it('should display all regs from paarl', function(){
        assert.equal(countAllPaarl('CJ 5645, CJ 65456, CJ 4345, CY 54242'), 3)
    })
})