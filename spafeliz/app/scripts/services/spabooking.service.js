'use strict';

/**
 * @ngdoc service
 * @name spafelizApp.spaBooking.service
 * @description
 * # spaBooking.service
 * Service in the spafelizApp.
 */
angular.module('spafelizApp')
  .service('spaBooking', fnSpaBooking);
  
fnSpaBooking.$inject = ['$http','$q','httpConfig'];
  
function fnSpaBooking($http,$q,httpConfig) {
  let services= {
    postSave : postSaveBooking
  }

    return services;

  function postSaveBooking(data){
    var defered = $q.defer();
    //la promesa se devuelve al final de la funcion
    var promise = defered.promise;

    //Para llegar al servicio
    const url = httpConfig.url + httpConfig.services.all+"/create";
    $http.post(
      url , data, 'contenttype'
    ).then(sucess)
    .catch(function (err){
      console.log(err);
      defered.reject();
    });

    function sucess(data){
      data.msg = 'Reservado exitosamente';
      defered.resolve(data);
    }

    return promise;
  }
}
