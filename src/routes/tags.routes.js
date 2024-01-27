const { Router } = require('express')

const TagsController = require('../controllers/tags.controller')
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const Tagsroutes = Router()

const tagsController = new TagsController()

Tagsroutes.get("/", ensureAuthenticated,tagsController.index)

module.exports = Tagsroutes;
