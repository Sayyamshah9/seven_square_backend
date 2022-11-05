const db = require('../Firebase/DB_Config')
const {collection, setDoc, doc, getDocs} = require('firebase/firestore');
const Property = require('../Models/Property');

// const propCollection = ;
const addProperty = async (req, res) => {
    try {
        const data = req.body;
        console.log(req.body.title);
        await setDoc(doc(db, 'properties', req.body.title), data);
        res.send('Record added sucessfuly');
    } catch (error) {
        res.status(400).send(error.message);
        console.log(error)
    }
}

const getProperty = async (req, res) => {
    try {
        const data = await getDocs(collection(db, 'properties'))
        const propList = [];
        if(data.empty) {
            res.status(404).send("No Properties Found");
        } else {
            data.forEach((doc) => {
                const property = new Property(
                    doc.data().title,
                    doc.data().price,
                    doc.data().description,
                    doc.data().address,
                    doc.data().propertyActionType,
                    doc.data().livingArea,
                    doc.data().furnished,
                    doc.data().bedrooms,
                    doc.data().ytLink?doc.data().ytLink:null,
                )
                propList.push(property);
            })
            res.send(propList);
        }
    } catch (error) {
        
    }
}

module.exports = {
    addProperty,
    getProperty
}