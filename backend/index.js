const express = require('express');
const connectDb = require('./db/connection')

const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes')
const cors = require('cors');




connectDb();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/check', (req, res) => {
    res.send('Server is running!');
});

app.use('/', productRoutes)

app.use('/user',userRoutes)

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT} . http://localhost:3000/`);
});
