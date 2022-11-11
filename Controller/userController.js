const db = require('../Config/DB_Config');

const userCollection = db.collection('user')
const addUser = async (req, res) => {
    try {
        const data = req.body;
        await userCollection.add(data);
        res.json({'message' : "User Sucessfuly added"});
    } catch (error) {
        res.status(400).json({'message' : error.message});
    }
}

const getUsers = async (req, res) => {
    try {
        const data = await userCollection.get();
        const userList = [];
        if(data.empty){
            res.status(404).json({'message' : "No users present"});
        } else {
            data.forEach((doc) => {
                userList.push(doc.data());
            })
            res.json({'message' : userList});
        }
    } catch (error) {
        res.status(400).json({'message' : error.message});
    }
}

module.exports = {
    addUser,
    getUsers
}