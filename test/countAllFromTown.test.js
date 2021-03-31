describe('countAllFromTown function', function(){
    it('should count all registration from the town', function(){
        assert.equal(countAllFromTown('CA', 'CJ'), 0)
    })
    it('should display regs from town', function(){
        assert.equal(countAllFromTown('CA'), 0)
    })
})