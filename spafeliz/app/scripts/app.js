'use strict';

/**
 * @ngdoc overview
 * @name spafelizApp
 * @description
 * # spafelizApp
 *
 * Main module of the application.
 */
angular
  .module('spafelizApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ]);/*.config(function ($routeProvider) {
  //Este viene por defecto con angular, No se usa este sino ui-router 
    /*$routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });* /
  });*/
