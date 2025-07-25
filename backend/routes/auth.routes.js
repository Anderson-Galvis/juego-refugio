const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/auth.controller');

console.log("✅ Rutas de autenticación cargadas"); // <-- Agrega esta línea

router.post('/register', register);
router.post('/login', login);

module.exports = router;
