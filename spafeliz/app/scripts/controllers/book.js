'use strict';

/**
 * @ngdoc function
 * @name spafelizApp.controller:BookCtrl
 * @description
 * # BookCtrl
 * Controller of the spafelizApp
 */
angular.module('spafelizApp')
  .controller('BookCtrl', fnBookCtrl);

fnBookCtrl.$inject = ['spaServicesHttp'];

function fnBookCtrl(spaServicesHttp) {
  var ctx = this;  
  ctx.form = {};
  ctx.submitBook = submitBook;
  ctx.$onInit = onInit;
  ctx.loadSpaServicesHttp = loadSpaServicesHttp;

  //ctx.form.service_selected

  function onInit(){
    console.log('inicio');
    ctx.loadSpaServicesHttp();
  }

  function submitBook(){
    console.log('hola',ctx.form);
  }

  function loadSpaServicesHttp(){
    spaServicesHttp.getAll()
    .then(function(result){
      ctx.serviceList = result.data;
    })
    .catch(function(err){
      console.log(err);
    });
  }
}
