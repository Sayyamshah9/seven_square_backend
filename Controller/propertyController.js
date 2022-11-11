const db = require('../Config/DB_Config')

const propCollection = db.collection('properties')
const addProperty = async (req, res) => {
    try {
        const data = req.body;
        propCollection.doc(data.title).set(data);
        res.json({'message' : 'Record added sucessfuly'});
    } catch (error) {
        res.status(400).json({'message' : error.message});
        console.log(error)
    }
}

const getProperties = async (req, res) => {
    try {
        const data = await propCollection.get()
        const propList = [];
        if(data.empty) {
            res.status(404).json({'message' : 'No Properties Found'});
        } else {
            data.forEach((doc) => {
                propList.push(doc.data())
            })
            res.json({'message' : propList});
        }
    } catch (error) {
        res.status(400).json({'message' : error.message});
        console.log(error)
    }
}

const getProperty = async (req, res) => {
    try {
        const data = await propCollection.where('title', '==', req.query.title).get();
        const propList = [];
        if(doc.empty) {
            res.status(404).json({'message' : 'No Properties Found'});
        } else {
            data.forEach((doc) => {
                propList.push(doc.data());
            })
            res.json({'message' : propList,
             'docId' : doc.id,
            });
        }
    } catch (error) {
        res.status(400).json({'message' : error.message});
        console.log(error)
    }
}

const getPropertiesByType = async(req, res) => {
    try {
        const data = await propCollection.where('propertyActionType', '==', req.query.propertyActionType)
        .where('type', '==', req.query.type).get()
        const propList = [];
        if(data.empty) {
            res.status(404).json({'message' : 'No Properties Found'});
        } else {
            data.forEach((doc) => {
                propList.push(doc.data());
            })
            res.json({'message' : propList});
        }
    } catch (error) {
        res.status(400).json({'message' : error.message});
        console.log(error)
    }
}

const updateProperty = async (req, res) => {
    try {
        const data = req.body;
        await propCollection.doc(req.query.id).update(data);
        res.json({'message' : 'Record updated Sucessfuly'})
    } catch (error) {
        res.status(400).json({'message' : error.message});
        console.log(error)
    }
}

const deleteProperty = async (req, res) => {
    try {
        const data = await propCollection.where('title', '==', req.query.title).get();
        const idList = []
        if(data.empty){
            res.status(404).json({'message' : 'No Properties Found'});
        } else {
            data.forEach((doc) => {
                idList.push(doc.id)
            })
            await propCollection.doc(idList[0]).delete();
            res.json({'message' : 'Record deleted succesfuly'});
        }
        
    } catch (error) {
        res.status(400).json({'message' : error.message});
        console.log(error)
    }
}

module.exports = {
    addProperty,
    getProperties,
    getProperty,
    getPropertiesByType,
    updateProperty,
    deleteProperty
}