// Create memory to hold viewer's places in videos?
const Joi = require("joi")
const express = require('express')
const cors = require("cors")
const app = express()
require("dotenv").config()

app.use(cors())

const vids = require(process.env.VIDLIST)
// const videos = JSON.parse(JSON.stringify(vids))
const videos = JSON.parse(JSON.stringify(vids))

const PORT = process.env.PORT 

app.listen(PORT, () => PORT != undefined ? console.log(`Listening on pizzort ${PORT}`) : console.log("Please set a port"))

app.use(express.json())

app.get('/', (req, res) => {
  res.send(videos[1].name)
})

app.get('/api/videos', (req, res) => {
  res.send(videos)
})

app.get('/api/videos/:id', (req, res) => {
  const video = videos.find(v => v.id === parseInt(req.params.id))
  if (!video) return res.status(404).send("Couldn't find it, bruh.")
})

app.post("/api/videos", (req, res) => {
  const { error } = validateVideo(req.body)

  if(error) return res.status(400).send(error.details[0].message)

  const newVideos = {
    id : videos.length + 1,
    name : req.body.name,
    url : req.body.url,
    description : req.body.description
  }

  videos.push(newVideos)
  res.send(newVideos)
  console.log(newVideos)
})

app.put('/api/videos/:id', (req, res) => {
  const video = videos.find(v => v.id === parseInt(req.params.id))
  if (!video)  return res.status(404).send("Couldn't find it, bruh.")

  const { error } = validateVideo(req.body)

  if(error) return res.status(400).send(error.details[0].message)

  video.name = req.body.name
  res.send(video)
})

app.delete('/api/videos/:id', (req,res) => {
  const video = videos.find(v => v.id === parseInt(req.params.id))
  if (!video)  return res.status(404).send("Couldn't find it, bruh.")

  const vidIndex = videos.indexOf(video);
  videos.splice(vidIndex, 1)

  res.send(video)
})

function validateVideo(video) {
  const joiSchema = {
    name: Joi.string().min(5).required(),
    url: Joi.string().required(),
    description: Joi.string()
  }

  return Joi.validate(video, joiSchema)
}
