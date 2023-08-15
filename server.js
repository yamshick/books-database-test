const express = require("express");
const bodyParser = require("body-parser");
// require("dotenv").config();
const app = express();
var cors = require('cors')



app.use(bodyParser.json());

app.use(cors())
const {readDbSync} = require('./database')

const dbPath = './combat_fiction34.db'

const port = 80

app.get('/', (req, res) => {
    try {
        res.status(200).send(JSON.stringify({message: 'hello world'}))      
    } catch (e) {
        res.status(502).send(JSON.stringify({error: e.toString()}))
    }
})

app.get('/db', (req, res) => {
    try {
        const rows = readDbSync(dbPath)
        // console.log(rows.length)
        res.status(200).send(
            JSON.stringify({
              rows: rows.map(row => row.genre).join(' ') 
            })
          );
        // res.send('hello world')      
    } catch (e) {
        res.status(502).send(JSON.stringify({error: e.toString()}))
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
