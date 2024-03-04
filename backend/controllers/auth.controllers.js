const db = require('../database/db');
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/generateToken');

const login = async (req, res) => {
    const {username, password} = req.body;
    const [[user]] = await db.query(`SELECT * FROM user WHERE username="${username}"`);
    if(!user) return res.status(404).send({message: 'Wrong username'});
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if(!isPasswordCorrect) return res.status(404).send({message: 'Wrong password'});
    const token = generateToken(username, user.user_id)
    res.cookie("token", token, {maxAge: 1000 * 60 * 60 * 24 * 15})
    res.status(200).send({username, id: user.user_id, ProfilePicture: user.profile_picture});
};

const logout = async (req, res) => {
    res.cookie("token", "", { maxAge: 0 });
	res.status(200).json({ message: "Logged out successfully" });
};

const register = async (req, res) => {
    const {username, password, gender} = req.body;
    const [[userExist]] = await db.query(`SELECT * FROM user WHERE username= "${username}"`);
    if(userExist) return res.status(400).send({message: 'User already exists'});

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);
    const profilePicture = gender==="MALE" ? `https://avatar.iran.liara.run/public/boy?username=${username}`:`https://avatar.iran.liara.run/public/girl?username=${username}`
    const [{affectedRows}] = await db.query(`INSERT INTO user(username, password, gender, profile_picture)
                                VALUES("${username}", "${passwordHash}", "${gender}", "${profilePicture}");`);

    const [[user]] = await db.query(`SELECT * FROM user WHERE username="${username}"`);
    const token = generateToken(username, user.user_id);
    res.cookie("token", token, {maxAge: 1000 * 60 * 60 * 24 * 15});
    res.status(201).send({username, id: user.user_id, ProfilePicture: user.profile_picture});
};


module.exports = {login, logout, register};