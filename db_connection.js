const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Mnbvcdfghj01",
    database: "notYoutube",
    host: "localhost",
    port: 5432
});

module.exports = pool;