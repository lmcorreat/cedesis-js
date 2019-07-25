const serviceModel = require('../models/servicesModel');

//indica que las funciones van a ser publicas, para cuando hagan el require del controller
//se pueden acceder a las funciones
exports.services_all_get = function(req,res){
  //res.send(' devuelve todos los servicios del spa');
  
  //especifica los atributos a obtener de la consulta
  //sino se le indican los atributos, se trae todo
  //esto devuelve una promesa
  serviceModel.findAll({
    attributes:['id','name','description','happy','image','cost']  
  })
  .then(data => {
    res.json(data);
    //por defecto devuelve el code estatus 200 - ok
  })
  .catch(err => {
    res.status(500).send('Error ');
  });
}

//express, dispone del request, response
exports.services_detail_get = function(req,res){
  console.log(req);
  let id = Number(req.params.id);

  serviceModel.findByPk(id,{
    attributes:['id','name','description','image','happy','cost']  
  })
  .then(data => {
    res.json(data);
    //por defecto devuelve el code estatus 200 - ok
  })
  .catch(err => {
    res.status(500).send('Error query');
  });

  /*serviceModel.findAll({
    attributes:['id','name','description','image','happy','cost'],
    where:{id:id} 
  })
  .then(data => {
    res.json(data);
    //por defecto devuelve el code estatus 200 - ok
  })
  .catch(err => {
    res.status(500).send('Error query');
  });*/
}