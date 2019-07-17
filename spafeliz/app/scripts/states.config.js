'use strict';

angular.module('spafelizApp').config(settings);

settings.$inject = ['$stateProvider'];//inyeccion de depedencia

function settings($stateProvider){
  var mainState = {
    name:'main',
    url:'/',
    template:'views/main.html'
  }

  var aboutState = {
    name:'about',
    url:'/about',
    template:'views/about.html'
  }

  $stateProvider.state(mainState);
  $stateProvider.state(aboutState);
}