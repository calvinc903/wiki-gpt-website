// load additional environment variables (ex: database and storage bucket passwords) from .env file
const env = require('dotenv');
env.config();

// import libraries
const express = require('express');
const cors = require('cors');
const { auth } = require('express-openid-connect');
const app = express();

// handle JSON requests and responses nicely
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// start the application so that it listens at port 8081
const port = process?.env?.PORT || 8081;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
