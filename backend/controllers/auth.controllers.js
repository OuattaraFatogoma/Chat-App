
const login = async (req, res) => {
    res.send('Login')
};

const logout = async (req, res) => {
    res.send('Logout')
};

const register = async (req, res) => {
    res.send('register')
};


module.exports = {login, logout, register};