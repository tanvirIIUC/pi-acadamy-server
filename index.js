const express = require('express')
const app = express()
const port = 5000;
const cors = require('cors');

app.use(cors());

const topics= require('./data/topics.json');

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
app.get('/topics', (req, res) => {
    res.send(topics);
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })