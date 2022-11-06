const express = require('express');
const {addProperty, getProperty, deleteProperty, updateProperty, getProperties} = require('../Controller/propertyController')

const router = express.Router();

router.post('/addProperty', addProperty);
router.get('/getProperties', getProperties)
router.get('/getProperty', getProperty)
router.put('/updateProperty/:id', updateProperty)
router.delete('/deleteProperty/:id', deleteProperty)

module.exports = {
    routes: router
}