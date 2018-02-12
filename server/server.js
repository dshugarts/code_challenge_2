
const express = require('express');
const app = express();
const bodyParser = require('body-parser');


const PORT = 5000;

app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log("server started on port: ", PORT);
  })