const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
// import mongoose
const mongoose = require('mongoose');
// load env variables
const dotenv = require('dotenv');
dotenv.config()

//import routes
const postRoutes = require('./routes/post');

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/', postRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listening on port: ${port}`));
 
//db connection
mongoose.connect(
  process.env.MONGO_URI,
  {useNewUrlParser: true,  useUnifiedTopology: true}
)
.then(() => console.log('DB Connected'))
 
mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err.message}`)
});
