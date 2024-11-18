const express = require('express')
const app = express()
require('dotenv').config()

const port = 5000 | process.env.PORT


app.get('/', (req, res) =>{
    res.send("Get Request")
})

app.listen(port, () => {
    console.log(`Flight booking server is running on port ${port}`)
})