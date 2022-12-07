const express = require("express");
const cors = require("cors");

// const config = require('./Config/config');

const propertyRoutes = require("./Routes/propertyRouter");
const userRoutes = require("./Routes/userRoute");
const testimonialRoutes = require("./Routes/testimonialRouter");
const detailsRoutes = require("./Routes/detailsRouter");

const app = express();

app.use(express.json());
app.use(cors());

const Port = process.env.PORT || 8080;

app.use("/api/property", propertyRoutes.routes);
app.use("/api/user", userRoutes.routes);
app.use("/api/testimonial", testimonialRoutes.routes);
app.use("/api/details", detailsRoutes.routes);

app.get("/", (req, res) => {
	res.json({ ApiStatus: "7Square realtors Api is Working" });
});

app.listen(8080, () => {
	console.log(`Server is Running on Port ${Port}`);
});
