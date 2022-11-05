const express = require('express');
const {addProperty} = require('../Controller/propertyController')

const router = express.Router();

router.post('/addProperty', addProperty);

module.exports = {
    routes: router
}