const express = require('express');
const {addProperty, getProperty} = require('../Controller/propertyController')

const router = express.Router();

router.post('/addProperty', addProperty);
router.get('/getProperty', getProperty)

module.exports = {
    routes: router
}