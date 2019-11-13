const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const port = process.env.PORT || 5000;

const usersRoutes = require('./routes/api/users');
const postRoutes = require('./routes/api/posts');

// Connect Database
connectDB()

// cors
app.use(cors({ origin: true, credentials: true }));

// ... other app.use middleware 
app.use(express.static(path.join(__dirname, "client", "build")))

// body-parser
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and MongoDB API' })
})

app.use('/api', usersRoutes);
app.use('/api', postRoutes);

// Right before your app.listen(), add this:
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => console.log(`✨👾 Server running on port ${port}`));