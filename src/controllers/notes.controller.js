const knex = require("../database/knex")

class NotesController {
    async create(req,res){
        const {title, description, links } = req.body
        const {user_id} = req.params

        const note_id = await knex("notes").insert({
            title,
            description,
            user_id
        })

        const linkInsert = links.map( link => {
            return{
                note_id,
                url: link
            }
        })

        await knex('links').insert(linkInsert);
        

         res.json();
    }

    async show(req,res){
        const { id } = req.params

        const note = await knex("notes").where({id}).first()
        const tags = await knex("tags").where({note_id: id}).orderBy('name')
        const links = await knex("links").where({note_id: id}).orderBy('created_at')

        return res.json(
            note,
            tags,
            links
        )
    }

    async delete(req,res){
        const { id } =  req.params

        await knex("notes").where({id}).delete();

        console.log(`Id: ${id} deletado`)

        return res.json()
    }

    // async index(req,res){
    //     const { user_id }= req.query

    //     const nota = await knex("notes").where({user_id}).whereLike("title", `%title%`).orderBy("title")
        

    //     return res.json(nota)
    // }
}

module.exports = NotesController