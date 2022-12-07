const express = require("express");
const { addDetails, getDetails, updateDetails } = require("../Controller/detailsControler");

const router = express.Router();

router.post("/addDetails", addDetails);
router.get("/getDetails", getDetails);
router.put("/updateDetails", updateDetails);

module.exports = {
	routes: router,
};
