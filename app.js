require('dotenv').config();
const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
});

database.once('connected', () => {
    console.log("Database Connected");
});

app.use(express.json());

const apiRoutes = express.Router();
app.use('/api', apiRoutes);

app.listen(3000, () => {
    console.log("Server Run at Port 3000");
});