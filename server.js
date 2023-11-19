// npm init
// git init
require('dotenv').config({path: './config.env'});

const express = require('express');
const bodyParser = require('body-parser')
const connectDB =  require("./config/db");
const postRoutes = require('./routes/postRoutes');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/v1/posts', postRoutes);
connectDB();
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})