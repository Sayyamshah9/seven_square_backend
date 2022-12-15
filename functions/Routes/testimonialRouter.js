const express = require("express");
const { addTestimonials, getThreeTestimonials, deleteTestimonial, getTestimonials } = require("../Controller/testimonials");

const router = express.Router();

router.post("/addTestimonial", addTestimonials);
router.get("/getThreeTestimonials", getThreeTestimonials);
router.get("/getTestimonials", getTestimonials);
router.delete("/deleteTestimonial", deleteTestimonial);

module.exports = {
	routes: router,
};
