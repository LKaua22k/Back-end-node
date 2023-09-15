const Myconnection = require('../../sqlite')

const createusers = require('./createusers')

async function  myMigration(){
    const schemas = [
        createusers
    ].join("")

    Myconnection().then(db => db.exec(schemas)).catch(error => console.log(error))
}

module.exports = myMigration