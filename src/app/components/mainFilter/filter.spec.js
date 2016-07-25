


describe("ui-limit-to's", function () {

  describe('main filter', function () {
    var uiLimitTo = null;

    beforeEach(module('uiLimitTo.filters'));
    beforeEach(inject(function (_uiLimitToFilter_) {
      uiLimitTo = _uiLimitToFilter_;
    }));


    describe("when there's an list as input", function () {
      var input        = null;
      var limitedInput = null;

      describe("and it's using an property to identify a model", function () {

        beforeEach(function(){
          input        = [{id: 1}, {id: 2}, {id: 3}];
          limitedInput = uiLimitTo(input, 2, {id: 3}, 'id');
        });

        it('Limits the input by limitNumber', function () {
          expect(limitedInput).toEqual(jasmine.any(Array));
          expect(limitedInput.length).toEqual(2);
        });

        it("Removes item at model's position and ensures that the model is present", function () {
          expect(limitedInput[limitedInput.length - 1])
            .toEqual(jasmine.objectContaining({
              id: 3
            }));
        });


      });


      describe("and it's NOT using an property to identify a model", function () {
        beforeEach(function(){
          input        = [{id: 1}, {id: 2}, {id: 3}];
          limitedInput = uiLimitTo(input, 2, input[2]);
        });

        it('Limits the input by limitNumber', function () {
          expect(limitedInput).toEqual(jasmine.any(Array));
          expect(limitedInput.length).toEqual(2);
        });

        it("Removes item at model's position and ensures that the model is present when is NOT in limit range", function () {
          expect(limitedInput[limitedInput.length - 1])
            .toEqual(jasmine.objectContaining({
              id: 3
            }));
        });

        it("ensures that the model is present when is in limit range", function () {
          limitedInput = uiLimitTo(input, 2, input[1]);
          expect(limitedInput[limitedInput.length - 1])
            .toEqual(jasmine.objectContaining({
              id: 2
            }));
        });


      });



      describe("and there's NO model ", function(){
        beforeEach(function(){
          input       = [{id: 1}, {id: 2}, {id: 3}];
          limitedInput = uiLimitTo(input, 2);
        });

        it('Limits the input by limitNumber', function () {
          expect(limitedInput).toEqual(jasmine.any(Array));
          expect(limitedInput.length).toEqual(2);
        });
      });


      describe("and there's no limitNumber defined", function(){
         it('Limits the input by DEFAULT limitNumber (1000)', function () {
          var list      = [],
            limitedInput = [],
            i           = 0;

          while(i < 1200){
            list.push(i);
            i++;
          }

          limitedInput = uiLimitTo(list);

          expect(limitedInput).toEqual(jasmine.any(Array));
          expect(limitedInput.length).toEqual(1000);
          expect(limitedInput[limitedInput.length - 1]).toEqual(999);
        });
      });


      describe("with options", function() {
        describe("and there's an external comparator", function() {
          var externalOptions = null;

          beforeEach(function(){
            input           = [{id: 1}, {id: 2}, {id: 3}];
            externalOptions = {
              comparator: function(item){
                return item.id === 1;
              }
            };
            spyOn(externalOptions, 'comparator').and.callThrough();
            limitedInput = uiLimitTo(input, 2, {id: 3}, 'id', 0, externalOptions);

          });


          it("Calls the external comparator", function () {
            expect(externalOptions.comparator).toHaveBeenCalled();
          });

        });

      });






    });


    describe("when there's an string as input", function () {
      var input        = null;
      var limitedInput = null;

      describe("and there's a model", function () {
        var model = null;

        beforeEach(function(){
          input        = '123';
          model        = '3';
          limitedInput = uiLimitTo(input, 2, model);
        });

        it('Limits the input by limitNumber', function () {
          expect(limitedInput).toEqual(jasmine.any(String));
          expect(limitedInput.toString().length).toEqual(2);
          expect(limitedInput).toEqual('13');
        });


        it("ensures that the model is present when it's NOT in limit range", function () {
          expect(limitedInput[limitedInput.length - 1]).toEqual(model);
        });

        it("ensures that the model is present when it's in limit range", function () {
          limitedInput = uiLimitTo(input, 3, model);
          expect(limitedInput[limitedInput.length - 1]).toEqual(model);
        });


      });

      describe("and there's NO model", function(){
        beforeEach(function(){
          input       = '123';
          limitedInput = uiLimitTo(input, 2);
        });

        it('Limits the input by limitNumber', function () {
          expect(limitedInput).toEqual(jasmine.any(String));
          expect(limitedInput.length).toEqual(2);
        });
      });


      describe("and there's no limitNumber defined", function(){
         it('Limits the input by DEFAULT limitNumber (1000)', function () {
          var inputAsString = '',
            limitedInput    = null,
            i               = 0,
            wildcard        = "#";

          while(i < 1200){
            if(i === 999){
              inputAsString += wildcard;
            } else {
              inputAsString += '_';
            }
            i++;
          }

          limitedInput = uiLimitTo(inputAsString);

          expect(limitedInput).toEqual(jasmine.any(String));
          expect(limitedInput.length).toEqual(1000);
          expect(limitedInput[limitedInput.length - 1]).toEqual(wildcard);
        });
      });


      describe("with options", function() {
        describe("and there's an external comparator", function() {
          var externalOptions = null,
            model             = null;

          beforeEach(function(){
            input           = '123';
            model           = '3';
            externalOptions = {
              comparator: function(item){
                return item === '3';
              }
            };
            spyOn(externalOptions, 'comparator').and.callThrough();
            limitedInput = uiLimitTo(input, 2, model, null, 0, externalOptions);

          });


          it("Calls the external comparator", function () {
            expect(externalOptions.comparator).toHaveBeenCalled();
          });

        });

      });






    });

    describe("when there's an number as input", function () {
      var input        = null;
      var limitedInput = null;

      describe("and there's a model", function () {
        var model = null;

        beforeEach(function(){
          input        = 123;
          model        = 3;
          limitedInput = uiLimitTo(input, 2, model);

        });

        it('Limits the input by limitNumber', function () {
          expect(limitedInput).toEqual(jasmine.any(Number));
          expect(limitedInput.toString().length).toEqual(2);
          expect(limitedInput).toEqual(13);
        });


        it("ensures that the model is present when it's NOT in limit range", function () {
          limitedInput = limitedInput.toString();
          expect(limitedInput[limitedInput.length - 1]).toEqual(model.toString());
        });

        it("ensures that the model is present when it's in limit range", function () {
          limitedInput = uiLimitTo(input, 3, model).toString();
          expect(limitedInput[limitedInput.length - 1]).toEqual(model.toString());
        });


      });

      describe("and there's NO model", function(){
        beforeEach(function(){
          input       = 123;
          limitedInput = uiLimitTo(input, 2);
        });

        it('Limits the input by limitNumber', function () {
          expect(limitedInput).toEqual(jasmine.any(Number));
          expect(limitedInput.toString().length).toEqual(2);
        });
      });


      describe("and there's no limitNumber defined", function(){
         it('Do NOT Limits the input by DEFAULT limitNumber (1000) when the number is Infinity', function () {
          var inputAsString = '',
            inputAsNumber   = 0,
            limitedInput    = null,
            i               = 0,
            wildcard        = '8';

          while(i < 1200){
            if(i === 999){
              inputAsString += wildcard;
            } else {
              inputAsString += '1';
            }
            i++;
          }

          inputAsNumber = parseInt(inputAsString, 10);
          limitedInput  = uiLimitTo(inputAsNumber);

          expect(limitedInput).toEqual(NaN);
        });
      });


      describe("with options", function() {
        describe("and there's an external comparator", function() {
          var externalOptions = null,
            model             = null;

          beforeEach(function(){
            input           = 123;
            model           = 3;
            externalOptions = {
              comparator: function(item){
                return item === 3;
              }
            };
            spyOn(externalOptions, 'comparator').and.callThrough();
            limitedInput = uiLimitTo(input, 2, model, null, 0, externalOptions);

          });


          it("Calls the external comparator", function () {
            expect(externalOptions.comparator).toHaveBeenCalled();
          });

        });

      });






    });



  });

});
