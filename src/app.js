// src/app.js
const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

// Configuración de CORS para permitir solo el acceso desde localhost
const corsOptions = {
  origin: 'localhost:3000', // Permite solo el acceso desde localhost
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Limitación de intentos de login para evitar fuerza bruta
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 5, // Máximo 5 intentos
  message: "Demasiados intentos de login. Por favor, intenta de nuevo más tarde."
});
app.use('/auth/login', loginLimiter);

// Rutas de autenticación
app.use('/auth', authRoutes);

module.exports = app;
