const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const req = require('express/lib/request');
const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//LAUNCHING MONGODB CONNECTION
const connectDB = require('./config/db');
connectDB();

/* ROUTES -- START */
app.use('/api/demos', require('./routes/demoRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
/* ROUTES -- END */

// Middleware to change a bit of how throw Error displays errors
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
