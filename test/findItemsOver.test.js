describe('findItemsOver function', function(){
    it('should return items over', function(){
        assert.equal(findItemsOver('fruitList'), 0)
    })
    it('should return fruits that are over', function(){
        assert.equal(findItemsOver('items'), 0)
    })
})