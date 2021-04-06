describe('isWeekday function', function(){
    it('should return true if weekday starts with M', function(){
        assert.equal(isWeekday('M'), true);
    });
    it ('should display false if its not weekday', function(){
        assert.equal(isWeekday('S'), false)
    })
});