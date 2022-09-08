exports. getUsers = (req,res) => {
    res.status(200).send("Get All users");
}

exports.getUser = (req,res) => {
    res.status(200).send("Get a single  user");
}

exports.createUser = (req,res) => {
    res.status(200).send("Create a new user");
}
exports.updateUser = (req,res) => {
    res.status(200).send("Update user info");
}

exports.deleteUser = (req,res) => {
    res.status(200).send("Delete user");
}