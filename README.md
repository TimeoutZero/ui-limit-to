# ui-limit-to
uiLimitTo is an extension of Angular's `limitTo` to ensures that the model is in the list.

### Common use cases
* [ui-select](https://github.com/angular-ui/ui-select)

===

### Install
* Using bower
```
bower install ui-limit-to --save
```

* Not using any package manager <br/>
Just copy the `builds/release/uiLimitTo.js` script to your project.

===

### Usage

#### Load
*  Load the script in your index.html

```html
  <script src="bower_components/uiLimitTo/builds/release/uiLimitTo.js"></script>
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
    repeat="item in list | filter: $select.search | uiLimitTo:100:myModel:'id' track by item.id">
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
  // -> [{ id: 1 }, { id: 3 }]
```
