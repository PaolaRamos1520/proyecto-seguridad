
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Sincroniza el modelo con la base de datos
sequelize.sync()
  .then(() => console.log('La base de datos y el modelo de usuario están sincronizados'))
  .catch((error) => console.error('Error al sincronizar la base de datos:', error));

module.exports = { User, sequelize };
