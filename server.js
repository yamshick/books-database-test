const {readDB, readDbSync} = require('./database')

const dbPath = './combat_fiction34.db'

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    try {
        // const rows = readDbSync(dbPath)
        // console.log(rows.length)
        // res.send(rows.map(row => row.genre).join('\n\n\n\n'))
        res.send('hello world')      
    } catch (e) {
        res.send(e.toString())
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})