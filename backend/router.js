const express = require('express')
const { userIndex, userShow, userCreate, login, userUpdate, userSoftDelete } = require("./controllers/userController")
const router = express.Router()

router.get('/user', userIndex)
// router.get('/user/:uuid', userShow)
router.post('/user', userCreate)
// router.post('/login', login)
// router.patch('/user/:uuid', userUpdate)
// router.delete('/user/:uuid', userSoftDelete)

module.exports = router