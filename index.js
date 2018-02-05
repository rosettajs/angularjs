import camelCase from 'camelcase';

class RosettaAngularjs {
  static add(mod, list) {
    if (!Array.isArray(list)) {
      list = [list];
    }
    list.forEach(item => {
      Object.keys(item).forEach(name => {
        const constructor = item[name];
        name = camelCase(name);
        angular
          .module(mod)
          .directive(name, ($parse) => {
            'ngInject';
            return {
              link(scope, element, attrs) {
                const options = $parse(attrs[name + 'Options'])(scope);
                const instance = new constructor(element[0], options);
                const instanceRefName = attrs[name + 'Instance'];
                if (instanceRefName) {
                  scope[instanceRefName] = instance;
                }
              },
            };
          });
      });
    });
  };
}

export default RosettaAngularjs;
