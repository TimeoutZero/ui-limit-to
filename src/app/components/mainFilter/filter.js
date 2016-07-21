(function(){
  'use strict';

  angular
    .module('uiLimitTo.filters')
    .filter('uiLimitTo', uiLimitToFilterProvider);

  function uiLimitToFilterProvider($filter){
    return uiLimitTo;

    function uiLimitTo(list, limitNumber, model, modelProperty, begin, options){

      /**
       * defaults
       */
      limitNumber    = limitNumber   || 1000;
      options        = options       || {};
      modelProperty  = modelProperty || null;

      /**
       * Local variables
       */
      var foundModel  = null;
      var limitedList = null;
      var comparator  = options.comparator;

      if(!comparator){
        comparator = modelProperty ? compareByModelProperty : compareByModel;
      }

      limitedList = $filter('limitTo')(list, limitNumber, begin);

      if(model){
        for (var i = 0; i < limitedList.length; i++) {
          var element = limitedList[i];
          if(comparator(element)){
            foundModel = element;
            break;
          }
        }
      }

      if(!foundModel && model){
        limitedList.splice(limitedList.length - 1, 1, model);
      }

      return limitedList;

      function compareByModelProperty(item) {
        return  model[modelProperty] === item[modelProperty];
      }

      function compareByModel(item) {
        return model === item;
      }

    }

  }

})();