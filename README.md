# Rosetta-Angularjs

This project codenamed Rosetta aims to define a basic API for JavaScript libraries and to abstract
the implementation of modern framework components. In other words, you could load any JavaScript
library implementing the API and use it as a component in Angular.js, React, etc. without requiring
any extra plugin other than the Rosetta proxy. The concept is currently in very early development
stage. Feedback and any other type of help is appreciated.

## Rosetta-Angularjs example

```javascript
angular.module('app', []);
RosettaAngularjs.add('app', [{Swiper}, {Tooltip}]);
```

Then in your templates you can use the libraries as Angular.js directives:

```html
<div
  class="swiper-container"
  swiper
  swiper-on-slide-change="$ctrl.onSlideChange()"
  swiper-options="{autoplay: true}">
  ...
</div>

<button
  class="btn"
  ng-click="$ctrl.tooltip.hide()"
  title="Click me"
  tooltip
  tooltip-instance="$ctrl.tooltip"
  tooltip-options="{placement: 'top'}">
  ...
</button>
```
