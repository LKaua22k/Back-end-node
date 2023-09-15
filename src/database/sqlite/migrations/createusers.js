const CreateUsers = `
CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR,
    email VARCHAR,
    password VARCHAR,
    avatar NULL,
    created_att TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_att TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
`

module.exports = CreateUsers