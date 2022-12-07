const db = require("../Config/DB_Config");

const detailsCollection = db.collection("details");

const addDetails = async (req, res) => {
	try {
		const data = req.body;
		await detailsCollection.doc("details").set(data);
		res.json({ message: "Details Sucessfuly added" });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

const getDetails = async (req, res) => {
	try {
		const data = await detailsCollection.doc("details").get();
		if (data.empty) {
			res.status(404).json({ message: "No Properties Found" });
		} else {
			res.json({ message: data.data() });
		}
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

const updateDetails = async (req, res) => {
	// debugger;
	try {
		console.log(req.body);
		const data = req.body;
		await detailsCollection.doc("details").update(data);
		res.json({ message: "Updated Sucessfully" });
	} catch (error) {
		// res.status(400).json({ message: error.message });
		res.json({ message: error.message });
	}
};

module.exports = {
	addDetails,
	getDetails,
	updateDetails,
};
