'use strict';

angular.module('mgcrea.ngStrap.combobox', ['mgcrea.ngStrap.core', 'mgcrea.ngStrap.helpers.parseOptions'])

  .provider('$combobox', function () {
    var defaults = this.defaults = {
      animation: 'am-fade',
      prefixClass: 'typeahead',
      prefixEvent: '$typeahead',
      placement: 'bottom-left',
      templateUrl: 'typeahead/typeahead.tpl.html',
      comboboxTemplateUrl: 'combobox/combobox.tpl.html',
      trigger: 'focus',
      container: false,
      keyboard: true,
      html: false,
      delay: 0,
      minLength: 1,
      filter: 'bsAsyncFilter',
      limit: 6,
      autoSelect: false,
      comparator: '',
      trimValue: true
    };

    var eventAttrs = [
      'onBeforeShow',
      'onShow',
      'onBeforeHide',
      'onHide',
      'onSelect'
    ];

    this.$get = function ($window, $rootScope, $bsCompiler, $$rAF, $timeout) {

      function ComboboxFactory(element, controller, config) {

        var $combobox = {};

        // Common vars
        var options = angular.extend({}, defaults, config);
        // var promise = $combobox.$promise = $bsCompiler.compile(options);
        var scope = $combobox.$scope = options.scope;

        // Store $id to identify the triggering element in events
        // give priority to options.id, otherwise, try to use
        // element id if defined
        scope.id = $combobox.$id = options.id || element.attr('id') || '';
        scope.$isExpanded = false;

        scope.$on(options.prefixEvent + '.show', function (tooltip) {
          scope.$isExpanded = true;
        });

        scope.$on(options.prefixEvent + '.hide', function (tooltip) {
          scope.$isExpanded = false;
        });

        $combobox.init = function () {

        };

        return $combobox;
      }

      ComboboxFactory.defaults = defaults;
      ComboboxFactory.eventAttrs = eventAttrs;

      return ComboboxFactory;
    };
  })

  .directive('bsCombobox', function ($window, $parse, $q, $combobox, $parseOptions) {

    var defaults = $combobox.defaults;

    var attrsToCheck = [
      'template',
      'templateUrl',
      'controller',
      'controllerAs',
      'placement',
      'container',
      'delay',
      'trigger',
      'keyboard',
      'html',
      'animation',
      'filter',
      'limit',
      'minLength',
      'watchOptions',
      'selectMode',
      'autoSelect',
      'comparator',
      'id',
      'prefixEvent',
      'prefixClass'
    ];

    var attrsToMove = [
      'ngModel',
      'bsOptions',
      'ariaHaspopup',
      'ariaLabelledby'
    ];

    function postLink(scope, element, attr, controller) {
      // Directive options
      var options = {
        scope: scope
      };

      angular.forEach(attrsToCheck, function (key) {
        if (angular.isDefined(attr[key])) {
          options[key] = attr[key];
        }
      });

      // use string regex match boolean attr falsy values, leave truthy values be
      var falseValueRegExp = /^(false|0|)$/i;
      angular.forEach(['html', 'container', 'trimValue', 'filter'], function (key) {
        if (angular.isDefined(attr[key]) && falseValueRegExp.test(attr[key])) options[key] = false;
      });

      // bind functions from the attrs to the show, hide and select events
      angular.forEach($combobox.eventAttrs, function (key) {
        var bsKey = 'bs' + key.charAt(0).toUpperCase() + key.slice(1);
        if (angular.isDefined(attr[bsKey])) {
          options[key] = scope.$eval(attr[bsKey]);
        }
      });

      // Initialize combobox
      var combobox = $combobox(element, controller, options);
    }

    function toKebabCase(key) {
      return key.replace(/([A-Z])/g, function ($1) {
        return '-' + $1.toLowerCase();
      });
    }

    return {
      restrict: 'EAC',
      require: 'ngModel',
      templateUrl: $combobox.defaults.comboboxTemplateUrl,
      scope: true,
      compile: function (tElement, tAttrs) {
        var input = null;
        if (tElement && tElement.length > 0 && tElement[0]) {
          input = tElement[0].getElementsByTagName('input');

          if (input && input.length > 0) {
            input = angular.element(input[0]);
          }
        }


        if (input) {
          angular.forEach(attrsToCheck, function (key) {
            if (angular.isDefined(tAttrs[key]) && key === 'id') {
              input.attr('id', tAttrs[key] + '_input');
              input.attr('container', '#' + tAttrs[key] + '_wrapper');
            } else if (angular.isDefined(tAttrs[key])) {
              input.attr(toKebabCase(key), tAttrs[key]);
            }
          });

          angular.forEach(attrsToMove, function (key) {
            if (angular.isDefined(tAttrs[key])) {
              input.attr(toKebabCase(key), tAttrs[key]);
              tElement.removeAttr(toKebabCase(key));
            }
          });

          angular.forEach($combobox.eventAttrs, function (key) {
            var bsKey = 'bs' + key.charAt(0).toUpperCase() + key.slice(1);
            if (angular.isDefined(tAttrs[bsKey])) {
              input.attr(toKebabCase(bsKey), tAttrs[bsKey]);
              tElement.removeAttr(toKebabCase(bsKey));
            }
          });
        }

        return postLink;
      }
    };
  });
