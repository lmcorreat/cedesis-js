'use strict';

/**
 * @ngdoc service
 * @name spafelizApp.spaServices.service
 * @description
 * # spaServices.service
 * Service in the spafelizApp.
 */
angular.module('spafelizApp')
  .service('spaServicesHttp', fnSpaServiceHttp);

  fnSpaServiceHttp.$inject = ['$http','$q','httpConfig'];
  
  function fnSpaServiceHttp($http,$q,httpConfig) {
    let services= {
      getAll : getAllServicesHtpp,
      getById:getByIdServicesHttp
    }

    return services;

    function getAllServicesHtpp(){

      var defered = $q.defer();

      //la promesa se devuelve al final de la funcion
      var promise = defered.promise;
  
      //Para llegar al servicio
      const url = httpConfig.url + httpConfig.services.all;

      //ir al servidor web usando dependencia http, devuelve una promesa
      //$http.get(url,localhost);
      //const url = '//localhost:3000/services';

      $http.get(
        url  
      ).then(sucess)
      .catch(function (err){
        console.log(err);
        defered.reject();
      });

      function sucess(data){
        console.log(data);
        defered.resolve(data);
      }

      return promise;
    }

    function getByIdServicesHttp(id){

      var defered = $q.defer();

      //la promesa se devuelve al final de la funcion
      var promise = defered.promise;
  
      //Para llegar al servicio
      const url = httpConfig.url + httpConfig.services.all+"/"+id;

      //ir al servidor web usando dependencia http, devuelve una promesa
      //$http.get(url,localhost);
      //const url = '//localhost:3000/services';

      $http.get(
        url  
      ).then(sucess)
      .catch(function (err){
        console.log(err);
        defered.reject();
      });

      function sucess(data){
        console.log(data);
        defered.resolve(data);
      }

      return promise;
    }
  }
