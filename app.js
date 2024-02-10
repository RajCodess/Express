// best is to try !

const sql = require('mysql2')

const express = require('express')
const path = require('path')

const app = express()
const port = 80;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.set('view template','ejs');

app.use(express.static('./public'))
app.use("/api", require('./routes/APIRoutes'))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./index.html"))
})


app.listen(port, () => {
    console.log("Connected to DB ...")
    console.log(`Server is listening at ${port}...`);
})