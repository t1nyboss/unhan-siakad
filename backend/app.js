const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')
const cors = require("cors");
const { sequelize } = require('./models')

const allroute = require('./router')
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/api', allroute );

app.listen(port, async () => {
  console.log(`Un app listening on port ${port}`)
  await sequelize.authenticate()
  console.log('Database Connected!');
})
