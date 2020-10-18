const express = require('express');
const Sport_C = require('../Controllers/Sport-Controller')
const router = express.Router();

router.post('/register', Sport_C.create)
router.patch('/update', Sport_C.update)
router.get('/getAll', Sport_C.getAll)

/** Obtiene la cantidad de paginas, segun la cantidad de deportes, y por la cantidad de deportes por paginas**/
router.get('/getMaxPages', Sport_C.getMaxPages)

/**
 *  page: numero de pagina actual.
 *  order: tipo de orden, ASC o DESC.
 *  by: por columna, EJ: nombre,isActive,equipos(cantidad),deportistas(cantidad)
 */
router.get('/:page/:order/:by', Sport_C.getByPage)

router.get('/:id', Sport_C.getByID)

module.exports = router
