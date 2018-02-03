class RosettaAngularjs {}

angular
  .module('rosetta-angularjs', [])
  .provider('rosetta', function() {
    const map = {};

    this.add = (module, value) => {
      map[module] = map[module] ? map[module].push(value) : [value];
      console.log('rosettaProvider.add', value, map);
    };

    this.$get = () => new RosettaAngularjs;
  });
