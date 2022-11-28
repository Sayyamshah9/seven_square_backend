const express = require("express");
const { addProperty, getProperty, deleteProperty, updateProperty, getProperties, getPropertiesByType, getPlpProperties, getFeaProp } = require("../Controller/propertyController");

const router = express.Router();

router.post("/addProperty", addProperty);
router.get("/getProperties", getProperties);
router.get("/getPlpProperties", getPlpProperties);
router.get("/getFeatureProperties", getFeaProp);
router.get("/getProperty", getProperty);
router.get("/getPropertiesByType", getPropertiesByType);
router.put("/updateProperty", updateProperty);
router.delete("/deleteProperty", deleteProperty);

module.exports = {
	routes: router,
};
