require('dotenv').config();
const express = require('express');
const cors = require('cors');
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

const videoRoute = require('./routes/videos');
const productRoute = require('./routes/products');
const commentRoute = require('./routes/comments');

app.use(cors());
app.use(express.json());

const apiRoutes = express.Router();
app.use('/api', apiRoutes);

apiRoutes.use('/video', videoRoute);
apiRoutes.use('/product', productRoute);
apiRoutes.use('/comment', commentRoute);

app.listen(8080, () => {
    console.log("Server Run at Port 8080");
});