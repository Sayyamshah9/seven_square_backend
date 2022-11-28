const db = require("../Config/DB_Config");

const testCollection = db.collection("testimonials");

const addTestimonials = async (req, res) => {
	try {
		const data = req.body;
		await testCollection.add(data);
		res.json({ message: "Record added sucessfuly" });
	} catch (error) {
		res.status(400).json({ message: error.message });
		console.log(error);
	}
};

const getThreeTestimonials = async (req, res) => {
	try {
		const data = await testCollection.limit(3).get();
		let testList = [];
		if (data.empty) {
			res.status(404).json({ message: "No Properties Found" });
		} else {
			data.forEach((doc) => {
				const payload = doc.data();
				payload.id = doc.id;
				testList.push(payload);
			});
			// console.log(first);
			// console.log(testList);
			// testList = testList.sort(() => 0.5 - Math.random);
			// testList = testList.slice(0, 3);
			// console.log('second');
			// console.log(testList);
			res.json({ message: testList });
		}
	} catch (error) {
		res.status(400).json({ message: error.message });
		console.log(error);
	}
};

const getTestimonials = async (req, res) => {
	try {
		const data = await testCollection.get();
		let testList = [];
		if (data.empty) {
			res.status(404).json({ message: "No Properties Found" });
		} else {
			data.forEach((doc) => {
				const payload = doc.data();
				payload.id = doc.id;
				testList.push(payload);
			});
			res.json({ message: testList });
		}
	} catch (error) {
		res.status(400).json({ message: error.message });
		console.log(error);
	}
};

const deleteTestimonial = async (req, res) => {
	try {
		await testCollection.doc(req.query.id).delete();
		res.json({ message: "Record deleted succesfuly" });
	} catch (error) {
		res.status(400).json({ message: error.message });
		console.log(error);
	}
};

module.exports = {
	addTestimonials,
	getThreeTestimonials,
	getTestimonials,
	deleteTestimonial,
};
