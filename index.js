const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 5000;


app.get('/', (req, res) =>{
    res.send("Get Request");
})

app.listen(port, () => {
    console.log(`Flight booking server is running on port ${port}`);
})