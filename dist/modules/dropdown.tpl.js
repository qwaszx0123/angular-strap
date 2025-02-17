/**
 * angular-strap
 * @version v2.3.12 - 2021-01-06
 * @link http://mgcrea.github.io/angular-strap
 * @author Olivier Louvignes <olivier@mg-crea.com> (https://github.com/mgcrea)
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
'use strict';

angular.module('mgcrea.ngStrap.dropdown').run([ '$templateCache', function($templateCache) {
  $templateCache.put('dropdown/dropdown.tpl.html', '<ul tabindex="-1" class="dropdown-menu" role="menu" aria-activedescendant="" ng-show="content && content.length"><li role="none" ng-class="{divider: item.divider, active: item.active}" ng-repeat="item in content track by $index"><a id="{{$index}}_menuItem_{{$id}}" role="menuitem" tabindex="-1" ng-href="{{item.href}}" ng-if="!item.divider && item.href" target="{{item.target || \'\'}}" ng-bind="item.text"></a> <a id="{{$index}}_menuItem_{{$id}}" role="menuitem" tabindex="-1" href="javascript:void(0)" ng-if="!item.divider && item.click" ng-click="$eval(item.click);$hide()" ng-bind="item.text"></a></li></ul>');
} ]);