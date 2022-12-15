const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const propertyRoutes = require("./Routes/propertyRouter");
const userRoutes = require("./Routes/userRoute");
const testimonialRoutes = require("./Routes/testimonialRouter");
const detailsRoutes = require("./Routes/detailsRouter");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/property", propertyRoutes.routes);
app.use("/api/user", userRoutes.routes);
app.use("/api/testimonial", testimonialRoutes.routes);
app.use("/api/details", detailsRoutes.routes);

app.get("/", (req, res) => {
	res.json({ ApiStatus: "7Square realtors Api is Working" });
});

exports.app = functions.region("asia-south1").https.onRequest(app);

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
