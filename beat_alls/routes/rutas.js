const express= require('express')//se importa express
const router= express.Router();//se crea el router que va a gestionar rutas
const paginas = require('../controllers/paginasController.js');

router.get("/usuariosRegistrados", paginas.consultasUsuarios);

router.get("/registroUsuarios", paginas.registroUsuarios);

router.post("/registroUsuarios", paginas.altasUsuario);

router.get("/formularioActualizacion", paginas.formularioActualizacion);

router.post("/usuariosRegistrados/:id", paginas.actualizarUsuario);

router.get("/usuariosRegistrados/:id", paginas.eliminarUsuario);
/*Aquí terminan las rutas del CRUD usuarios*/

router.get("/login", paginas.login);

router.get("/productos", paginas.productos);

router.get("/usuarios", paginas.consultasUsuarios);

module.exports = router;