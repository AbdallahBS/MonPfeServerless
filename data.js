const express = require('express');
const app = express();
const serverless = require('serverless-http');
const router = express.Router();
// Define a port to listen on
const PORT = 3000;

// Define a route handler for the default home page
app.get('/api/data', (req, res) => {
    console.log("app want to get data ");
    
    const data = {
      status: "success",
      code: 200,

    };
    res.json(data);
  });

  app.use('/.netlify/functions/data', router);

  module.exports.handler = serverless(app);
