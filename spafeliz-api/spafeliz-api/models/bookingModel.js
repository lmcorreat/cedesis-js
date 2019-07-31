const Sequelize = require('sequelize');
const conn = require('../database/connection');

module.exports = conn.define('booking',{
  id:{type:Sequelize.SMALLINT, primaryKey:true},
  nombre_persona:Sequelize.STRING,
  id_servicio:Sequelize.INTEGER,
  fecha:Sequelize.DATE,
  email:Sequelize.STRING
})