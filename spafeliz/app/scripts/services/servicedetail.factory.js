'use strict';

/**
 * @ngdoc service
 * @name spafelizApp.serviceDetail.factory
 * @description
 * # serviceDetail.factory
 * Factory in the spafelizApp.
 */
angular.module('spafelizApp')
  .factory('serviceDetail',serviceDetail);

serviceDetail.$inject = ['spaServicesHttp'];

function serviceDetail(spaServicesHttp) {
  var dataDetail = [
    {name:'Masaje sencillo', cost:'60.000',description:'30 min de un genial masaje',
    endHappy:false,descuento:'3000'},
    {name:'Exfoliación', cost:'120.000',description:'60 min de un excelente masaje',
    endHappy:false,descuento:'4000'
    },
    {name:'Masaje Full', cost:'220.000',description:'120 min de un insuperable masaje',
    endHappy:true,descuento:'5000'
    }
  ];

  var services = {
    //clave:valor -> llave como se identifica, y su funcion
    getDetail : getDetailMethod,
    getByIdService : getByIdMethod
  }

  return services;

  function getDetailMethod(){
    return dataDetail;
  }

  function getByIdMethod(){
    spaServicesHttp.getById();
  }
}
