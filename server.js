
const app = require('./src/app');
const { sequelize } = require('./src/models/userModel');
const PORT = process.env.PORT || 3000;
const HOST = 'localhost'; 

// Verifica la conexión a la base de datos y luego inicia el servidor
sequelize.authenticate()
  .then(() => {
    console.log('Conectado a la base de datos SQLite');
    app.listen(PORT, HOST, () => {
      console.log(`Servidor ejecutándose en http://${HOST}:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error de conexión a la base de datos:', error);
  });

