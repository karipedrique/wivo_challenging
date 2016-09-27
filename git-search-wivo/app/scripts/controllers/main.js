'use strict';

/**
 * @ngdoc function
 * @name gitSearchWivoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gitSearchWivoApp
 */
angular
.module('gitSearchWivoApp')
.controller('MainCtrl', function ($rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $rootScope.pageSize = 10;
  });
