require('dotenv').config();

const express = require('express');
const { resolve } = require('path');

const app = express();


const port = process.env.PORT || 8080;

const apiKey = process.env.API_KEY;
const serverSecret = process.env.SERVER_SECRET;
const isKalvian = process.env.IS_KALVIAN === 'true';


app.use(express.static('static'));


app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  console.log('ENV Variables:', { apiKey, serverSecret, isKalvian });
});
