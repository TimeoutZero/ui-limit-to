# ui-limit-to
An implementation of Angular's `limitTo` filter for [ui-select](https://github.com/angular-ui/ui-select).

### Description
uiLimitTo is an extension of Angular's `limitTo` for ui-select. It ensures that the model is in the list.

### Install
* Using bower
```
bower install ui-limit-to --save
```


### Usage

#### Load
*  Load the script in your index.html

```html
  <script src="bower_components/uiLimitTo/builds/release/uiLimitTo/uiLimitTo.js"></script>
```
 * Load the module as dependence

```javascript
  angular.module('YourModule', ['uiLimitTo']);
```

#### Using in html
```html
<div ui-select ng-model  = "myModel">
  <div ui-select-match placeholder="'Select'">
    <span ng-bind="$select.selected.name"></span>
  </div>
  <div ui-select-choices 
    repeat="item.id as item in list | filter: $select.search | uiLimitTo:100:myModel:'id' track by item.id">
    <div ng-bind-html="item.name | highlight: $select.search"></div>
  </div>
</div>
```

#### Using in JS
```javascript
  var list   = [{ id: 1 }, { id: 2 }, { id: 3 }],
    maxLimit = 2,
    myModel  = { id: 3 }; 

  $filter('uiLimitTo')(list, maxLimit, myModel, 'id');
```
