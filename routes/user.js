const express = require("express")
const {handleGetAllUsers,handleGetUsersById,
    handleUpdateUserById,handleDeleteUserById,handleCreateUser} = require("../controllers/user")
const router = express.Router()

//  REST API CODE STARTED 

// The slash is refer as /user from the index.js file using the middle wares
router.get("/",handleGetAllUsers)

router.route("/:id")
.get(handleGetUsersById)
.patch(handleUpdateUserById)
.delete( handleDeleteUserById)

router.post("/", handleCreateUser)

module.exports = router;