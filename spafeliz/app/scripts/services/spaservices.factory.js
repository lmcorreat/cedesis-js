'use strict';

/**
 * @ngdoc service
 * @name spafelizApp.spaServices.factory
 * @description
 * # spaServices.factory
 * Factory in the spafelizApp.
 */
//1.inicialmente agrega como una funcion anonima,por tanto se crea una funcion spaServices
//Fabrica: permite tener los datos, Compartir entre controladores
//permite tener funciones comune, solamente se instancia una vez
//siempre retorna algo
angular.module('spafelizApp')
  .factory('spaServices', spaServices);
  
//2. inyecta y se crea en el index, el agregar este script
spaServices.$inject = [];
  
  function spaServices() { //se elimina del nombre el punto, se toma como subdependencia
    //4.Se crea el arreglo que se va a devolver
    var dataServices = [
      {name:'Masaje sencillo', cost:'60.000',description:'30 min de un genial masaje',
      endHappy:false,image:'https://pur.vamtam.com/wp-content/uploads/2017/12/pic7.jpg',
      id:1
      },
      {name:'Exfoliación', cost:'120.000',description:'60 min de un excelente exfoliación',
      endHappy:false,image:'https://pur.vamtam.com/wp-content/uploads/2017/12/pic6.jpg',
      id:2
      },
      {name:'Masaje Full', cost:'220.000',description:'120 min de un insuperable masaje',
      endHappy:true,image:'https://pur.vamtam.com/wp-content/uploads/2017/12/pic6.jpg',
      id:3
      }
    ];

    //3. Se crea un services, metodos publicos que van a ser accedidos desde la fabrica
    var services = {
      //clave:valor -> llave como se identifica, y su funcion
      getAllServices : getAllServicesMethod,
      getServicesById : getServicesByIdMethod
    }

    return services;

    function getAllServicesMethod(){
      return dataServices;
    }

    function getServicesByIdMethod(id){
      for(var i=0;i<dataServices.length;i++){
        if(i==dataServices[i].id){
          dataServices[i];
        }
      }
    }
  }
//Evitar el uso del scope, por Rendimiento a largo plazo, se sobrecarga el scope
//this, es el acceso al contexto, evitar asignar al this, porque se puede ver afectado
//si se crean funciones extrañas

//Controller as permite estar usando el scope