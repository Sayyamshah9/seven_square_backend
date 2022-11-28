const db = require("../Config/DB_Config");

const propCollection = db.collection("properties");
const addProperty = async (req, res) => {
	try {
		const data = req.body;
		await propCollection.add(data);
		res.json({ message: "Record added sucessfuly" });
	} catch (error) {
		res.status(400).json({ message: error.message });
		console.log(error);
	}
};

const getProperties = async (req, res) => {
	try {
		const data = await propCollection.get();
		const propList = [];
		if (data.empty) {
			res.status(404).json({ message: "No Properties Found" });
		} else {
			data.forEach((doc) => {
				const payload = doc.data();
				payload.id = doc.id;
				propList.push(payload);
			});
			res.json({ message: propList });
		}
	} catch (error) {
		res.status(400).json({ message: error.message });
		console.log(error);
	}
};

const getPlpProperties = async (req, res) => {
	try {
		const data = await propCollection.where("display", "==", true).where("feature", "==", false).get();
		const propList = [];
		if (data.empty) {
			res.status(404).json({ message: "No Properties Found" });
		} else {
			data.forEach((doc) => {
				const payload = doc.data();
				payload.id = doc.id;
				propList.push(payload);
			});
			res.json({ message: propList });
		}
	} catch (error) {
		res.status(400).json({ message: error.message });
		console.log(error);
	}
};

const getFeaProp = async (req, res) => {
	try {
		const data = await propCollection.where("feature", "==", true).get();
		const propList = [];
		if (data.empty) {
			res.status(404).json({ message: "No Properties Found" });
		} else {
			data.forEach((doc) => {
				const payload = doc.data();
				payload.id = doc.id;
				propList.push(payload);
			});
			res.json({ message: propList });
		}
	} catch (error) {
		res.status(400).json({ message: error.message });
		console.log(error);
	}
};

const getProperty = async (req, res) => {
	try {
		const data = await propCollection.doc(req.query.id).get();
		const propList = [];
		if (data.empty) {
			res.status(404).json({ message: "No Properties Found" });
		} else {
			res.json({ message: data.data() });
		}
	} catch (error) {
		res.status(400).json({ message: error.message });
		console.log(error);
	}
};

const getPropertiesByType = async (req, res) => {
	try {
		var data = [];
		if (req.query.propertyActionType == "All") {
			data = await propCollection.where("type", "==", req.query.type).get();
		} else {
			data = await propCollection.where("propertyActionType", "==", req.query.propertyActionType).where("type", "==", req.query.type).get();
		}
		const propList = [];
		if (data.empty) {
			res.status(404).json({ message: "No Properties Found" });
		} else {
			data.forEach((doc) => {
				const payload = doc.data();
				payload.id = doc.id;
				propList.push(payload);
			});
			res.json({ message: propList });
		}
	} catch (error) {
		res.status(400).json({ message: error.message });
		console.log(error);
	}
};

const updateProperty = async (req, res) => {
	try {
		const data = req.body;
		console.log(data);
		await propCollection.doc(req.query.id).update(data);
		res.json({ message: "Record updated Sucessfuly" });
	} catch (error) {
		res.status(400).json({ message: error.message });
		console.log(error);
	}
};

const deleteProperty = async (req, res) => {
	try {
		await propCollection.doc(req.query.id).delete();
		res.json({ message: "Record deleted succesfuly" });
	} catch (error) {
		res.status(400).json({ message: error.message });
		console.log(error);
	}
};

module.exports = {
	addProperty,
	getProperties,
	getProperty,
	getPlpProperties,
	getFeaProp,
	getPropertiesByType,
	updateProperty,
	deleteProperty,
};
