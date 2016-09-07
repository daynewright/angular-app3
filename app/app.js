'use strict';

var app = angular.module('MusicApp', ['googlechart', 'ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'partials/intial-view.html',
    controller: 'MainCtrl'
  })
  .when('/chart', {
    templateUrl: 'partials/chart-view.html',
    controller: 'MainCtrl'
  })
  .when('/data', {
    templateUrl: 'partials/list-view.html',
    controller: 'ListCtrl'
  })
  .otherwise('/');
});
