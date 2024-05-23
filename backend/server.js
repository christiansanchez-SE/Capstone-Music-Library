require("dotenv").config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cookieParser = require('cookie-parser');

const cors = require("cors");
app.use(express.json());
app.use(cookieParser());
app.use(cors());
const connectToDb = require("./config/connectToDb");
connectToDb();

app.listen(PORT, ()=>{
    console.log(`Express Server Listening on port http//:localhost:${PORT}`)
});