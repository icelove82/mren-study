const path = require('path');
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;

// connect to DB
connectDB();

const app = express();

// middleware - for req body
app.use(express.json()); // raw data
app.use(express.urlencoded({ extended: false })); // x-www-form-urlencoded

// goals route sets
app.use('/api/goals', require('./routes/goalRoute'));

// users route sets
app.use('/api/users', require('./routes/userRoute'));

// serve frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
    )
  );
}

// middleware - for custome error handler
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
