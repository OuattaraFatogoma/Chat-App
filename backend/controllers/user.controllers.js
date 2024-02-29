const db = require('../database/db')

const getAllUsers = async (req, res) => {
    const [users] = await db.query("SELECT * FROM user");
    res.status(200).send(users);
};

const getUser = async (req, res) => {
    const {id: userId} = req.params;
    const [[user]] = await db.query(`SELECT user_id, username, gender, profile_picture as profilePicture FROM user WHERE user_id=${userId}`);
    if(!user) return res.status(404).send({message: 'User not found whith id: '+userId});
    res.status(200).send(user);
};

const deleteUser = async (req, res) => {
    const trustUserId = req.userId;
    const {id: userId} = req.params;
    if(trustUserId != userId) return res.status(401).json({ message: "Unauthorized Action" });
    const [{affectedRows}] = await db.query(`DELETE FROM user WHERE user_id=${userId}`);
    if(affectedRows === 0) return res.status(404).send({message: 'User not found whith id: '+userId});
    res.status(200).send({message: 'User deleted successfully'});
};

module.exports = {getAllUsers, getUser, deleteUser};