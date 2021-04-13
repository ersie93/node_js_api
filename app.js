const express = require('express');
const app = express();
const morgan = require('morgan');

//import routes
const postRoutes = require('./routes/post');

//middleware
app.use(morgan('dev'));

app.use('/', postRoutes);

const port = 8080;
app.listen(port, () => console.log(`listening on port: ${port}`));