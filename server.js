const express = require('express')
const PORT = process.env.PORT || 3201
const pool = require('./db_connection.js')
const cors = require('cors')
// our server container
const app = express();

// middleware 
app.use(cors())
app.use(express.json())



// causes our server to listen for incoming reuqests to this port
app.listen(PORT, ()=>{
    console.log(`LISTINING ON PORT ${PORT}`)
}); 