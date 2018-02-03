angular
  .module('app', ['rosetta-angularjs'])
  .config(['rosettaProvider', function(rosettaProvider) {
    rosettaProvider.add('app', [Tippy]);
  }]);
