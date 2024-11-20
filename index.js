const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 5000;

//Connect MongoDB
const connectMongoDB = require('./Config/db');
connectMongoDB();


// Auth Router
const authRouter = require('./Routes/AuthRoutes');
app.use('/api', authRouter);


app.get('/', (req, res) =>{
    res.send("Get Request");
})



app.listen(port, () => {
    console.log(`Flight booking server is running on port ${port}`);
})