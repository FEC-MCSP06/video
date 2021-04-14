const express = require('express')
const PORT = process.env.PORT || 3201
const pool = require('./db_connection.js')
const cors = require('cors')
// our server container
const app = express();

// middleware 
app.use(cors())
app.use(express.json())

//all videos
app.get('/allVideos',async(req,res)=>{
    const allVideos = await pool.query('SELECT * FROM videos')
    res.json(allVideos.rows)
})
// get one video
app.get('/specificVideo/:videoKey',async(req,res)=>{
    const videoKey = req.params.videoKey
    const specificVideo = await pool.query(`SELECT * FROM videos WHERE video_key = '${videoKey}'`)
    res.json(specificVideo.rows)
})

// causes our server to listen for incoming reuqests to this port
app.listen(PORT, ()=>{
    console.log(`LISTINING ON PORT ${PORT}`)
}); 