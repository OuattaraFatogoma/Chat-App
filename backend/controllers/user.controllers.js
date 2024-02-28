

const getAllUsers = async (req, res) => {
    res.send('All Users');
};

const getUser = async (req, res) => {
    res.send('A Single User');
};

const updateUser = async (req, res) => {
    res.send('Update User');
};

const deleteUser = async (req, res) => {
    res.send('delete User');
};

module.exports = {getAllUsers, getUser, updateUser, deleteUser};