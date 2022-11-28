const express = require("express");
const { addTestimonials, getTestimonials, deleteTestimonial } = require("../Controller/testimonials");

const router = express.Router();

router.post("/addTestimonial", addTestimonials);
router.get("/getTestimonials", getTestimonials);
router.delete("/deleteTestimonial", deleteTestimonial);

module.exports = {
	routes: router,
};
