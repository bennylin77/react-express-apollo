require('dotenv').config();
const port = process.env.PORT;
const express = require('express');
const path = require('path');
const app = express()


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`));