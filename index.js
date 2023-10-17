const express = require('express')
const app = express()
require('dotenv').config
const port = process.env.SERVER_PORT || 5000
const productrouter=require('./productapi/product/Router')
app.use(express.json())
app.use('/api',productrouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})