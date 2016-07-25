(function(){
  'use strict';

  angular
    .module('uiLimitTo.filters')
    .filter('uiLimitTo', uiLimitToFilterProvider);


  /**
   *
   *
   * @param {Provider} $filter
   * @returns {Function}
   */
  function uiLimitToFilterProvider($filter){
    return uiLimitTo;


    /**
     * @description main uiLimitTo's function. It ensures that the model is in the list.
     *
     * @param {Array|ArrayLike|String|Number} input resource which will be limited.
     *
     * @param {Number} limitNumber
     * The length of the returned array or string.
     * If the limit number is positive, limit number of items from the beginning of the source array/string are copied.
     * If the number is negative, limit number of items from the end of the source array/string are copied.
     * The limit will be trimmed if it exceeds array.length. If limit is undefined, the input will be returned unchanged.
     *
     * @param {Object|String|Number} model resource which will be searched in list.
     *
     * @param {String} modelProperty specifies the property to be compared when search the model in the list.
     *
     * @param {Number} begin Index at which to begin limitation.
     * As a negative index, begin indicates an offset from the end of input.
     *
     * @param {Object} options Additional options {
        comparator: function(item) {
          return model === item;
        }
      }
     *
     * @returns {Array|ArrayLike|String|Number} The same type of input argument.
     */
    function uiLimitTo(input, limitNumber, model, modelProperty, begin, options){

      /**
       * defaults
       */
      limitNumber    = limitNumber   || 1000;
      options        = options       || {};
      modelProperty  = modelProperty || null;

      /**
       * Local variables
       */
      var foundModel   = null;
      var limitedInput = null;
      var comparator   = options.comparator;

      var
        inputIsArray        = Array.isArray(input),
        inputIsNumber       = !inputIsArray && typeof input === 'number',
        inputIsFloatFloat   = !inputIsArray && inputIsNumber && input % 1 === 0;

      if(!comparator){
        comparator = modelProperty ? compareByModelProperty : compareByModel;
      }

      if(!inputIsArray){
        input = input.toString().split('');
      }

      limitedInput = $filter('limitTo')(input, limitNumber, begin);

      if(model){
        for (var i = 0; i < limitedInput.length; i++) {
          var element = limitedInput[i];
          if(comparator(element)){
            foundModel = element;
            break;
          }
        }
      }

      if(!foundModel && model){
        pushModelToLastPosition();
      }

      if(!inputIsArray){
        limitedInput = limitedInput.join('');
        if(inputIsNumber){
          restoreInputAsNumber();
        }
      }

      return limitedInput;

      function compareByModelProperty(item) {
        return  model[modelProperty] === item[modelProperty];
      }

      function compareByModel(item) {
        return model === item;
      }

      function restoreInputAsNumber(){
        if(inputIsFloatFloat){
          limitedInput = parseFloat(limitedInput);
        } else {
          limitedInput = parseInt(limitedInput, 10);
        }
      }

      function pushModelToLastPosition() {
        limitedInput.splice(limitedInput.length - 1, 1, model);
      }

    }

  }

})();