const express = require('express')
const morgan = require('morgan');
const ejs = require('ejs');

const app = express()
const port = 4216

app.use(express.static('public'));

app.get('/', (req, res) => {
  console.log(__dirname);
  res.sendFile('./index.html',{root: __dirname});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})