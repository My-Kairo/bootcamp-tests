describe('findItemsOver20 function', function(){
    it('should return fruits more than twenty', function(){
        assert.equal(findItemsOver20('fruitList'), 0)
    })
    it('should display items greater than 20', function(){
        assert.equal(findItemsOver20('list'), 0)
    })
})