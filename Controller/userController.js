const db = require('../Firebase/DB_Config');
const {collection, doc, setDoc, getDocs} = require('firebase/firestore');
const User = require('../Models/User');

const addUser = async (req, res) => {
    try {
        const data = req.body;
        await setDoc(doc(db, 'user', req.body.name), data);
        res.send("User Sucessfuly added");
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getUsers = async (req, res) => {
    try {
        const data = await getDocs(collection(db, 'user'));
        const userList = [];
        if(data.empty){
            res.status(404).send("No users present");
        } else {
            data.forEach((doc) => {
                const user = new User(
                    doc.data().name,
                    doc.data().phoneNo,
                    doc.data().address,
                    doc.data().intention
                )
                userList.push(user);
            })
            res.send(userList);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addUser,
    getUsers
}