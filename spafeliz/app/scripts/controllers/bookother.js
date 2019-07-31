'use strict';

/**
 * @ngdoc function
 * @name spafelizApp.controller:BookotherCtrl
 * @description
 * # BookotherCtrl
 * Controller of the spafelizApp
 */
angular.module('spafelizApp')
  .controller('BookotherCtrl', bookotherCtrl);  

bookotherCtrl.$inject = ['spaServicesHttp','spaBooking','$stateParams'];
  
function bookotherCtrl(spaServicesHttp,spaBooking,$stateParams) {
  var ctx = this;  
  ctx.form = {};
  ctx.submitBookOther = submitBookOther;
  ctx.loadSpaServicesHttp = loadSpaServicesHttp;

  ctx.$onInit = onInit;
  ctx.saveBookHttp = saveBookHttp;

  function onInit(){
    ctx.loadSpaServicesHttp();
  }
  
  function submitBookOther(){
    ctx.saveBookHttp();
  }

 function loadSpaServicesHttp(){
    return spaServicesHttp.getAll()
    .then(function(result){
      ctx.serviceList = result.data;
      ctx.form.service_selected = $stateParams.id;
    })
    .catch(function(err){
      console.log(err);
    });
  }

  function saveBookHttp(){
    let data = {
      nombre_persona:ctx.form.name,
      idServicio:ctx.form.service_selected, 
      email:ctx.form.email,
      fecha:ctx.form.fecha
    }

    spaBooking.postSave(data)
      .then(function(result){
        //console.log(result.data);
      })
      .catch(function(err){
        console.log(err);
      });
  }
}
