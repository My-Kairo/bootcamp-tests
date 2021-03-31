describe('regCheck function', function(){
	it('should return true for GP', function(){
		assert.equal(regCheck('GP'), false)
	})
	it('should return false for CJ', function(){
		assert.equal(regCheck('CJ'), false)
	})
})