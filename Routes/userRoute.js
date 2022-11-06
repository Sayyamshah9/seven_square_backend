const express = require('express');
const { addUser, getUsers } = require('../Controller/userController');

const router = express.Router();

router.post('/addUser', addUser);
router.get('/getUser', getUsers);

module.exports = {
    routes: router
}