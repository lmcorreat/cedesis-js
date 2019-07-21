const Sequelize = require('sequelize');
const conn = require('../database/connection');

//los campos no necesitan estar definidos en el mismo orden
//no es necesario colocar el autoincrementado, porque lo controla la bd
module.exports = conn.define('services',{
  id:{type:Sequelize.SMALLINT, primaryKey:true},
  name:Sequelize.STRING,
  description:Sequelize.STRING,
  cost:Sequelize.DOUBLE,
  happy:Sequelize.BOOLEAN,
  image:Sequelize.STRING
})