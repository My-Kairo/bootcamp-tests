describe('findItemsOver function', function () {
    it('should return threshold items greater than 25', function () {
        assert.deepEqual(findItemsOver20([{ "name": "pears", "qty": 37 }, { "name": "bananas", "qty": 10 }]), [{ "name": "pears", "qty": 37 }]);
    });
    it('should display threshold products with quantity greater than 25', function () {
        assert.deepEqual(findItemsOver20([{ "name": "berries", "qty": 10 }, { "name": "bananas", "qty": 26 }]), [{ "name": "bananas", "qty": 26 }]);
    });
});