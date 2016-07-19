'use strict';

angular
  .module('uiLimitTo.filters')
  .filter('uiLimitTo', uiLimitToFilterProvider);

function uiLimitToFilterProvider($filter){
  return function (list, limitNumber, model, modelProperty, begin, options){
    limitNumber   = limitNumber   || 2;
    options       = options       || {};
    modelProperty = modelProperty || null;

    var limitedList = $filter('limitTo')(list, limitNumber, begin);

    var foundModel = limitedList.find(function(item){
      return modelProperty ? model[modelProperty] === item[modelProperty] : model === item;
    });

    if(!foundModel){
      limitedList.push(model);
    }

    return limitedList;

  };
}