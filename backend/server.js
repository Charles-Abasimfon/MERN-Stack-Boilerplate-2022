const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* ROUTES -- START */
app.use('/api/demo', require('./routes/demoRoutes'));
/* ROUTES -- END */

// Middleware to change a bit of how throw Error displays errors
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
