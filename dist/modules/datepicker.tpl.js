/**
 * angular-strap
 * @version v2.3.12 - 2019-05-17
 * @link http://mgcrea.github.io/angular-strap
 * @author Olivier Louvignes <olivier@mg-crea.com> (https://github.com/mgcrea)
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
'use strict';

angular.module('mgcrea.ngStrap.datepicker').run([ '$templateCache', function($templateCache) {
  $templateCache.put('datepicker/datepicker.tpl.html', '<div ng-attr-id="{{dropdownId || undefined}}" class="dropdown-menu datepicker" ng-class="\'datepicker-mode-\' + $mode" style="max-width: 320px" aria-hidden="false" aria-controls="date" ng-focus-out="$onFocusOut($event)"><table ng-attr-aria-activedescendant="{{selectedDayId || undefined}}" role="grid" style="table-layout: fixed; height: 100%; width: 100%" ng-attr-tabindex="{{focusOnOpen ? \'0\' : \'-1\'"><thead role="presentation"><tr class="text-center" role="row"><th scope="col" role="columnheader"><button tabindex="0" ng-attr-tabindex="{{focusOnOpen ? \'0\' : \'-1\'}}" type="button" class="btn btn-default pull-left" ng-click="$selectPane(-1)" ng-blur="$blurred($event)" ng-attr-aria-label="{{$previousLabel || undefined}}" ng-attr-title="{{$previousLabel || undefined}}"><i class="{{$iconLeft}}"></i></button></th><th colspan="{{ rows[0].length - 2 }}"><button tabindex="0" ng-attr-tabindex="{{focusOnOpen ? \'0\' : \'-1\'}}" type="button" class="btn btn-default btn-block text-strong" ng-click="$toggleMode()" ng-blur="$blurred($event)" ng-attr-title="{{$modeLabel || undefined }}"><strong style="text-transform: capitalize" ng-bind="title"></strong></button></th><th scope="col" role="columnheader"><button tabindex="0" ng-attr-tabindex="{{focusOnOpen ? \'0\' : \'-1\'}}" type="button" class="btn btn-default pull-right" ng-click="$selectPane(+1)" ng-blur="$blurred($event)" ng-attr-aria-label="{{$nextLabel || undefined}}" ng-attr-title="{{$nextLabel || undefined}}"><i class="{{$iconRight}}"></i></button></th></tr><tr ng-if="showLabels" ng-bind-html="labels"></tr></thead><tbody role="presentation"><tr ng-attr-id="{{id || undefined}}_row_{{i}}" role="row" ng-repeat="(i, row) in rows" height="{{ 100 / rows.length }}%"><td ng-attr-id="{{el.id || undefined}}" role="gridcell" class="text-center" ng-class="{ \'disabled\': el.disabled }" ng-repeat="(j, el) in row" ng-attr-headers="{{id || undefined}}_row_{{i}}" aria-selected="{{el.selected}}" ng-attr-aria-label="{{el.screenReaderLabel || undefined}}" ng-attr-title="{{el.screenReaderLabel || undefined}}" tabindex="{{focusOnOpen && (el.selected || (!selectedDayId && el.isToday) || (selectedDayId == el.id && el.isToday) || (el.isNext && !selected)) ? \'0\' : \'-1\'}}" focus-element="keyboard && focusOnOpen && el.focused" data-value="{{el.value}}" ng-disabled="el.disabled" ng-focus="$focused(el)" ng-click="$select(el.date, el.disabled)" ng-keydown="$onKeyDown($event, el)"><span class="btn btn-default" ng-class="{\'btn-primary\': el.selected, \'btn-info btn-today\': el.isToday && !el.selected}"><span ng-class="{\'text-muted\': el.muted || el.disabled}" ng-bind="el.label"></span></span></td></tr></tbody><tfoot role="presentation"><tr role="row"><td colspan="{{ rows[0].length }}"><div class="btn-group btn-group-justified" role="group"><div class="btn-group" role="group" ng-if="$hasToday"><button type="button" class="btn btn-default today" ng-click="$setToday()" ng-disabled="isTodayDisabled" ng-attr-tabindex="{{focusOnOpen ? \'0\' : \'-1\'}}"><strong style="text-transform: capitalize">Today</strong></button></div><div class="btn-group" role="group" ng-if="$hasClear"><button type="button" class="btn btn-default clear" ng-click="$clear()" ng-attr-tabindex="{{focusOnOpen ? \'0\' : \'-1\'}}"><strong style="text-transform: capitalize">Clear</strong></button></div></div></td></tr></tfoot></table></div>');
} ]);