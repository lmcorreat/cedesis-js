'use strict';

/**
 * @ngdoc function
 * @name spafelizApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spafelizApp
 */
angular.module('spafelizApp')
  .controller('MainCtrl', fnMainCtrl);

//se inyecta el scope, pero se quita porque no se debe hacer
//Se inyecta el spaServices
fnMainCtrl.$inject = ['spaServices','spaServicesHttp'];//'$scope'
    
function fnMainCtrl(spaServices,spaServicesHttp){// No pasar el scope -> $scope) {
    var viewModel = this;

    //Usar del ciclo de vida el onInit, metodo del ciclo de vida inicio
    viewModel.$onInit = onInit;
    viewModel.loadSpaServices = loadSpaServices;
    viewModel.loadSpaServicesHttp = loadSpaServicesHttp;
    viewModel.myNombre = 'Marcela';
  
    function onInit(){
      //viewModel.loadSpaServices();//factory
      viewModel.loadSpaServicesHttp();
    }

    function loadSpaServices(){
      viewModel.serviceList = spaServices.getAllServices();
      console.log(viewModel.serviceList);
    }

    function loadSpaServicesHttp(){
      console.log(' loadSpaServicesHttp init');
      spaServicesHttp.getAll()
        .then(function(result){
          viewModel.serviceList = result.data;
        }).catch(function(err){
          console.log(err);
        });
      console.log(' loadSpaServicesHttp end');
    }
}
