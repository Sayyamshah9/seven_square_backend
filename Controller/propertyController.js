const db = require('../Firebase/DB_Config')
const {collection, setDoc, doc, getDocs, deleteDoc,updateDoc } = require('firebase/firestore');
const Property = require('../Models/Property');
const res = require('express/lib/response');

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

const getProperties = async (req, res) => {
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
        res.status(400).send(error.message);
        console.log(error)
    }
}

const getProperty = async (req, res) => {
    try {
        const data = await getDocs(doc(db, 'properties', req.params.id));
        if(data.empty) {
            res.status(404).send("No Properties Found");
        } else {
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
            );
            res.send(property);
        }
    } catch (error) {
        res.status(400).send(error.message);
        console.log(error)
    }
}

const updateProperty = async (req, res) => {
    try {
        const data = req.body;
        console.log(req.params.id);
        console.log(req.body);
        await updateDoc(doc(db, 'properties', req.params.id), data);
        res.send("Record updated Sucessfuly")
    } catch (error) {
        res.status(400).send(error.message);
        console.log(error)
    }
}

const deleteProperty = async (req, res) => {
    try {
        const data = req.body;
        await deleteDoc(doc(db, 'properties', req.params.id));
        res.send("Record deleted succesfuly");
    } catch (error) {
        res.status(400).send(error.message);
        console.log(error)
    }
}

module.exports = {
    addProperty,
    getProperties,
    getProperty,
    updateProperty,
    deleteProperty
}