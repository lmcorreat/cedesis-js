const bookingModel = require('../models/bookingModel');

exports.booking_register = function(req,res){
  console.log('recibe',req.body);

  let person = req.body;

  bookingModel.create({
    nombre_persona:person.nombre_persona,
    id_servicio:person.idServicio,fecha:person.fecha,email:person.email 
  })
  .then(data => {
    res.json(data);
  })
  .catch(err => {
    res.status(500).send('Error ');
  });
}