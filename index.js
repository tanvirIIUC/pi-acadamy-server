const express = require('express')
const app = express()
const port = 5000;
const cors = require('cors');

app.use(cors());

const topics= require('./data/topics.json');
const topicsDetails = require('./data/topicDetails.json');


app.get('/', (req, res) => {
    res.send('Hello World!')
  })
app.get('/topics', (req, res) => {
    res.send(topics);
  })

app.get('/course/:id', (req, res) => {

    const  id = req.params.id;
    const all_course = topicsDetails.filter(n => n.category_id === id);
    res.send(all_course );
  })


/* app.get('/news', (req, res) => {
    res.send(topicsDetails);
   
  }) */
/* app.get('/topicView/:id', (req, res) => {
     const id = req.params.id;
    console.log(req.params.id);
  }) */

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })