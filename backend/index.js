const express = require('express');
const serverless = require('serverless-http');
const connectDb = require('./db/connection');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

connectDb();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/check', (req, res) => {
    res.send('Server is running!');
});

app.use('/', productRoutes);
app.use('/user', userRoutes);

module.exports = serverless(app);
