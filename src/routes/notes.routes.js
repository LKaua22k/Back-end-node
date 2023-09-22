const { Router } = require('express')

const NotesController = require('../controllers/notes.controller')

const notesController = new NotesController()

const notes = Router()

notes.post("/:user_id", notesController.create)

module.exports = notes;
