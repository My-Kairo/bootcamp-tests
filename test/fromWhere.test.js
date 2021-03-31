describe('fromWhere function', function(){
    it('should return Bellville if its CY', function(){
        assert.equal(fromWhere('CY'), 'Bellville')
    })
    it('should return Paarl if its CJ', function(){
        assert.equal(fromWhere('CJ'), 'Paarl')
    })
})