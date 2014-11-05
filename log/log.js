'use strict';

angular.module('naposMobileWebApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/log-warn', {
        templateUrl: 'app/log/log-warn.html',
        controller: 'LogWarnCtrl'
      });
  });

