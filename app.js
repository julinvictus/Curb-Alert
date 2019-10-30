const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();
const app = express();
const usersRoutes = require('./routes/api/users');
const postRoutes = require('./routes/api/posts');
const sign_s3 = require('./controllers/sign_s3');

const cors = require('cors');
const port = process.env.PORT || 5000;

// Connect Database
connectDB()

// cors
app.use(cors({ origin: true, credentials: true }));

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and MongoDB API' })
})

app.use('/api', usersRoutes);
app.use('/api', postRoutes);
app.use('/sign_s3', sign_s3.sign_s3);

app.listen(port, () => console.log(`✨👾 Server running on port ${port}`));