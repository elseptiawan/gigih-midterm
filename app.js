const express = require('express');
const app = express();

app.use(express.json());

const apiRoutes = express.Router();
app.use('/api', apiRoutes);

app.listen(3000, () => {
    console.log("Server Run at Port 3000");
});