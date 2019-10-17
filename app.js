const express = require('express');
const connectDB = require('./config/db');
const app = express();
const usersRoutes = require('./routes/api/users');
const postRoutes = require('./routes/api/posts');
const port = process.env.PORT || 5000;

// Connect Database
connectDB()

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and MongoDB API' })
})

app.use('/api', usersRoutes);
app.use('/api', postRoutes);

app.listen(port, () => console.log(`✨👾 Server running on port ${port}`));