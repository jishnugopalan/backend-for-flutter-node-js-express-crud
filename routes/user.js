var express = require('express')
routes = express.Router()
var userController=require("../controller/user")

routes.post('/register',userController.addUser)
routes.post('/login',userController.login)

module.exports = routes