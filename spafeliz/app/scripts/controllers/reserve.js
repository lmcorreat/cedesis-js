'use strict';

/**
 * @ngdoc function
 * @name spafelizApp.controller:ReserveCtrl
 * @description
 * # ReserveCtrl
 * Controller of the spafelizApp
 */
angular.module('spafelizApp')
  .controller('ReserveCtrl', fnReserveCtrl);

//se inyecta el scope, pero se quita porque no se debe hacer
//Se inyecta el serviceDetail
fnReserveCtrl.$inject = ['serviceDetail'];//'$scope'
    
function fnReserveCtrl(serviceDetail,$stateParams){// No pasar el scope -> $scope) {
    var ctx = this;
    console.log($stateParams);

    //Usar del ciclo de vida el onInit, metodo del ciclo de vida inicio
    ctx.$onInit = onInit;
    ctx.loadserviceDetail = loadserviceDetail;
    ctx.reserve = reserve;
    ctx.user = 'Fist';
    ctx.msgOk = 'Reservado Exitosamente!';
    ctx.showMsg = false;
  
    function onInit(){
      ctx.loadserviceDetail();
    }

    function loadserviceDetail(){
      ctx.serviceListDetail = serviceDetail.getDetail();
      console.log(ctx.serviceListDetail);
    }

    function reserve(){
      setTimeout(ctx.showMsg = !ctx.showMsg, 2000);
      //ctx.showMsg = !ctx.showMsg;
    }
}
