const knex = require("../database/knex")

class NotesController {
    async create(req,res){
        const {title, description, tags, links } = req.body
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
        

        const TagsInsert = tags.map(name => {
            return{
                name,
                note_id,
                user_id
            }
        })

        await knex('tags').insert(TagsInsert)

        return res.json({"message": "criado"});
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

    async index(req,res){
        const { title,user_id,tags }= req.query

        let nota;

        if(tags){
            const filteredTags = tags.split(",").map(tags => tags)

            nota = await knex('tags').select(["notes.id","notes.title","notes.user_id"]).where('notes.user_id', user_id).whereLike('notes.title', `%${title}%`).whereIn('name', filteredTags).innerJoin('notes' , 'notes.id', 'tags.note_id')

        }else{
            nota = await knex("notes").where({user_id}).whereLike("title", `%${title}%`).orderBy("title")
        }
        

        const noteTags = await knex('tags').where({user_id})
        const notesAndTags = nota.map(note => {
            const userTags = noteTags.filter(tag => tag.user_id === note.id)

            return{
                nota,
                tags: userTags
            }
        })

        return res.json(notesAndTags)
    }
}

module.exports = NotesController