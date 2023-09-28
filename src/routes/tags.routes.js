const { Router } = require('express')

const TagsController = require('../controllers/tags.controller')

const Tagsroutes = Router()

const tagsController = new TagsController()

Tagsroutes.get("/:user_id", tagsController.index)

module.exports = Tagsroutes;
