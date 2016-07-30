# ui-limit-to
uiLimitTo is an alternative of Angular's [`limitTo`](https://docs.angularjs.org/api/ng/filter/limitTo) to ensures that the model is in the input resource.

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
<div ui-select ng-model="myModel">
  <div ui-select-match placeholder="'Select'">
    <span ng-bind="$select.selected.name"></span>
  </div>
  <div ui-select-choices
    repeat=" item in list | filter: $select.search | uiLimitTo:100:myModel:'id' track by item.id ">
    <div ng-bind-html="item.name | highlight: $select.search"></div>
  </div>
</div>
```

#### Using in JS
```javascript
  var list    = [{ id: 1 }, { id: 2 }, { id: 3 }],
    maxLimit  = 2,
    myModel   = { id: 3 },
    compareBy = 'id'; 

  $filter('uiLimitTo')(list, maxLimit, myModel, compareBy);
  // -> [{ id: 1 }, { id: 3 }]
```

===

### API 
#### Arguments
|Param|Type|Details|
|---|---|---|
input| `Array|ArrayLike|String|Number` | resource which will be limited.
limitNumber | `Number` | The length of the returned array or string. If the limit number is positive, limit number of items from the beginning of the source array/string are copied. If the number is negative, limit number of items from the end of the source array/string are copied. The limit will be trimmed if it exceeds array.length. If limit is undefined, the input will be returned unchanged.
model | `Object|String|Number`| resource which will be searched in list.
modelProperty | `String` | specifies the property to be compared when search the model in the list.
begin | `Number` | Index at which to begin limitation. As a negative index, begin indicates an offset from the end of input.
options | `Object` | Additional options like `options.comparator`

#### returns
`{Array|ArrayLike|String|Number}` The same type of input argument.
