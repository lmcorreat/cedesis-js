'use strict';

/**
 * @ngdoc directive
 * @name spafelizApp.directive:footerSection.directive
 * @description
 * # footerSection.directive
 */
angular.module('spafelizApp')
  .directive('footerSection', footerSectionDir);
  
  function footerSectionDir() {
    let directive = {
      // template: '<div>  <ng-transclude></ng-transclude> </div>',
      // template: '<div></div>',
      templateUrl: './views/partial.footer.html',
      restrict: 'E',//si la directiva va a ser invocada con E u otro
                    //no es recomendada como clase, porque se confunde con el style
                    //A atributo <div footer-section></div> 
                    //C clase EAC <div class="footer-section">
                    //E element <footer-section>
      link: fnLink 
      //,transclude : true

    };

    return directive;

    function fnLink(scope, element, attrs) {
      //element arbol de atributos html
      //scope sin el $ es el virtual
      // element.text('this is the footerSection.directive directive');

      //pasar parametros 
      scope.team = attrs.author;
    }
  }
