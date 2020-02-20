const express = require('express');
const router = express.Router();
const { 
    index,
    add,
    buscar
    } = require('../controller/petController');

router.get('/', index);
router.get('/add/:nome', add);
router.get('/buscar/:nome', buscar)

module.exports = router;