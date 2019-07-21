const Sequelize = require('Sequelize')

//const conn = new Sequelize('nameDatabase','user','pw',object {host, dialecto});
const conn = new Sequelize('utGHAUrUE5','utGHAUrUE5','FiSHieccTP',
  {
    host:'remotemysql.com',
    dialect:'mysql'
  });

//la conexión tiene un objeto  con un método authenticate
conn.authenticate()
.then(() =>{
  console.log('connection OK with database');
})
.catch((err) => {
  console.log('connection error with database',err);
})

module.exports = conn;