describe('countAllFromTown function', function(){
    it('should count all registration from the town', function(){//passes two parameters
        assert.equal(countAllFromTown('CA 67788', 'CJ 3556'),0)
    })
    it('should display regs from town', function(){
        assert.equal(countAllFromTown('CA 3464, CY 78996, CJ 12345'),0)//it passes two parameters
    })
})