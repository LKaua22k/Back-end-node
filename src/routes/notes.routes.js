const { Router } = require('express')

const NotesController = require('../controllers/notes.controller')

const notesController = new NotesController()

const notes = Router()

notes.post("/:user_id", notesController.create)
notes.get("/:id", notesController.show)
notes.delete("/:id", notesController.delete)

module.exports = notes;
