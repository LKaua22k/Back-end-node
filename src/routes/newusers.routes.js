const { Router } = require('express')
const multer = require('multer')
const UploadConfig = require("../config/upload")

const UserController = require('../controllers/user.controller')
const UserAvatarController = require('../controllers/userAvatarController')
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const userController = new UserController()
const userAvatarController = new UserAvatarController()
const upload = multer(UploadConfig.MULTER)

const newusers = Router()

newusers.post("/", userController.create)
newusers.put("/", ensureAuthenticated, userController.update)
newusers.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update)

module.exports = newusers;
