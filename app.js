const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');

const contactRoute = require('./routes/contact');

dotenv.config();
const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'public')));
// Middleware

app.use(express.static(path.join(__dirname,'public')));
app.use('/components', express.static(path.join(__dirname,'components')));


// Routes
app.use('/api/Contact',contactRoute);

// Server Start
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
