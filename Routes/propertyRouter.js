const { Router } = require('express');
const express = require('express');
const {addProperty, getProperty, deleteProperty, updateProperty, getProperties, getPropertiesByType} = require('../Controller/propertyController')

const router = express.Router();

router.post('/addProperty', addProperty);
router.get('/getProperties', getProperties)
router.get('/getProperty', getProperty)
router.get('/getPropertiesByType', getPropertiesByType)
router.put('/updateProperty', updateProperty)
router.delete('/deleteProperty', deleteProperty)

module.exports = {
    routes: router
}