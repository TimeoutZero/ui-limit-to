


describe('ui-limit-to', function () {

  describe('main filter', function () {
    var uiLimitTo = null;

    beforeEach(module('uiLimitTo.filters'));
    beforeEach(inject(function (_uiLimitToFilter_) {
      uiLimitTo = _uiLimitToFilter_;
    }));


    describe("when there's a large list", function () {
      var largeList    = null;
      var filteredList = null;

      describe("and it's using an property to identify a model", function () {

        beforeEach(function(){
          largeList    = [{id: 1}, {id: 2}, {id: 3}];
          filteredList = uiLimitTo(largeList, 2, {id: 1}, 'id');
        });

        it('Limits the list by limitNumber', function () {
          expect(filteredList).toEqual(jasmine.any(Array));
          expect(filteredList.length).toEqual(2);
        });

        it('Ensures that the model is present', function () {

        });


      });


    });



  });

});
