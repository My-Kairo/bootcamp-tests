describe('isWeekday function', function(){
    it('should return false if weekday starts with S', function(){
        assert.equal(isWeekday('S'), false);
    });
    it ('should display true if is weekday', function(){
        assert.equal(isWeekday('D'). true);
    })
});