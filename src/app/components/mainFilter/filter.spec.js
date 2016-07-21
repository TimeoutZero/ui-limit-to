


describe('ui-limit-to', function () {

  describe('main filter', function () {
    var uiLimitTo = null;

    beforeEach(module('uiLimitTo.filters'));
    beforeEach(inject(function (_uiLimitToFilter_) {
      uiLimitTo = _uiLimitToFilter_;
    }));


    describe("when there's a list", function () {
      var list        = null;
      var limitedList = null;

      describe("and it's using an property to identify a model", function () {

        beforeEach(function(){
          list   = [{id: 1}, {id: 2}, {id: 3}];
          limitedList = uiLimitTo(list, 2, {id: 3}, 'id');
        });

        it('Limits the list by limitNumber', function () {
          expect(limitedList).toEqual(jasmine.any(Array));
          expect(limitedList.length).toEqual(2);
        });

        it("Removes item at model's position and ensures that the model is present", function () {
          expect(limitedList[limitedList.length - 1])
            .toEqual(jasmine.objectContaining({
              id: 3
            }));
        });


      });


      describe("and it's NOT using an property to identify a model", function () {
        beforeEach(function(){
          list        = [{id: 1}, {id: 2}, {id: 3}];
          limitedList = uiLimitTo(list, 2, list[2]);
        });

        it('Limits the list by limitNumber', function () {
          expect(limitedList).toEqual(jasmine.any(Array));
          expect(limitedList.length).toEqual(2);
        });

        it("Removes item at model's position and ensures that the model is present when is NOT in limit range", function () {
          expect(limitedList[limitedList.length - 1])
            .toEqual(jasmine.objectContaining({
              id: 3
            }));
        });

        it("ensures that the model is present when is in limit range", function () {
          limitedList = uiLimitTo(list, 2, list[1]);
          expect(limitedList[limitedList.length - 1])
            .toEqual(jasmine.objectContaining({
              id: 2
            }));
        });


      });



      describe("and there's NO model's ", function(){
        beforeEach(function(){
          list        = [{id: 1}, {id: 2}, {id: 3}];
          limitedList = uiLimitTo(list, 2);
        });

        it('Limits the list by limitNumber', function () {
          expect(limitedList).toEqual(jasmine.any(Array));
          expect(limitedList.length).toEqual(2);
        });
      });


      describe("and there's no limitNumber defined", function(){
         it('Limits the list by DEFAULT limitNumber (1000)', function () {
          var list      = [],
            limitedList = [],
            i           = 0;

          while(i < 1200){
            list.push(i);
            i++;
          }

          limitedList = uiLimitTo(list);

          expect(limitedList).toEqual(jasmine.any(Array));
          expect(limitedList.length).toEqual(1000);
          expect(limitedList[limitedList.length - 1]).toEqual(999);
        });
      });





    });



  });

});
