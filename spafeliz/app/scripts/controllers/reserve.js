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
fnReserveCtrl.$inject = ['serviceDetail','$stateParams','spaServicesHttp'];//'$scope'
    
function fnReserveCtrl(serviceDetail,$stateParams,spaServicesHttp){// No pasar el scope -> $scope) {
    var ctx = this;
    console.log('ingreso',$stateParams);

    //Usar del ciclo de vida el onInit, metodo del ciclo de vida inicio
    ctx.$onInit = onInit;
    ctx.loadserviceDetail = loadserviceDetail;
    ctx.loadserviceDetailById = loadserviceDetailById;
    ctx.reserve = reserve;
    ctx.user = 'Fist';
    ctx.msgOk = 'Gracias por tu interés!';
    ctx.showMsg = false;
  
    function onInit(){
      // ctx.loadserviceDetail();
      ctx.loadserviceDetailById();
    }

    function loadserviceDetail(){
      ctx.serviceListDetail = serviceDetail.getDetail();
    }

    function loadserviceDetailById(){
      spaServicesHttp.getById($stateParams.id)
        .then(function(result){
          ctx.servicio = result.data;
        }).catch(function(err){
          console.log(err);
        });
    }

    function reserve(){
      setTimeout(ctx.showMsg = !ctx.showMsg, 2000);
      //ctx.showMsg = !ctx.showMsg;
    }
}
