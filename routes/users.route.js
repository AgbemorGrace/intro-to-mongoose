const router =require("express").Router;
const{getUsers,
getUser,
createUser,
updateUser,
deleteUser} = require("../controllers/users.controllers");


const userRouter =router();
userRouter.route("/").get(getUsers).post(createUser);
userRouter.route("/:userId").get(getUser).patch(updateUser).delete(deleteUser);


module.exports =userRouter;