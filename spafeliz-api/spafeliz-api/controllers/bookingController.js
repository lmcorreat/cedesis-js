const bookingModel = require('../models/bookingModel');

exports.booking_register = function(req,res){
  console.log('recibe',req.params);

  /*bookingModel.create({
    nombre_persona:'lolo',id_servicio:12,fecha:'01/12/010',email:'prueba@gmail.com' 
  },{ fields: [ 'id','nombre_persona','id_servicio','fecha','email' ]})
  .then(data => {
    res.json(data);
    //por defecto devuelve el code estatus 200 - ok
  })
  .catch(err => {
    res.status(500).send('Error ');
  });*/
}