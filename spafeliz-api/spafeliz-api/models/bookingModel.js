const Sequelize = require('sequelize');
const conn = require('../database/connection');

module.exports = conn.define('booking',
{
  id: { type: Sequelize.SMALLINT, primaryKey: true, autoIncrement: true },
  nombre_persona: Sequelize.STRING,
  id_servicio: Sequelize.SMALLINT,
  fecha: Sequelize.DATE,
  email: Sequelize.STRING
}, {
  timestamps: false,
  freezeTableName: true,
  tableName: 'booking'
}
)