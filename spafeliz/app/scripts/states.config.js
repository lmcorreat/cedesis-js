'use strict';

angular.module('spafelizApp').config(settings);

settings.$inject = ['$stateProvider'];//inyeccion de depedencia

function settings($stateProvider){
  
  //
  
  var homeState = {
    //Se define un abstract
    abstract:true,
    name:'home',
    templateUrl:'views/home.html'
  }

  var mainState = {
    name:'home.main',
    url:'/',
    templateUrl:'views/main.html',
    controller:'MainCtrl as viewModel'
  }

  var aboutState = {
    name:'home.about',//se deben cambiar las referencias tambien
    url:'/about',
    templateUrl:'views/about.html'
  }

  var reserveState = {
    name:'home.reserve',//se deben cambiar las referencias tambien
    url:'/reserve/:foo?bar',
    templateUrl:'views/reserve.html',
    controller:'ReserveCtrl as rsvCtrl'
  }

  //matricular los estados
  $stateProvider.state(homeState);
  $stateProvider.state(mainState);
  $stateProvider.state(aboutState);
  $stateProvider.state(reserveState);
}