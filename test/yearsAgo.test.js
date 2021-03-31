describe('yearsAgo function', function(){
    it('should return number of years ago', function(){
        assert.equal(yearsAgo('2017'), 4);
    });
    it('should display the age', function(){
        assert.equal(yearsAgo('1995'), 26)
    })
});