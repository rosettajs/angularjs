import camelCase from 'camelcase';
import forOwn from 'lodash.forown';
import isPlainObject from 'lodash.isplainobject';

class RosettaAngularjs {
  constructor() {
    throw new TypeError('RosettaAngularjs cannot be instantiated.');
  }

  static add(mod, list) {
    const addItem = (item, name) => {
      name = camelCase(name || item.name);
      angular
        .module(mod)
        .directive(name, ($parse) => {
          'ngInject';
          return {
            link(scope, element, attrs) {
              const options = $parse(attrs[name + 'Options'])(scope);
              const instance = new item(element[0], options);
              const instanceRefName = attrs[name + 'Instance'];
              if (instanceRefName) {
                scope[instanceRefName] = instance;
              }
            },
          };
        });
    };

    if (isPlainObject(list)) {
      forOwn(list, addItem);
    }
    else if (Array.isArray(list)) {
      list.forEach(item => addItem(item));
    }
    else {
      throw new TypeError('RosettaAngularjs.add: invalid list parameter.');
    }
  }
}

export default RosettaAngularjs;
