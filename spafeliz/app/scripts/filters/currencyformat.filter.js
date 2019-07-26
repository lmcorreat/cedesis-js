'use strict';

/**
 * @ngdoc filter
 * @name spafelizApp.filter:currencyFormat.filter
 * @function
 * @description
 * # currencyFormat.filter
 * Filter in the spafelizApp.
 */
angular.module('spafelizApp')
  .filter('currencyFormat',  currencyFormatFilter);
  
  function currencyFormatFilter() {
    //recibe un input y devuelve ese parametro con algo más
    return function (input) {
      return 'COL.' + input.toLocaleString();
    };
  }
