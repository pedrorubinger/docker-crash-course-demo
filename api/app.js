const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  const data = [
    { id: "1", title: "Book Review: The Bear & The Nightingale" },
    { id: "2", title: "Game Review: Pokemon Brilliant Diamond" },
    { id: "3", title: "Show Review: Alice in Borderland!" },
  ]

  res.json(data)
})

app.listen(4000, () => {
  console.log("Server is running at localhost on port 4000")
})
