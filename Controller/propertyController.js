const db = require('../Firebase/DB_Config')
const {collection, addDoc} = require('firebase/firestore')

// const propCollection = ;
const addProperty = async (req, res) => {
    try {
        const data = req.body;
        await addDoc(collection(db, 'properties'), data);
        res.send('Record added sucessfuly');
    } catch (error) {
        res.status(400).send(error.message);
        console.log(error)
    }
}

module.exports = {
    addProperty
}