const express = require("express");
const { addUser, getUsers, getUser } = require("../Controller/userController");

const router = express.Router();

router.post("/addUser", addUser);
router.get("/getUser", getUsers);
router.get("/getSingleUser", getUser);

module.exports = {
	routes: router,
};
