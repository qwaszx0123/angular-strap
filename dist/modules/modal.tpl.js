/**
 * angular-strap
 * @version v2.3.12 - 2021-01-06
 * @link http://mgcrea.github.io/angular-strap
 * @author Olivier Louvignes <olivier@mg-crea.com> (https://github.com/mgcrea)
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
'use strict';

angular.module('mgcrea.ngStrap.modal').run([ '$templateCache', function($templateCache) {
  $templateCache.put('modal/modal.tpl.html', '<div class="modal" tabindex="0" role="dialog" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header" ng-show="title"><button type="button" role="button" class="close" aria-label="Close" ng-click="$hide()"><span aria-hidden="true">&times;</span></button><h1 class="modal-title" ng-bind="title"></h1></div><div class="modal-body" ng-bind="content"></div><div class="modal-footer"><button type="button" class="btn btn-default" ng-click="$hide()" aria-label="Close">Close</button></div></div></div></div>');
} ]);